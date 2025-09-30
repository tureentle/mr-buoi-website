import { notFound } from "next/navigation"
import { products, getProductBySlug, getProductUrl } from "@/lib/products"
import { Button } from "@/components/ui/button"

type PageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export default function ProductPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug)
  if (!product) return notFound()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-muted-foreground">{product.description}</p>
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-primary">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
            )}
          </div>
          <Button
            className="snipcart-add-item"
            data-item-id={product.id}
            data-item-name={product.name}
            data-item-price={product.price}
            data-item-url={getProductUrl(product.slug)}
            data-item-image={product.image || "/placeholder.svg"}
            data-item-description={product.description}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}


