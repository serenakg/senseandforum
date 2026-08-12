# Sense & Forum

Marketing website for Sense & Forum, a service design agency for community-led growth. Built with Next.js (App Router).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — Home
- `/services` — Services
- `/how-we-work` — Method + case archetypes
- `/about` — Company story, placeholder team, brand values
- `/freelancers` — Freelancer directory
- `/contact` — Contact form (posts to `/api/contact`, currently a placeholder endpoint)

## Design system

Colour tokens, typography, and shared components live in `app/globals.css` and `components/`. Only the six brand hex values are used anywhere in the CSS — see the build brief for the palette and accessibility rules.

## Known placeholders

- **Brand icons and wordmark** (`components/icons.js`, `Logo.js`, `LogoMark.js`) are recreated in code rather than using the original `sf_logo_*.png` / `icon_*.png` files, which weren't available as files in the build environment. Swap in the real assets by replacing these components with `<img>` tags pointing at the real files — the rest of the design system (colours, sizing, alt text) doesn't need to change.
- **Team names/photos** on `/about` are intentionally withheld.
- **Freelancer directory** profiles are placeholders — `components/DirectoryCard.js` already accepts `name`, `photo`, `bio`, `rateBand`, and `availability` props for when real profiles are ready.
- **Pricing** shown throughout is a benchmark estimate, not a fixed quote.
- **Contact details** (`hello@senseandforum.com`, the "Book a call" link) are placeholders pending a real inbox/booking tool.

## Deploy

Any Next.js host works. For Vercel: `vercel deploy`.
