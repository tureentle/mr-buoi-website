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
