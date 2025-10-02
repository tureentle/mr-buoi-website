export type Product = {
  id: string
  name: string
  slug: string
  price: number
  originalPrice?: number
  image: string
  images?: string[]
  rating?: number
  reviews?: number
  badge?: string
  description: string
}

export const products: Product[] = [
  {
    id: "product-5",
    name: "Mr.Buoi",
    slug: "mr-buoi",
    price: 25.9,
    image: "/mr-buoi.jpg",
    images: ["/mr-buoi.jpg", "/mr-buoi3.jpg", "/mr-2.jpg"],
    
    badge: "New",
    description: "Meet Mr. Bưởi — the wide-eyed, curious cat that started it all. This playful tee captures his quirky charm and big personality, perfect for cat lovers who appreciate a little humor with their style."
  },
  {
    id: "product-6",
    name: "The 9 Lives of Mr. Buoi",
    slug: "the-9-lives-of-mr-buoi",
    price: 25.9,
    image: "/the-9-lives-of-mr-buoi.jpg",
    images: [
      "/the-9-lives-of-mr-buoi.jpg",
      "/the-9-lives-of-mr-buoi2.jpg",
      "/the-9-lives-of-mr-buoi3.jpg",
    ],
    
    badge: "New",
    description:
      "Nine cats, nine personalities, one Mr. Bưởi. This fun design brings his many moods to life — perfect for anyone who knows that every cat has more than one side.",
  }
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductUrl(slug: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000"
  return `${baseUrl}/products/${slug}`
}


// Optional local gallery mapping for additional images per local product slug
export const localProductGalleries: Record<string, string[]> = {
  "mr-buoi": [
    "/mr-buoi.jpg",
    "/mr-buoi3.jpg",
    "/mr-2.jpg",
  ],
  "the-9-lives-of-mr-buoi": [
    "/the-9-lives-of-mr-buoi.jpg",
    "/the-9-lives-of-mr-buoi2.jpg",
    "/the-9-lives-of-mr-buoi3.jpg",
  ],
}


