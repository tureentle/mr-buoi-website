import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

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
                Discover cute, humorous, and unique t-shirts featuring original cat-themed designs. Every purchase helps
                support pets and families in need.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Learn Our Story
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
              <img
                src="/cute-cartoon-cat-wearing-a-t-shirt--playful-and-fr.jpg"
                alt="Mr. Bưởi mascot cat"
                className="w-full max-w-md mx-auto hover:animate-wiggle transition-transform cursor-pointer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl scale-75 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
