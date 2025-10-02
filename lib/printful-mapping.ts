// Map your local product IDs + options to Printful sync_variant_id (preferred) or variant_id.
// Start simple: hardcode mappings; later, move to a CMS/DB.

type OptionSelectors = { size?: string | undefined; color?: string | undefined }

// Example mapping. Fill with real sync_variant_id values from your Printful dashboard
const LOCAL_TO_PRINTFUL: Record<string, Record<string, number>> = {
  // key: `${size}|${color}` lowercased
  // "product-5": { "m|white": 123456789, "l|black": 123456790 },
}

function keyOf(options: OptionSelectors): string {
  const size = (options.size || "").toLowerCase()
  const color = (options.color || "").toLowerCase()
  return `${size}|${color}`
}

export function getPrintfulSyncVariantId(localProductId: string, options: OptionSelectors): number | undefined {
  const map = LOCAL_TO_PRINTFUL[localProductId]
  if (!map) return undefined
  return map[keyOf(options)]
}


