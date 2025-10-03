import type { NextRequest } from "next/server"
import { resolveSyncVariantIdByOptions } from "../../../../lib/printful"

async function createPrintfulOrder(body: unknown) {
  const res = await fetch("https://api.printful.com/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
    },
    body: JSON.stringify(body),
  })

  const json = await res.json()
  return { ok: res.ok, status: res.status, json }
}

function extractCustom(options: any): Record<string, string> {
  try {
    if (!options) return {}
    // Snipcart may send custom fields as array or object; normalize to key-value by name
    if (Array.isArray(options)) {
      return options.reduce((acc: Record<string, string>, f: any) => {
        const key = (f?.name || f?.key || "").toString()
        const value = (f?.value || "").toString()
        if (key) acc[key] = value
        return acc
      }, {})
    }
    return options as Record<string, string>
  } catch {
    return {}
  }
}

export async function POST(req: NextRequest) {
  // Read raw body to allow signature verification if desired
  const raw = await req.text()
  let payload: any
  try {
    payload = JSON.parse(raw)
  } catch (e) {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 })
  }

  // Snipcart webhooks may wrap the order as { eventName, content: { ...order } }
  const eventName: string | undefined = payload?.eventName
  const order: any = payload?.content ?? payload

  // Route only order events; ignore everything else (e.g., customer updates)
  if (eventName && !/^order\.(completed|paid)$/i.test(eventName)) {
    return new Response("ignored", { status: 200 })
  }

  try {
    const nameFromBilling = order?.billingAddress?.fullName || order?.billingAddress?.name || ""
    const nameFromUser = order?.user?.billingAddressName || order?.user?.shippingAddressName || ""
    const mergedName = (nameFromBilling || nameFromUser || `${order?.billingAddress?.firstName || ""} ${order?.billingAddress?.lastName || ""}`).trim()

    const recipient = {
      name: mergedName || order?.email || "",
      address1: order?.shippingAddress?.address1,
      address2: order?.shippingAddress?.address2 || "",
      city: order?.shippingAddress?.city,
      state_code: order?.shippingAddress?.province || "",
      country_code: order?.shippingAddress?.country || "",
      zip: order?.shippingAddress?.postalCode || "",
      email: order?.email,
      phone: order?.shippingAddress?.phone || "",
    }

    const rawItems: any[] = Array.isArray(order?.items) ? order.items : []
    if (rawItems.length === 0) {
      return new Response(JSON.stringify({ forwarded: false, reason: "no_items" }), { status: 200 })
    }

    const items = await Promise.all(rawItems.map(async (item: any) => {
      const custom = extractCustom(item?.customFields || item?.custom || item?.customFieldsJson)
      const size = custom["Size"] || custom["size"]
      const color = custom["Color"] || custom["color"]
      // Expect item.id to contain Printful sync product id like "pf-12345" or just numeric id
      const rawId = String(item?.id ?? "")
      const match = rawId.match(/^(?:pf-)?(\d+)$/)
      const syncProductId = match ? Number(match[1]) : undefined
      const syncVariantId = syncProductId ? await resolveSyncVariantIdByOptions(syncProductId, size, color) : undefined

      // Snipcart may send unitPrice as number or as object with { amount }
      let retailPrice: string | undefined
      if (typeof item?.unitPrice === "number") {
        retailPrice = String(item.unitPrice)
      } else if (item?.unitPrice && typeof item.unitPrice === "object" && typeof item.unitPrice.amount === "number") {
        retailPrice = String(item.unitPrice.amount / 100)
      } else if (typeof item?.price === "number") {
        retailPrice = String(item.price)
      }
      return {
        sync_variant_id: syncVariantId ?? undefined,
        quantity: item?.quantity,
        retail_price: retailPrice,
        name: item?.name,
      }
    }))

    // Filter out items that couldn't resolve to a valid sync variant
    const resolvableItems = items.filter((it: any) => Boolean(it.sync_variant_id))
    if (resolvableItems.length === 0) {
      return new Response(JSON.stringify({ forwarded: false, reason: "no_resolvable_items" }), { status: 200 })
    }

    const body = {
      external_id: order?.invoiceNumber || order?.token || order?.id || undefined,
      recipient,
      items: resolvableItems,
    }

    const pf = await createPrintfulOrder(body)
    if (!pf.ok) {
      // Do not surface as 5xx to Snipcart to avoid retries; log client error context instead
      return new Response(JSON.stringify({ forwarded: false, printful: pf.json }), { status: 200 })
    }

    return new Response(JSON.stringify({ forwarded: true, printful: pf.json }), { status: 200 })
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err?.message || "Unexpected error" }), { status: 500 })
  }
}


