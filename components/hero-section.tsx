import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-accent/20 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                Clothes for Pet Lovers, <span className="text-primary">Made with Heart</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl">
                Discover cute, humorous, and unique t-shirts featuring original pet-themed designs. Every purchase helps
                support pets and families in need.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6 group">
                <Link href="#shop">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                <Link href="#about">Learn Our Story</Link>
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Free shipping over $50</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <span>Supporting pet shelters</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 animate-float">
              <div className="relative w-full max-w-md mx-auto">
                <Image
                  src="/mr-buoi3.jpg"
                  alt="Mr. Bưởi mascot cat"
                  width={768}
                  height={768}
                  className="w-full h-auto hover:animate-wiggle transition-transform cursor-pointer"
                  priority
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl scale-75 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
