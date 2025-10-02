import Link from "next/link"
import { fetchSyncProducts, buildProductSlug, fetchSyncProductById } from "@/lib/printful"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight } from "lucide-react"
import Image from "next/image"

export default async function ProductsIndexPage() {
  return (
    <div className="min-h-screen bg-background">
      <main id="main" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-balance">All Products</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our full collection of pet-loving designs. Every purchase helps pets in need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(await fetchSyncProducts()).map(async (product) => {
              const full = await fetchSyncProductById(product.id)
              const basePrice = full.variants[0]?.retail_price || "25.00"
              const sizes = Array.from(new Set(full.variants.flatMap(v => v.name.toLowerCase().match(/\b(xs|s|m|l|xl|2xl|xxl|3xl|4xl)\b/g) || []))).map(s => s.toUpperCase().replace("2xl","2XL").replace("xxl","XXL"))
              const colors = Array.from(new Set(full.variants.flatMap(v => v.name.toLowerCase().match(/black|white|navy|blue|red|green|pink|purple|gray|grey|heather|yellow|orange|brown|maroon|teal/g) || []))).map(c => c.charAt(0).toUpperCase() + c.slice(1))
              const sizeOptions = (sizes.join("|") || "S|M|L|XL")
              const colorOptions = (colors.join("|") || "White|Black")
              const defaultSize = (sizes[0] || "M")
              const defaultColor = (colors[0] || "White")
              return (
              <Card key={product.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <Link href={`/products/${buildProductSlug(product.id, product.name)}`}>
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
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <Link href={`/products/${buildProductSlug(product.id, product.name)}`} className="hover:underline">
                      <h2 className="font-semibold text-lg mb-1">{product.name}</h2>
                    </Link>
                    <div className="text-sm text-foreground font-medium">${basePrice} USD</div>
                  </div>

                  <div className="flex gap-3">
                    <Button asChild variant="outline" className="flex-1 bg-transparent">
                      <Link href={`/products/${buildProductSlug(product.id, product.name)}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <button
                      className="snipcart-add-item inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 cursor-pointer"
                      data-item-id={`pf-${full.id}`}
                      data-item-name={full.name}
                      data-item-price={basePrice}
                      data-item-url={`/products/${buildProductSlug(product.id, product.name)}`}
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
            })}
          </div>
        </div>
      </main>
    </div>
  )
}



