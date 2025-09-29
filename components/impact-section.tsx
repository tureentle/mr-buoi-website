import { Card, CardContent } from "@/components/ui/card"
import { Heart, Home, DollarSign, Users } from "lucide-react"

const impactStats = [
  {
    icon: Home,
    title: "Animal Shelters Supported",
    value: "50+",
    description: "Local shelters receiving monthly donations",
  },
  {
    icon: Heart,
    title: "Pets Helped",
    value: "1,200+",
    description: "Pets received medical care through our program",
  },
  {
    icon: DollarSign,
    title: "Veterinary Care Funded",
    value: "$75K+",
    description: "In low-income veterinary assistance provided",
  },
  {
    icon: Users,
    title: "Families Assisted",
    value: "800+",
    description: "Pet families helped with emergency costs",
  },
]

export function ImpactSection() {
  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-secondary/20 to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Making a Difference Together</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Every purchase creates a ripple of kindness in the pet community. Here's the impact we've made together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-8 space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <h3 className="font-semibold text-lg mb-2">{stat.title}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto border-0 shadow-lg bg-card/50 backdrop-blur">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">Support Shelters</h4>
                  <p className="text-sm text-muted-foreground">
                    Monthly donations to local animal shelters and rescue organizations
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="h-6 w-6 text-secondary" />
                  </div>
                  <h4 className="font-semibold">Veterinary Care</h4>
                  <p className="text-sm text-muted-foreground">
                    Funding medical treatment for pets from low-income families
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-semibold">Family Support</h4>
                  <p className="text-sm text-muted-foreground">Emergency assistance for pet-related costs and care</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
