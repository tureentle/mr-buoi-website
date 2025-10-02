import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ArrowRight } from "lucide-react"
import { fetchSyncProducts, buildProductSlug, fetchSyncProductById } from "@/lib/printful"

export async function FeaturedCollection() {
  const products = await fetchSyncProducts(8)
  return (
    <section id="shop" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Featured Collection</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Our most loved designs, crafted with care and a touch of feline magic
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {await Promise.all(products.map(async (product) => {
            const full = await fetchSyncProductById(product.id)
            const basePrice = full.variants[0]?.retail_price || "25.00"
            const sizes = Array.from(new Set(full.variants.flatMap(v => v.name.toLowerCase().match(/\b(xs|s|m|l|xl|2xl|xxl|3xl|4xl)\b/g) || []))).map(s => s.toUpperCase().replace("2xl","2XL").replace("xxl","XXL"))
            const colors = Array.from(new Set(full.variants.flatMap(v => v.name.toLowerCase().match(/black|white|navy|blue|red|green|pink|purple|gray|grey|heather|yellow|orange|brown|maroon|teal/g) || []))).map(c => c.charAt(0).toUpperCase() + c.slice(1))
            const sizeOptions = (sizes.join("|") || "S|M|L|XL")
            const colorOptions = (colors.join("|") || "White|Black")
            const defaultSize = (sizes[0] || "M")
            const defaultColor = (colors[0] || "White")
            const productUrl = `/products/${buildProductSlug(product.id, product.name)}`
            return (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <Link href={`/products/${buildProductSlug(product.id, product.name)}`} className="block">
                  <div className="relative h-80">
                    <Image
                      src={product.thumbnail_url || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
                {/* Badge omitted when using Printful fields only */}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <div className="text-sm text-foreground font-medium">${basePrice} USD</div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href={productUrl}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <button
                    className="snipcart-add-item inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 cursor-pointer"
                    data-item-id={`pf-${full.id}`}
                    data-item-name={full.name}
                    data-item-price={basePrice}
                    data-item-url={productUrl}
                    data-item-image={product.thumbnail_url || "/placeholder.svg"}
                    data-item-custom1-name="Size"
                    data-item-custom1-options={sizeOptions}
                    data-item-custom1-value={defaultSize}
                    data-item-custom2-name="Color"
                    data-item-custom2-options={colorOptions}
                    data-item-custom2-value={defaultColor}
                  >
                    Add to Cart
                  </button>
                </div>
              </CardContent>
            </Card>
            )
          }))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="px-8 bg-transparent">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
