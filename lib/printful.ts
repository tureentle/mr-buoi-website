type FetchOptions = { cache?: RequestCache; nextRevalidateSeconds?: number }

const PRINTFUL_API = "https://api.printful.com"

async function pf<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${PRINTFUL_API}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
      ...(init?.headers || {}),
    },
    cache: "no-store",
  })
  const data = await res.json()
  if (!res.ok) throw new Error(`Printful error ${res.status}: ${JSON.stringify(data)}`)
  return data
}

export type SyncProductSummary = {
  id: number
  external_id?: string | null
  name: string
  thumbnail_url?: string | null
}

export type SyncProduct = {
  id: number
  external_id?: string | null
  name: string
  thumbnail_url?: string | null
  variants: Array<{
    id: number // sync_variant_id
    name: string
    retail_price?: string | null
    variant_id?: number | null // catalog variant id
  }>
}

export async function fetchSyncProducts(limit = 24, offset = 0): Promise<SyncProductSummary[]> {
  const json = await pf<{ result: Array<{ id: number; external_id?: string; name: string; thumbnail_url?: string }> }>(
    `/sync/products?limit=${limit}&offset=${offset}`,
  )
  return json.result.map(p => ({ id: p.id, external_id: p.external_id ?? null, name: p.name, thumbnail_url: p.thumbnail_url ?? null }))
}

export async function fetchSyncProductById(id: number): Promise<SyncProduct> {
  const json = await pf<{ result: { sync_product: { id: number; name: string; external_id?: string; thumbnail_url?: string }; sync_variants: Array<{ id: number; name: string; retail_price?: string; variant_id?: number }> } }>(
    `/sync/products/${id}`,
  )
  const sp = json.result.sync_product
  const variants = json.result.sync_variants.map(v => ({ id: v.id, name: v.name, retail_price: v.retail_price ?? null, variant_id: v.variant_id ?? null }))
  return { id: sp.id, name: sp.name, external_id: sp.external_id ?? null, thumbnail_url: sp.thumbnail_url ?? null, variants }
}

export function slugifyName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
}

export function buildProductSlug(id: number, name: string): string {
  return `${id}-${slugifyName(name)}`
}

export function parseProductIdFromSlug(slug: string): number | null {
  const match = slug.match(/^(\d+)-/)
  if (!match) return null
  return Number(match[1])
}

export async function resolveSyncVariantIdByOptions(syncProductId: number, size?: string, color?: string): Promise<number | undefined> {
  const prod = await fetchSyncProductById(syncProductId)
  const normalizedSize = (size || "").toLowerCase()
  const normalizedColor = (color || "").toLowerCase()
  // Heuristic match by variant name containing size/color tokens
  const candidate = prod.variants.find(v => {
    const n = v.name.toLowerCase()
    const sizeOk = normalizedSize ? n.includes(normalizedSize) : true
    const colorOk = normalizedColor ? n.includes(normalizedColor) : true
    return sizeOk && colorOk
  })
  return candidate?.id
}


