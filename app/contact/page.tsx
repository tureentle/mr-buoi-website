export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16" id="main">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-muted-foreground max-w-2xl mb-6">
        Questions about your order or our products? Send us a note and we’ll get back to you.
      </p>
      <div className="space-y-2 text-sm text-foreground/80">
        <div>Email: <a className="underline" href="mailto:hello@mrbuoi.com">hello@mrbuoi.com</a></div>
        <div>Phone: <a className="underline" href="tel:+18006728644">1-800-MR-BUOI</a></div>
      </div>
    </div>
  )
}


