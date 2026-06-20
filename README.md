# REGI website

The new public website for Raptor Education Group, Inc. The application is currently operated as a non-indexable staging site and is intentionally independent of REGI's existing public domain.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Configuration

Copy `.env.example` to `.env.local` for local development. Staging and production variables are managed in Vercel.

Indexing requires both `NEXT_PUBLIC_SITE_MODE=production` and `NEXT_PUBLIC_ALLOW_INDEXING=true`. This two-part switch is intentional protection against preview deployments being indexed.

## Existing REGI store

The public shop keeps REGI's established Squarespace Commerce checkout and
fulfillment workflow. During local development, purchase and cart links use the
current live site by default.

Before moving the primary REGI domain to this application, connect the existing
Squarespace site to a dedicated store subdomain and set:

```bash
NEXT_PUBLIC_STORE_URL=https://shop.raptoreducationgroup.org
```

This updates product, cart, and checkout handoffs without changing application
code.

Tour registration, camp downloads, and newsletter signup use the optional environment variables documented in `.env.example`. When a value is absent, the site presents a telephone or email fallback rather than a broken or guessed link.

## Quality checks

```powershell
npm.cmd run check
```

This runs linting, TypeScript validation, route verification, and a production build. The same check runs in the included GitHub Actions workflow once the repository is transferred to REGI-controlled source control.

## Handover

See [`docs/HANDOVER.md`](docs/HANDOVER.md) for the ownership, commerce, environment, verification, cutover, and rollback checklist.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
