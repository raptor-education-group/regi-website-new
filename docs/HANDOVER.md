# REGI website handover and domain cutover

This application is designed to remain isolated from REGI's current public site until the primary domain is deliberately moved. The existing Squarespace store continues to handle payment, shipping, receipts, and fulfillment.

## Ownership prerequisites

Before changing DNS:

1. Create a REGI-owned source-control organization using a REGI-controlled email address.
2. Add at least two REGI-approved administrators and enable multi-factor authentication.
3. Commit this project and connect it to a REGI-owned Vercel team.
4. Confirm that project billing, domain access, recovery email, and DNS credentials are controlled by REGI.
5. Record the current DNS values and Squarespace configuration so the change can be rolled back.

## Environment variables

Staging must use:

```text
NEXT_PUBLIC_SITE_URL=https://regi-website-new1.vercel.app
NEXT_PUBLIC_SITE_MODE=staging
NEXT_PUBLIC_ALLOW_INDEXING=false
```

Before the domain switch, configure the optional service destinations when REGI supplies them:

```text
NEXT_PUBLIC_STORE_URL=https://shop.raptoreducationgroup.org
NEXT_PUBLIC_TOUR_BOOKING_URL=https://...
NEXT_PUBLIC_CAMP_REGISTRATION_URL=https://...
NEXT_PUBLIC_CAMP_THEMES_URL=https://...
NEXT_PUBLIC_NEWSLETTER_SIGNUP_URL=https://...
```

The site keeps telephone or email fallbacks when optional values are blank. Never guess a registration or mailing-list URL.

Production should use these values only when the primary domain is ready to move:

```text
NEXT_PUBLIC_SITE_URL=https://www.raptoreducationgroup.org
NEXT_PUBLIC_SITE_MODE=production
NEXT_PUBLIC_ALLOW_INDEXING=true
```

Indexing is allowed only when both production conditions are true. Every other combination emits `noindex` metadata, a blocking `robots.txt`, and an `X-Robots-Tag` response header.

## Commerce continuity

Move or alias the current Squarespace commerce site to `shop.raptoreducationgroup.org` before changing the primary domain. Verify each product, cart, checkout, payment, receipt, shipping, and staff fulfillment workflow. Then set `NEXT_PUBLIC_STORE_URL` to that subdomain and redeploy this application.

Do not disconnect the current Squarespace site until those checks pass.

## Pre-cutover verification

Run:

```powershell
npm.cmd ci
npm.cmd run check
```

On the final preview deployment, verify:

- Clinic and education telephone links
- Rescue and baby-bird guidance
- Education inquiry email
- Tour registration and camp resources
- Donation handoff
- Every shop product and secure cart
- Newsletter signup
- Volunteer resources
- Desktop and mobile navigation
- `/robots.txt`, `/sitemap.xml`, canonical URLs, and social-preview images
- Legacy redirects listed in `app/lib/legacy-redirects.ts`

## Cutover sequence

1. Lower DNS TTL at least one day in advance when possible.
2. Freeze content changes on the old site.
3. Take a final record/export of the old site and DNS configuration.
4. Verify the Squarespace store subdomain.
5. Set production environment variables and deploy once with indexing still disabled.
6. Attach and verify `raptoreducationgroup.org` and `www.raptoreducationgroup.org` in Vercel.
7. Update DNS.
8. Test primary-domain HTTPS, redirects, forms, donations, store checkout, and emergency telephone links from a separate network/device.
9. Set `NEXT_PUBLIC_ALLOW_INDEXING=true`, redeploy, and verify robots plus the `X-Robots-Tag` header.
10. Submit the sitemap to Google Search Console and Bing Webmaster Tools.

## Rollback

If a critical workflow fails, restore the recorded DNS values and keep indexing disabled on the new deployment. Because the old Squarespace site and store are not modified by this repository, they remain available as the rollback target until REGI deliberately retires them.

## Content ownership

Assign a named reviewer for each area:

- Clinic hours, telephone, and rescue guidance
- Education programs, tour schedule, and camp information
- Staff, board, careers, and volunteer materials
- Donations, store products, and seasonal campaigns
- Newsletter and downloadable resources

Review time-sensitive content at least quarterly and after any staff, pricing, schedule, contact, form, analytics, or service-provider change.
