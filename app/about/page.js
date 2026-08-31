import PageHero from "@/components/PageHero";
import Label from "@/components/Label";
import Pill from "@/components/Pill";
import ValueIcon from "@/components/ValueIcon";
import { values } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Sense & Forum designs programmes, communities and events, and steps in as senior marketing leadership: client-facing, external work, built on the Delia Model. Here's our story, our values, and who's building it.",
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
        Sense &amp; Forum designs programmes, communities and events, and
        steps in as senior marketing leadership when you need it.
        That&rsquo;s the whole scope: external, client-facing work, for the
        people your organisation serves.
      </PageHero>

      <section className="section wrap">
        <Label>Our story</Label>
        <h2>
          Engagement shouldn&rsquo;t be <em>bolted on</em>
        </h2>
        <p className="lede">
          Most organisations treat community and belonging as things that
          happen after the real work: a social page, an occasional event, a
          channel nobody checks. We think that&rsquo;s a design problem, not
          a personality problem.
        </p>
        <p className="lede">
          Sense &amp; Forum audits how you actually engage people, customers
          or members: touchpoints, programmes, events, rhythm and belonging.
          Then we redesign the architecture underneath it, built on the
          Delia Model, so inclusion is designed in from the start.
        </p>
        <p className="lede">
          We work with startups, scale-ups, companies, nonprofits,
          community organisations and one-off events who want the next
          layer of engagement built on purpose, not by accident.
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
          <Label>The 4 C&rsquo;s of Sense &amp; Forum</Label>
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
