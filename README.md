# Sense & Forum

Marketing website for Sense & Forum: we design programmes, communities and events, and step in as senior marketing leadership when needed, built on the Delia Model. Built with Next.js (App Router).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — Home
- `/services` — Services (Community/Engagement Audit + Redesign, Fractional Community/Growth Support, Build Your Community, Programme or Event, Launch Partner fractional CMO work)
- `/how-we-work` — Method + case archetypes (secondary page)
- `/about` — Company story, placeholder team, brand values
- `/team` — Meet the Team: real named core team (Serena, Elina, Mai, Chanelle), a Meet the Founder section on Serena, plus the extended freelancer bench (formerly `/freelancers`)
- `/contact` — Discovery call / contact form (posts to `/api/contact`, currently a placeholder endpoint)

## Design system

Colour tokens, typography, and shared components live in `app/globals.css` and `components/`. Only the six brand hex values are used anywhere in the CSS.

## Voice

UK English throughout, "we" voice (never first person "I"), no em dashes or hyphens as sentence connectors (colons, semicolons, or "or"/"then" instead), no HR/hiring/internal-culture references — this is external, client-facing work only.

## Known placeholders and open questions

- **Wordmark** (`components/Logo.js`) uses the real brand files (`public/brand/logo-reversed.svg`, `logo-black.svg`) supplied by Serena. `LogoMark.js` (ampersand-only mark) is still recreated in code pending the original asset.
- **4 C's icons**: Celebration, Creativity, and Communication use the real files in `public/brand/icons/`. Community still uses the hand-drawn placeholder in `components/icons.js` — the uploaded file downloaded corrupted (3 bytes short of its declared size) three separate times; needs a re-upload or re-export from Serena. A fifth icon, "Care" (`public/brand/icons/care.webp`), was also uploaded but isn't wired into any value yet — the site only has 4 C's (Community, Celebration, Creativity, Communication). Confirm with Serena whether Care replaces one of the four or is meant to expand the set before using it.
- **Team names/photos** on `/about` are intentionally withheld.
- **Extended bench roster** on `/team` (below the real core team and founder bio) is still a placeholder — `components/DirectoryCard.js` already accepts `name`, `photo`, `bio`, `rateBand`, and `availability` props for when real freelancer profiles are ready. Core team members currently show initials only, no photos.
- **Pricing** shown throughout is a benchmark estimate, not a fixed quote.
- **Contact details** (`hello@senseandforum.com`, the discovery-call link) are placeholders pending a real inbox/booking tool.
- **Women-specific positioning** is deliberately excluded from Sense & Forum's own service copy (sections 1-5, services, about). The one exception is the Meet the Founder bio on `/team`, which names Serena's separate femtech/women+ CMO practice as biographical fact about her, not as Sense & Forum's own positioning. Signed off by Serena.
- **Change-Making Workshops** is parked for a future release. It's intentionally absent from this build; don't remove it from planning docs elsewhere.
- **Delia Model branding on Sense & Forum**: several of Serena's other skill configs (`serena-delia`, `serena-community-design`, `serena-cohort-building`) state "never carry forward Sense & Forum branding" for the DELIA Model™. This build uses the Delia Model as Sense & Forum's core USP per explicit direction, but that conflict is worth a second look.
- **Trust bar** on the homepage (`Experience & Partnering With`, real logos in `public/brand/trust/`) uses Circle, Heartbeat, Mighty Networks, Found & Flourish, Inspiration Space and Her First Athletics. Project Woman was intentionally left out per Serena's direction. Three of the six source files (Found & Flourish, Inspiration Space, Her First Athletics) have light/low-contrast wordmarks on a baked-in white background; they're wrapped in a uniform white card so the row reads as one design system rather than mismatched image backgrounds, but a higher-contrast re-export would look sharper if Serena has one.

## Deploy

Any Next.js host works. For Vercel: `vercel deploy`.
