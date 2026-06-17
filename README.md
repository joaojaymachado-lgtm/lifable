# Lifable — site (React + Vite + TypeScript)

Faithful React port of the static `site/` build. Same Dawn design system:
continuous scroll-driven gradient sky, Source Serif 4 + Figtree, tone system,
custom cursor, scroll reveals, count-up stats, testimonial carousel, easter eggs.
Built to drop into **Lovable** (React).

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to /dist
npm run preview  # serve the production build
```

## Routes

| Route             | Page                  |
| ----------------- | --------------------- |
| `/`               | Home (English)        |
| `/pt`             | Home (Portuguese)     |
| `/how-it-works`   | How It Works (EN)     |
| `/como-funciona`  | How It Works (PT)     |

"Begin review" CTAs point to the How It Works page's pricing section
(`/how-it-works#planos` / `/como-funciona#planos`). The two pricing-card
buttons are placeholders (`href="#"`) — wire them to the checkout/form in Lovable.

## Where things live

- `src/content.ts` — gradient stops, easter-egg copy, routes (edit config here).
- `src/index.css` — the entire design system (ported verbatim from the HTML).
- `src/lib/usePageEffects.ts` — shared scroll/cursor/gradient/count-up/egg engine.
- `src/components/` — Nav, Footer, Chrome, HeroSearch (typewriter), DocStage
  (10-page assembly), StarSky (constellation canvas), Carousel.
- `src/pages/` — the four page components; copy lives inline as JSX (verbatim
  from `assets/website/copy.md` / `copy-pt.md`).

## Editing copy

All visible text is plain JSX inside the page components and is safe to edit in
Lovable's visual editor. Testimonials are verbatim real quotes — do not paraphrase.
