import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Truck, RotateCcw, ShieldCheck } from "lucide-react"
import Script from "next/script"
import ProductImageGallery from "@/components/product-image-gallery"
import { ProductPurchaseForm } from "@/components/product-purchase-form"
import { fetchSyncProductById, parseProductIdFromSlug } from "@/lib/printful"
import { localProductGalleries } from "@/lib/products"

export const dynamic = 'force-dynamic'

type PageProps = {
  params: { slug: string }
}

export default async function ProductPage({ params }: PageProps) {
  const syncProductId = parseProductIdFromSlug(params.slug)
  if (!syncProductId) return notFound()
  let product
  try {
    product = await fetchSyncProductById(syncProductId)
  } catch {
    return notFound()
  }
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000") as string
  const productUrl = `${baseUrl}/products/${params.slug}`
  const primaryImage = product.thumbnail_url || "/placeholder.svg"
  const mapped = localProductGalleries[params.slug]
  const imageUrls = mapped && mapped.length > 0
    ? mapped.map(src => (src.startsWith("http") ? src : `${baseUrl}${src}`))
    : [primaryImage.startsWith("http") ? primaryImage : `${baseUrl}${primaryImage}`]

  // Derive size/color options from variant names (best-effort)
  const sizeTokens = ["xs","s","m","l","xl","2xl","xxl","3xl","4xl"]
  const colorTokens = ["black","white","navy","blue","red","green","pink","purple","gray","grey","heather","yellow","orange","brown","maroon","teal"]
  const sizesSet = new Set<string>()
  const colorsSet = new Set<string>()
  for (const v of product.variants) {
    const n = v.name.toLowerCase()
    for (const t of sizeTokens) if (n.includes(t)) sizesSet.add(t)
    for (const t of colorTokens) if (n.includes(t)) colorsSet.add(t)
  }
  const normalizeSize = (s: string) => s.toUpperCase().replace("XXL", "XXL").replace("2XL", "2XL")
  const capitalize = (c: string) => c.charAt(0).toUpperCase() + c.slice(1)
  const sizeList = Array.from(sizesSet).map(normalizeSize)
  const colorList = Array.from(colorsSet).map(capitalize)
  const sizeOptions = (sizeList.join("|") || "S|M|L|XL")
  const colorOptions = (colorList.join("|") || "White|Black")
  const defaultSize = (sizeList[0] || "M")
  const defaultColor = (colorList[0] || "White")
  const basePrice = product.variants[0]?.retail_price || "25.00"

  return (
    <div className="container mx-auto px-4 py-12" id="main">
      <Script
        id={`product-jsonld-${product.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "Product",
              name: product.name,
              image: imageUrls,
              sku: `pf-${product.id}`,
              url: productUrl,
            },
            null,
            2,
          ),
        }}
      />
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <ProductImageGallery images={imageUrls} alt={product.name} />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-primary">${basePrice} USD</span>
          </div>
          <ProductPurchaseForm
            productId={product.id}
            productName={product.name}
            productUrl={productUrl}
            productImage={primaryImage}
            price={basePrice}
            sizeOptions={sizeOptions}
            colorOptions={colorOptions}
            defaultSize={defaultSize}
            defaultColor={defaultColor}
          />

          <div className="pt-4 space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Truck className="h-4 w-4" />
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="flex items-center space-x-2">
              <RotateCcw className="h-4 w-4" />
              <span>30-day hassle-free returns & exchanges</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-4 w-4" />
              <span>Secure checkout powered by Snipcart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


