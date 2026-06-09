# AI Assistant Guide

Context for AI coding assistants working on this repository.

## Project

A single-page campaign landing site for **WeSalute × America 250** — celebrating
250 years of American service. One route (`/`), statically rendered.

**Stack:** Next.js 15 (App Router) · TypeScript (strict) · Tailwind CSS v3 · `next/font` (Fraunces, Barlow, Barlow Condensed, JetBrains Mono)

## Commands

```bash
npm run dev     # local dev server at localhost:3000
npm run build   # production build — run this to verify changes before committing
npm run lint    # eslint
```

There is no test suite; `npm run build` (which type-checks and lints) is the
verification gate.

## Structure

```
app/
  layout.tsx        # fonts, metadata
  page.tsx          # section order for the single page
  globals.css       # keyframes, utility/component classes, responsive overrides
components/         # one file per page section + small shared primitives
  (sections)        Hero, CountdownBanner, ThroughLine, SharedHistory,
                    SevenCommunities, TravelCash, Collection, Membership,
                    FinalSalute, Footer, Nav, MobileCTABar
  (primitives)      Eyebrow, SectionTitle, Star, StarField, ImageModal,
                    America250Logo
lib/
  content.ts        # timeline + community copy data
  links.ts          # ALL external URLs (CTAs, shop, socials) — single source of truth
public/             # static assets; images/ logos/ timeline/ subdirs
```

## Conventions

- **External URLs** live in `lib/links.ts`. Never hardcode a wesalute.com or
  merchandise.wesalute.com URL in a component — import the constant.
- **CTAs are anchors**, not buttons: `<a className="cta cta-gold" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>`.
  Buttons are reserved for in-page interactions (carousel, menu, modal).
- **Brand tokens** are defined in `tailwind.config.ts` (slate, slateDeep,
  slateLine, gold, cream, mint, americaRed…). Use them via Tailwind classes;
  raw hex values appear only inside inline `style` gradients/borders where
  Tailwind can't reach. Full token table in `README.md`.
- **Responsive layout:** several sections set `gridTemplateColumns` via inline
  styles; mobile collapse is handled by `!important` overrides in
  `globals.css` media queries keyed on classes like `hero-grid`,
  `timeline-row`, `seven-grid`. If you add a new inline grid, add the
  matching override there.
- **Images** use `next/image` with `fill` + explicit `sizes`. Remote images
  are served from `cdn.shopify.com` (allowed in `next.config.ts`). Use
  `objectFit: "contain"` when the full image must be visible, `"cover"` for
  editorial crops.
- **Client components** (`"use client"`) only where state/effects are needed:
  Nav, CountdownBanner, Membership, MobileCTABar, SharedHistory, StarField,
  ImageModal. Everything else stays a server component.
- **Section anchors:** nav links are generated from labels in `Nav.tsx`
  (lowercase, spaces → dashes). A nav label must have a matching section
  `id` — e.g. "Limited Merch" → `id="limited-merch"` on the Collection section.

## Content & data

- Shopify products/collections are referenced by handle; product tiles link to
  `merchandise.wesalute.com/products/<handle>`. Product data (titles, prices,
  CDN image URLs) is embedded in the components that display it
  (`ThroughLine.tsx`, `Collection.tsx`).
- Timeline and community copy live in `lib/content.ts`.
- Testimonials live in `components/Membership.tsx`.

## Workflow

- Verify with `npm run build` before committing — it catches type and lint errors.
- Keep commits scoped and descriptive.
- Don't add new top-level files to the repo root; assets belong under `public/`.
