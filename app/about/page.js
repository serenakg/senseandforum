import PageHero from "@/components/PageHero";
import Label from "@/components/Label";
import Pill from "@/components/Pill";
import ValueIcon from "@/components/ValueIcon";
import { values } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Sense & Forum is a service design agency for community-led growth — not an HR or people-ops consultancy. Here's our story, our values, and who's building it.",
  path: "/about",
});

const teamPlaceholders = [
  "Strategy Lead",
  "Service Design Lead",
  "Community Architecture Lead",
];

export default function AboutPage() {
  return (
    <>
      <PageHero bg="pink" eyebrow="About us" title="Service design, not people-ops">
        Sense &amp; Forum is a service design agency for community-led
        growth — we&rsquo;re not an HR consultancy, and we&rsquo;re not a
        social media agency.
      </PageHero>

      <section className="section wrap">
        <Label>Our story</Label>
        <h2>
          Engagement shouldn&rsquo;t be <em>bolted on</em>
        </h2>
        <p className="lede">
          Most organisations treat community, culture, and belonging as
          things that happen after the real work — a social page, an
          occasional event, a Slack channel nobody checks. We think that gap
          is a design problem, not a personality problem.
        </p>
        <p className="lede">
          Sense &amp; Forum audits how a business actually runs — hiring,
          onboarding, comms, rhythm, decision-making — and redesigns the
          architecture underneath it, so the way people experience your
          organisation matches the organisation you actually want to run.
          That&rsquo;s service design applied to growth, not HR policy
          applied to morale.
        </p>
        <p className="lede">
          We work with founders, scale-ups, and corporates who&rsquo;ve
          outgrown what got them here and need the next layer built on
          purpose, not by accident.
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
          Get in touch
        </Pill>
      </section>
    </>
  );
}
