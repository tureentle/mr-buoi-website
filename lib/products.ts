export type Product = {
  id: string
  name: string
  slug: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  badge?: string
  description: string
}

export const products: Product[] = [
  {
    id: "product-1",
    name: "Purrfect Day Tee",
    slug: "purrfect-day-tee",
    price: 28,
    originalPrice: 35,
    image: "/cute-cat-t-shirt-design-with-paw-prints--soft-peac.jpg",
    rating: 4.9,
    reviews: 127,
    badge: "Best Seller",
    description: "Soft cotton tee with playful paw prints."
  },
  {
    id: "product-2",
    name: "Whiskers & Dreams",
    slug: "whiskers-and-dreams",
    price: 32,
    image: "/sleeping-cat-illustration-on-mint-green-t-shirt.jpg",
    rating: 4.8,
    reviews: 89,
    badge: "New",
    description: "Dreamy mint tee featuring a sleeping cat."
  },
  {
    id: "product-3",
    name: "Cat Mom Life",
    slug: "cat-mom-life",
    price: 30,
    image: "/funny-cat-mom-t-shirt-design--sky-blue-color.jpg",
    rating: 5.0,
    reviews: 203,
    badge: "Fan Favorite",
    description: "Celebrate cat parenthood in style."
  },
  {
    id: "product-4",
    name: "Paws & Reflect",
    slug: "paws-and-reflect",
    price: 29,
    image: "/zen-cat-meditation-t-shirt-design--soft-lavender.jpg",
    rating: 4.7,
    reviews: 156,
    badge: "Limited",
    description: "Zen-inspired lavender tee for calm vibes."
  }
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductUrl(slug: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000"
  return `${baseUrl}/products/${slug}`
}


