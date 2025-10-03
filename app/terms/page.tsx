export default function TermsOfServicePage() {
  return (
    <main id="main" className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
      <div className="prose prose-neutral dark:prose-invert max-w-3xl">
        <p><strong>Last updated:</strong> 10/02/2025</p>
        <p>Welcome to Mr. Bưởi. By accessing or using our website, you agree to these terms:</p>
        <ul>
          <li>You must be at least 18 years old to purchase from our store.</li>
          <li>All orders are subject to availability and confirmation of payment.</li>
          <li>Prices and product descriptions may change at any time.</li>
          <li>We are not responsible for delays caused by shipping carriers or print-on-demand providers.</li>
          <li>If you misuse our site or attempt fraud, we may refuse service.</li>
        </ul>
        <p>
          If you have any concerns, please contact us at{" "}
          <a href="mailto:luandep123@gmail.com">luandep123@gmail.com</a>.
        </p>
      </div>
    </main>
  )
}


