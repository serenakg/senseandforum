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
- `/team` — Meet the Team: real named core team (Serena, Elenia, Mai, Chanelle), a Meet the Founder section on Serena, plus the extended freelancer bench (formerly `/freelancers`)
- `/contact` — Discovery call / contact form (posts to `/api/contact`, currently a placeholder endpoint)

## Design system

Colour tokens, typography, and shared components live in `app/globals.css` and `components/`. Only the six brand hex values are used anywhere in the CSS.

## Voice

UK English throughout, "we" voice (never first person "I"), no em dashes or hyphens as sentence connectors (colons, semicolons, or "or"/"then" instead), no HR/hiring/internal-culture references — this is external, client-facing work only.

## Known placeholders and open questions

- **Wordmark** (`components/Logo.js`) uses the real brand files (`public/brand/logo-reversed.svg`, `logo-black.svg`) supplied by Serena. `LogoMark.js` (ampersand-only mark) is still recreated in code pending the original asset.
- **4 C's icons**: Celebration, Creativity, and Communication use the real files in `public/brand/icons/`. Community still uses the hand-drawn placeholder in `components/icons.js` — the uploaded file downloaded corrupted (3 bytes short of its declared size) three separate times; needs a re-upload or re-export from Serena. A fifth icon, "Care" (`public/brand/icons/care.webp`), was also uploaded but isn't wired into any value yet — the site only has 4 C's (Community, Celebration, Creativity, Communication). Confirm with Serena whether Care replaces one of the four or is meant to expand the set before using it.
- **Team names/photos** on `/about` are intentionally withheld.
- **Team roster** on `/team` is a placeholder — `components/DirectoryCard.js` already accepts `name`, `photo`, `bio`, `rateBand`, and `availability` props for when real profiles are ready.
- **Pricing** shown throughout is a benchmark estimate, not a fixed quote.
- **Contact details** (`hello@senseandforum.com`, the discovery-call link) are placeholders pending a real inbox/booking tool.
- **Women-specific positioning** is deliberately excluded from all copy pending resolution of whether that lens belongs to Sense & Forum or to Serena's personal brand only. Do not add it without that being resolved first.
- **Change-Making Workshops** is parked for a future release. It's intentionally absent from this build; don't remove it from planning docs elsewhere.
- **Delia Model branding on Sense & Forum**: several of Serena's other skill configs (`serena-delia`, `serena-community-design`, `serena-cohort-building`) state "never carry forward Sense & Forum branding" for the DELIA Model™. This build uses the Delia Model as Sense & Forum's core USP per explicit direction, but that conflict is worth a second look.
- **Meet the Founder vs. "no gendered framing" rule**: the site's own tone brief says no femtech/women+ framing and no personal health disclosures on the agency site, those belong to Serena's personal brand. The same brief then explicitly asked for a Meet the Founder bio mentioning burnout and naming her separate femtech/women+ CMO practice as her "moat." Built as instructed (third person, framed as her separate practice, not Sense & Forum's own service scope), but flagging the tension since it's the kind of call worth Serena double-checking before this goes live.

## Deploy

Any Next.js host works. For Vercel: `vercel deploy`.
