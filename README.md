# Mumbai 74 Hakka and Indian Cuisine

Fully static Astro + Tailwind website: Home, Menu, About, Gallery, Visit, and 404. Includes 64 provisional sourced menu records, local images/fonts, search and category navigation.

**Status: client review build, not approved for launch.** Read [CONTENT_REVIEW](docs/CONTENT_REVIEW.md), [IMAGE_CREDITS](docs/IMAGE_CREDITS.md), and [QA_REPORT](docs/QA_REPORT.md).

## Setup and development
Use Node.js 24 LTS and pnpm 11.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm test
pnpm build
pnpm preview
```

Package scripts also support npm after npm install, but pnpm and its lockfile are the tested workflow. Dependencies are pinned. TypeScript 6 is required by the installed Astro checker.

## Deployment
Upload dist/ contents to any static host with directory-index routing and 404.html as the error document. No backend or runtime marketplace access is required.

Before public launch:
1. Complete all owner signoffs in docs/CONTENT_REVIEW.md.
2. Set SITE_URL to the approved HTTPS domain (PowerShell: `$env:SITE_URL = 'https://YOUR-ACTUAL-DOMAIN'`).
3. Run `node scripts/release-check.mjs`, then check, test, and build.
4. Deploy dist/ and verify host routing, metadata and performance.

Without SITE_URL, this review build is noindex with robots disallowing indexing. Canonical URLs and sitemap are omitted. A real SITE_URL enables canonical/social URLs, robots and sitemap generation. Do not publish the example domain.

Postbuild removes only dist/images/references/, preserving the original screenshots in public/images/references/.

## Editing content
- Menu source: src/data/menu.json. Audit: src/data/menu-audit.csv. Update both when reviewing sources.
- Set an integer priceCents and priceStatus to approved only after owner approval. Otherwise “Price on request” appears. Observed promotional/struck prices never become publication prices automatically. Set priceType to from only for verified starting-at pricing.
- Preserve stable IDs, dish spellings, distinct portion sizes and bundles. Featured is a tag; 11 Most Ordered tags are verified from DoorDash. Review uncertain cross-platform equivalents in the content audit.
- Put cleared dish photos in public/images/menu/, then update image, imageAlt and imageStatus. Record owner/licence permission and dish association in IMAGE_CREDITS. Do not use the editorial illustrations as actual named-dish photos.
- Business details live in src/data/restaurant.ts. Unknown phone, email, hours and social links are omitted. Confirm the address format.
- Shared components: src/components/. Page content: src/pages/. Design tokens and responsive rules: src/styles/global.css.
- All website images use public/images/. Fonts are bundled locally from Fontsource.

## Validation
Build validates menu data, renders HTML, excludes references and checks local assets, routes, anchor links and item counts. Tests cover price guards and combined filtering. Browser evidence lives in docs/qa/.

The unrelated, pre-existing solar-company DESIGN.md was preserved and not used. No cart, checkout, accounts, database, backend, analytics or contact form was added.

