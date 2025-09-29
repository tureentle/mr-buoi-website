import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedCollection } from "@/components/featured-collection"
import { AboutSection } from "@/components/about-section"
import { EmailSignupSection } from "@/components/email-signup-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedCollection />
        <AboutSection />
        <EmailSignupSection />
      </main>
      <Footer />
    </div>
  )
}
