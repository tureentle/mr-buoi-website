"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Menu } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export function Header() {
  const [snipcartReady, setSnipcartReady] = React.useState(false)

  React.useEffect(() => {
    const onReady = () => setSnipcartReady(true)
    document.addEventListener("snipcart.ready", onReady)
    return () => document.removeEventListener("snipcart.ready", onReady)
  }, [])

  const handleToggleCart = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    const snipcart: any = (globalThis as any).Snipcart
    if (!snipcart || !snipcartReady) return
    const isOpen = document.documentElement.classList.contains("snipcart-cart--opened") || document.body.classList.contains("snipcart-cart--opened")
    if (isOpen) snipcart.api.theme.cart.close()
    else snipcart.api.theme.cart.open()
  }, [snipcartReady])
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Mr. Bưởi logo" width={32} height={32} className="h-8 w-auto" />
            <span className="text-xl font-bold text-foreground">Mr. Bưởi</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/#shop" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Shop
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            aria-label="Open cart"
            onClick={handleToggleCart}
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
              <span className="snipcart-items-count" suppressHydrationWarning>0</span>
            </span>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <SheetHeader>
                <SheetTitle className="flex items-center space-x-2">
                  <span className="text-2xl">🐱</span>
                  <span>Mr. Bưởi</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col space-y-4">
                <Link href="/#shop" className="text-sm font-medium text-foreground/80 hover:text-foreground">
                  Shop
                </Link>
                <Link href="/#about" className="text-sm font-medium text-foreground/80 hover:text-foreground">
                  About
                </Link>
                <Link href="/products" className="text-sm font-medium text-foreground/80 hover:text-foreground">
                  All Products
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
