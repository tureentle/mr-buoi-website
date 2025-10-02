import type { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  const payload = await req.json().catch(() => null)
  if (!payload) return new Response("invalid", { status: 400 })

  // Example: extract tracking info when package ships
  const trackingNumber = payload?.result?.shipments?.[0]?.tracking_number
  const trackingUrl = payload?.result?.shipments?.[0]?.tracking_url
  const externalId = payload?.result?.external_id

  // TODO: notify customer via email or update your DB using externalId
  // e.g., await sendEmailForTracking(externalId, trackingNumber, trackingUrl)

  return new Response("ok")
}


