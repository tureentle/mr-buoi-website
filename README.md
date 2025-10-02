# Mr Bưởi Website

Next.js 14 + React 18 storefront with Tailwind CSS and Snipcart.

## Develop

```bash
pnpm dev
# or
npm run dev
```

## Env

Create `.env.local` in project root:

```bash
NEXT_PUBLIC_SNIPCART_API_KEY=YOUR_PUBLIC_API_KEY_HERE
```

Restart the dev server after editing env vars.

## Scripts

- dev: Next dev server
- build: Production build
- start: Start production server

## Tech

- Next.js 14
- React 18
- Tailwind CSS v4
- Snipcart v3 (client-side cart)

## Deploy

You can deploy to Vercel. Set `NEXT_PUBLIC_SNIPCART_API_KEY` in project environment variables.

## Printful + Snipcart Integration (Beta)

This repo includes endpoints to automatically forward Snipcart orders to Printful and receive shipment webhooks back from Printful.

### Environment Variables (Vercel)

Set these in your Vercel project settings (or a local `.env.local`):

- `NEXT_PUBLIC_SNIPCART_API_KEY` – public Snipcart API key
- `PRINTFUL_API_KEY` – Printful API token (Bearer)
- `NEXT_PUBLIC_SITE_URL` – your site URL without a trailing slash
- `SNIPCART_WEBHOOK_SECRET` – (optional) if you enable webhook signature verification

### Endpoints

- `POST /api/snipcart/order` – Receives Snipcart order payload and creates a matching Printful order.
- `POST /api/printful/webhook` – Receives Printful events (e.g., package shipped) for tracking updates.

### Product Mapping

Update `lib/printful-mapping.ts` with your real `sync_variant_id` per product/option. These IDs come from Printful (pre-synced products recommended). The Snipcart add-to-cart buttons already pass `Size` and `Color` custom fields.

### Dashboard Setup

1. Snipcart Dashboard → Webhooks → add `Order Completed` (or Paid) webhook to `https://YOUR_DOMAIN/api/snipcart/order`.
2. Printful Dashboard → Webhooks → set URL to `https://YOUR_DOMAIN/api/printful/webhook`.

### References

- Printful API docs: `https://developers.printful.com/docs/`
- Orders API: `https://developers.printful.com/docs/#tag/Orders-API`
- Webhook API: `https://developers.printful.com/docs/#tag/Webhook-API`