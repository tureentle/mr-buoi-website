import { Button } from "@/components/ui/button"
import { Instagram, Twitter, Facebook, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Mr. Bưởi logo" width={32} height={32} className="h-8 w-auto" />
              <span className="text-xl font-bold">Mr. Bưởi</span>
            </Link>
            <p className="text-sm text-background/80">
              Clothes for pet lovers, made with heart. Supporting pets and families in need, one t-shirt at a time.
            </p>
            <div className="flex space-x-3">
              <Button asChild variant="ghost" size="icon" className="text-background hover:text-foreground hover:bg-background">
                <a href="https://instagram.com/mrbuoi" target="_blank" rel="noopener noreferrer" aria-label="Visit Mr. Bưởi on Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-background hover:text-foreground hover:bg-background">
                <a href="https://twitter.com/mrbuoi" target="_blank" rel="noopener noreferrer" aria-label="Visit Mr. Bưởi on Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-background hover:text-foreground hover:bg-background">
                <a href="https://facebook.com/mrbuoi" target="_blank" rel="noopener noreferrer" aria-label="Visit Mr. Bưởi on Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Shop</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="/products" className="hover:text-background transition-colors">
                  All Products
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="/contact" className="hover:text-background transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/shipping-returns" className="hover:text-background transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get in Touch</h3>
            <div className="space-y-3 text-sm text-background/80">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@mrbuoi.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>1-800-MR-BUOI</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Made with ❤️ in California</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-background/60">
              © 2025 Mr. Bưởi. All rights reserved. Made with love for pets everywhere.
            </div>
            <div className="flex space-x-6 text-sm text-background/60">
              <a href="/privacy" className="hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="/accessibility" className="hover:text-background transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
