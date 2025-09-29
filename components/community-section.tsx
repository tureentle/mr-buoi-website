import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Instagram, Twitter, Facebook } from "lucide-react"

const communityPosts = [
  {
    id: 1,
    user: "@catmom_sarah",
    image: "/happy-woman-wearing-cat-t-shirt-with-her-orange-ca.jpg",
    caption: "Mr. Bưởi tee arrived and my kitty approves! 🐱",
    likes: 234,
    platform: "instagram",
  },
  {
    id: 2,
    user: "@pet_dad_mike",
    image: "/man-in-cat-themed-shirt-playing-with-multiple-cats.jpg",
    caption: "Best quality shirts and supporting a great cause!",
    likes: 189,
    platform: "twitter",
  },
  {
    id: 3,
    user: "@rescue_mom_jen",
    image: "/woman-wearing-mr-buoi-shirt-at-animal-shelter-with.jpg",
    caption: "Wearing my Mr. Bưởi shirt while volunteering at the shelter 💕",
    likes: 456,
    platform: "instagram",
  },
  {
    id: 4,
    user: "@feline_family",
    image: "/placeholder-bfhin.png",
    caption: "Family photo day with our Mr. Bưởi collection!",
    likes: 312,
    platform: "facebook",
  },
]

const testimonials = [
  {
    name: "Emma Rodriguez",
    text: "The quality is amazing and knowing my purchase helps other pets makes it even better!",
    rating: 5,
  },
  {
    name: "David Chen",
    text: "My cat literally purrs every time I wear my Mr. Bưởi shirt. Coincidence? I think not!",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    text: "Fast shipping, great customer service, and the designs are absolutely adorable.",
    rating: 5,
  },
]

export function CommunitySection() {
  return (
    <section id="community" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Our Amazing Community</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            See how pet lovers around the world are rocking their Mr. Bưởi gear and making a difference
          </p>
        </div>

        {/* Community Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={`Community post by ${post.user}`}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-background/80 text-foreground">
                  {post.platform === "instagram" && <Instagram className="h-3 w-3 mr-1" />}
                  {post.platform === "twitter" && <Twitter className="h-3 w-3 mr-1" />}
                  {post.platform === "facebook" && <Facebook className="h-3 w-3 mr-1" />}
                  {post.likes}
                </Badge>
              </div>
              <CardContent className="p-4">
                <p className="font-medium text-sm mb-2">{post.user}</p>
                <p className="text-sm text-muted-foreground">{post.caption}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center">What Our Customers Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-yellow-400 rounded-full"></div>
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Social CTA */}
        <div className="mt-16 text-center space-y-6">
          <h3 className="text-xl font-bold">Share Your Mr. Bưởi Moments</h3>
          <p className="text-muted-foreground">Tag us @mrbuoi for a chance to be featured!</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Facebook className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
