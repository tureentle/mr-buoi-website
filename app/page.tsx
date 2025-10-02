import { HeroSection } from "@/components/hero-section"
import { FeaturedCollection } from "@/components/featured-collection"
import { AboutSection } from "@/components/about-section"
import { EmailSignupSection } from "@/components/email-signup-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main id="main">
        <HeroSection />
        <FeaturedCollection />
        <AboutSection />
        <EmailSignupSection />
      </main>
    </div>
  )
}
