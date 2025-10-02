import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SnipcartAutoClose } from "@/components/snipcart-auto-close"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mr. Bưởi - Clothes for Pet Lovers, Made with Heart",
  description:
    "Cute, humorous, and unique t-shirts and apparel for pet lovers, featuring original cat-themed designs. Supporting shelters and pet families in need.",
  generator: "v0.app",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000",
    title: "Mr. Bưởi - Clothes for Pet Lovers, Made with Heart",
    description:
      "Cute, humorous, and unique t-shirts and apparel for pet lovers, featuring original cat-themed designs. Supporting shelters and pet families in need.",
    siteName: "Mr. Bưởi",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Mr. Bưởi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr. Bưởi - Clothes for Pet Lovers, Made with Heart",
    description:
      "Cute, humorous, and unique t-shirts and apparel for pet lovers, featuring original cat-themed designs. Supporting shelters and pet families in need.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.6.0/default/snipcart.css"
        />
      </head>
      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md">
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} themes={["light"]} forcedTheme="light">
          <Header />
          <Suspense fallback={null}>{children}</Suspense>
          <Footer />
        </ThemeProvider>
        <SnipcartAutoClose />
        {/* Snipcart static container to ensure stable initialization */}
        <div
          id="snipcart"
          hidden
          data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY || ""}
          data-currency="usd"
          data-config-modal-style="side"
        />
        <Script
          src="https://cdn.snipcart.com/themes/v3.6.0/default/snipcart.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
