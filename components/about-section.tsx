import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Meet Mr. Bưởi: Our Inspiration</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                It all started with a little orange cat named Mr. Bưởi, who came into our lives with a broken leg and a
                heart full of love. Despite his injury, his playful spirit and endless purrs reminded us that even in
                tough times, there's always room for joy.
              </p>
              <p>
                Inspired by his resilience, we created Mr. Bưởi to celebrate the special bond between pets and their
                humans. Every design tells a story of love, laughter, and the beautiful chaos that comes with being a
                pet parent.
              </p>
              <p>
                But we didn't stop there. We knew that many pets and families face challenges just like Mr. Bưởi did.
                That's why every purchase helps support animal shelters, provides low-income veterinary care, and
                assists families with pet-related costs.
              </p>
            </div>
          </div>

          <div className="relative">
            <Card className="overflow-hidden border-0 shadow-2xl">
              <CardContent className="p-0">
                <img
                  src="/heartwarming-photo-of-orange-cat-with-bandaged-leg.jpg"
                  alt="Mr. Bưởi the cat with his bandaged leg"
                  className="w-full h-96 object-cover"
                />
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
