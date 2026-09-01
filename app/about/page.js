import PageHero from "@/components/PageHero";
import Label from "@/components/Label";
import Pill from "@/components/Pill";
import ValueIcon from "@/components/ValueIcon";
import { values } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Sense & Forum designs programmes, communities, events and marketing, and steps in as senior marketing leadership: client-facing, external work, built on the Delia Model™. Here's our story, our values, and who's building it.",
  path: "/about",
});

const teamPlaceholders = [
  "Strategy Lead",
  "Programme & Community Design Lead",
  "Client Partnerships Lead",
];

export default function AboutPage() {
  return (
    <>
      <PageHero bg="canvas" eyebrow="About us" title="Client-facing work, start to finish">
        External, client-facing work: programmes, communities, events and
        marketing, plus senior marketing leadership when you need it.
      </PageHero>

      <section className="section wrap">
        <Label>Our story</Label>
        <h2>
          Engagement shouldn&rsquo;t be <em>an afterthought</em>
        </h2>
        <p className="lede">
          Most organisations treat community and belonging as things that
          happen after the real work: a social page, an occasional event, a
          channel nobody checks.
        </p>
        <p className="lede">
          Sense &amp; Forum audits how you actually engage people, customers
          or members: touchpoints, programmes, events, rhythm and belonging.
          Then we design the architecture underneath it, built on the Delia
          Model&trade;, so inclusion is designed in from the start.
        </p>
        <p className="lede">
          We work with founders, teams and movements who want the next
          layer of engagement built on purpose, not by accident. Every
          engagement is staffed by a dedicated fractional CMO and a project
          manager, plus freelance specialists as needed: social, copy,
          events delivery, email marketing and production.
        </p>
      </section>

      <section className="section wrap" style={{ paddingTop: 0 }}>
        <Label>What sets us apart</Label>
        <h2>
          The Delia Model&trade;
        </h2>
        <p className="lede">
          Most growth systems are built for the average user. We build for
          who gets missed.
        </p>
        <p className="lede">
          Before we design anything, a brand, a community, a campaign, we
          ask one question: <strong>who does this leave out?</strong> On
          purpose or by accident, every system excludes someone. We find
          that gap first, then design around it.
        </p>
        <p className="lede">That&rsquo;s people first, not people-pleasing. It means:</p>
        <ul className="delia-list">
          <li>
            We audit before we build: no guessing who your community
            actually is
          </li>
          <li>Inclusion isn&rsquo;t a value statement, it&rsquo;s a design step</li>
          <li>The fix goes into the rebuild, not a footnote after launch</li>
        </ul>
        <p className="lede">
          It&rsquo;s why our clients don&rsquo;t just grow: they grow with
          the people who were never going to fit the default.
        </p>
      </section>

      <section className="section wrap" style={{ paddingTop: 0 }}>
        <Label>The team</Label>
        <h2>Who&rsquo;s building it</h2>
        <p className="lede">
          Team names and photos are intentionally withheld while our
          ownership structure is being finalised. Roles below reflect how
          the team is shaping up.
        </p>
        <div className="team-grid">
          {teamPlaceholders.map((role) => (
            <div className="team-card" key={role}>
              <div className="avatar-placeholder" aria-hidden="true" />
              <div className="role">{role}</div>
              <div className="note">Name and photo to be announced</div>
            </div>
          ))}
        </div>
      </section>

      <section className="values">
        <div className="wrap">
          <Label>Our values</Label>
          <h2 style={{ marginBottom: 32 }}>What we build around</h2>
          <div className="value-row">
            {values.map((value) => (
              <div key={value.key}>
                <ValueIcon name={value.key} />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>
          Want to work <em>together?</em>
        </h2>
        <Pill href="/contact" variant="solid-green">
          Book a discovery call
        </Pill>
      </section>
    </>
  );
}
