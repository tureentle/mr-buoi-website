import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Meet Mr. Bưởi: Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>We’re Mr. Bưởi, a clothing brand for pet lovers.</p>
              <p>
                Our inspiration comes from our own cat, Mr. Bưởi, who once faced a broken leg and the long road to
                recovery. Caring for him was tough, not just emotionally but financially too. We know firsthand what it’s
                like to love your pet deeply while struggling to cover the costs of keeping them healthy.
              </p>
              <p>
                That’s why we started Mr. Bưởi. Our designs, created in a unique and playful art style with plenty of
                humor, celebrate the bond between pets and their humans. Each piece is a reminder of the joy,
                resilience, and laughter that animals bring into our lives.
              </p>
              <div className="space-y-2">
                <p>But our mission doesn’t stop at design. With every purchase, we give back to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Animal shelters that provide second chances</li>
                  <li>Low-income veterinary clinics that keep pets healthy</li>
                  <li>Pet lovers in need who are facing unexpected medical costs</li>
                </ul>
              </div>
              <p>
                For us, Mr. Bưởi isn’t just our cat. He’s a symbol of love, resilience, and the belief that every pet
                deserves care no matter the circumstances.
              </p>
            </div>
          </div>

          <div className="relative">
            <Card className="overflow-hidden border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="relative w-full h-96">
                  <Image
                    src="/Buoi.jpg"
                    alt="Mr. Bưởi the cat"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10">
                  <p className="text-center font-medium text-foreground">
                    "Every pet deserves love, care, and a second chance at happiness."
                  </p>
                  <p className="text-center text-sm text-muted-foreground mt-2">- The Mr. Bưởi Story</p>
                </div>
              </CardContent>
            </Card>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
