# Sense & Forum

Marketing website for Sense & Forum: we design programmes, communities and events, built on the Delia Model. Built with Next.js (App Router).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — Home
- `/services` — Services (Community/Engagement Audit + Redesign, Fractional Community/Growth Support, Build Your Community, Programme or Event)
- `/how-we-work` — Method + case archetypes (secondary page)
- `/about` — Company story, placeholder team, brand values
- `/team` — Core team, powered by a bench of specialist freelancers (secondary page, formerly `/freelancers`)
- `/contact` — Discovery call / contact form (posts to `/api/contact`, currently a placeholder endpoint)

## Design system

Colour tokens, typography, and shared components live in `app/globals.css` and `components/`. Only the six brand hex values are used anywhere in the CSS.

## Voice

UK English throughout, "we" voice (never first person "I"), no em dashes or hyphens as sentence connectors (colons, semicolons, or "or"/"then" instead), no HR/hiring/internal-culture references — this is external, client-facing work only.

## Known placeholders and open questions

- **Brand icons and wordmark** (`components/icons.js`, `Logo.js`, `LogoMark.js`) are recreated in code rather than using the original `sf_logo_*.png` / `icon_*.png` files, which weren't available as files in the build environment. Swap in the real assets by replacing these components with `<img>` tags pointing at the real files.
- **Team names/photos** on `/about` are intentionally withheld.
- **Team roster** on `/team` is a placeholder — `components/DirectoryCard.js` already accepts `name`, `photo`, `bio`, `rateBand`, and `availability` props for when real profiles are ready.
- **Pricing** shown throughout is a benchmark estimate, not a fixed quote.
- **Contact details** (`hello@senseandforum.com`, the discovery-call link) are placeholders pending a real inbox/booking tool.
- **Women-specific positioning** is deliberately excluded from all copy pending resolution of whether that lens belongs to Sense & Forum or to Serena's personal brand only. Do not add it without that being resolved first.
- **Change-Making Workshops** is parked for a future release. It's intentionally absent from this build; don't remove it from planning docs elsewhere.
- **Delia Model branding on Sense & Forum**: several of Serena's other skill configs (`serena-delia`, `serena-community-design`, `serena-cohort-building`) state "never carry forward Sense & Forum branding" for the DELIA Model™. This build uses the Delia Model as Sense & Forum's core USP per explicit direction, but that conflict is worth a second look.

## Deploy

Any Next.js host works. For Vercel: `vercel deploy`.
