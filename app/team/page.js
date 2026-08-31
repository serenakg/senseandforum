import PageHero from "@/components/PageHero";
import Label from "@/components/Label";
import Pill from "@/components/Pill";
import DirectoryCard from "@/components/DirectoryCard";
import { coreTeam, founderCredentials, roster } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Meet the Team",
  description:
    "The core team behind Sense & Forum, and the story behind founder Serena Gasparini and the Delia Model.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <PageHero bg="soft-lime" eyebrow="Who's building it" title="Meet the team">
        A small core team, extended by the specialists we bring in project
        by project.
      </PageHero>

      <section className="section wrap" style={{ paddingBottom: 0 }}>
        <div className="team-grid">
          {coreTeam.map((person) => (
            <div className="team-card confirmed" key={person.name}>
              <div className="avatar-placeholder" aria-hidden="true">
                {person.initials}
              </div>
              <div className="role">{person.name}</div>
              <div className="note">{person.role}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section wrap">
        <Label>Meet the founder</Label>
        <h2>
          Serena Gasparini: the story behind <em>the Delia Model</em>
        </h2>
        <p className="lede">
          Serena has spent over 20 years in marketing, events and
          community, building and rebuilding teams, programmes and brands
          from the ground up. A period of burnout forced a full reset. Out
          of that rebuild came the Delia Model, the inclusion framework
          Sense &amp; Forum is built on.
        </p>
        <p className="lede">
          Alongside Sense &amp; Forum, Serena runs a separate fractional
          CMO practice with a specialism in femtech and women+ brands, her
          moat. She works more broadly too, with any organisation
          genuinely building toward inclusion.
        </p>
        <ul className="credentials-list">
          {founderCredentials.map((credential) => (
            <li key={credential}>{credential}</li>
          ))}
        </ul>
      </section>

      <section className="directory">
        <div className="wrap">
          <h2>The extended bench</h2>
          <p className="lede">
            Specialists we bring in project by project. Placeholder
            roster: profiles go live as the bench is re-engaged.
          </p>
          <div className="roster">
            {roster.map((slot, i) => (
              <DirectoryCard
                key={slot.role}
                role={slot.role}
                status={slot.status}
                initials={slot.initials}
                colorIndex={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>
          Know someone who should be <em>on this list?</em>
        </h2>
        <Pill href="/contact" variant="solid-green">
          Get in touch
        </Pill>
      </section>
    </>
  );
}
