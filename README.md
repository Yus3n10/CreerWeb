# Creer

Marketing site for Creer, a home-based bakery. React + TypeScript + Vite +
Tailwind CSS v4. No cart, no backend — every order CTA links to Instagram DM
(@creer_bcd).

## Running locally

```bash
npm install
npm run dev
```

## Editing content

Everything editable lives in `src/data/`, separate from the page layout —
change flavors, prices, or copy here without touching any component:

- `src/data/menu.ts` — categories, flavors, descriptions, prices.
- `src/data/site.ts` — nav, hero copy, About story, How to Order steps,
  contact page text.
- `src/data/images.ts` — the photo registry (see below).

## Adding real photos

Every photo on the site is a labeled placeholder until a real image is
provided — see `src/data/images.ts` for the full list of what's needed and
in what aspect ratio (the ones without a photo yet still show that label on
the live site). To add or swap one in:

1. Drop the image file in `src/assets/images/`.
2. Import it and add it to the map in `src/data/photoSources.ts`, keyed by
   the same `imageId` used in `src/data/images.ts` and in the menu item's
   `imageId` field.

That's it — every `<PhotoSlot imageId="...">` on every page reads from that
one map, so nothing else needs to change. The placeholder shows a skeleton
loader while the real image loads, then fades it in — no layout shift.
Above-the-fold images (page heroes) pass `priority` to `PhotoSlot` so they
load immediately instead of lazily.

## Deploying

Connected to Netlify via `netlify.toml` (build command, SPA redirect, and
security headers are already configured). The Contact page's inquiry form
uses Netlify Forms — no backend or API key required; see `SECURITY.md`.

## Security

See `SECURITY.md` for the audit — what was checked, and what doesn't apply
to a static site with no backend.
