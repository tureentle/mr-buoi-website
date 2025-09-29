import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Gift, Heart, Sparkles } from "lucide-react"

export function EmailSignupSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-0 shadow-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2">
              {/* Left side - Content */}
              <div className="p-8 lg:p-12 space-y-6">
                <div className="space-y-4">
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Exclusive Perks
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-balance">Join the Mr. Bưởi Club</h2>
                  <p className="text-lg text-muted-foreground text-pretty">
                    Get exclusive access to new designs, special discounts, and heartwarming stories from the pets
                    you're helping.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Gift className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm">15% off your first order</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Mail className="h-4 w-4 text-secondary" />
                    </div>
                    <span className="text-sm">Early access to new collections</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                      <Heart className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-sm">Monthly impact updates from pets you've helped</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input type="email" placeholder="Enter your email address" className="flex-1" />
                    <Button className="px-8">Join Now</Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    By joining, you agree to receive emails from Mr. Bưởi. Unsubscribe anytime. We respect your privacy
                    and never share your information.
                  </p>
                </div>
              </div>

              {/* Right side - Visual */}
              <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 p-8 lg:p-12 flex items-center justify-center">
                <div className="relative">
                  <img
                    src="/cute-cartoon-cat-with-envelope-and-hearts--newslet.jpg"
                    alt="Newsletter signup illustration"
                    className="w-64 h-64 animate-float"
                  />
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/30 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary/30 rounded-full blur-xl animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trust indicators */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-sm text-muted-foreground">Trusted by over 10,000 pet lovers worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-xs font-medium">🔒 Privacy Protected</div>
            <div className="text-xs font-medium">📧 No Spam Promise</div>
            <div className="text-xs font-medium">💝 Unsubscribe Anytime</div>
          </div>
        </div>
      </div>
    </section>
  )
}
