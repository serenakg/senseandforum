import Pill from "@/components/Pill";
import Label from "@/components/Label";
import StepCard from "@/components/StepCard";
import ServiceRow from "@/components/ServiceRow";
import ArchetypeCard from "@/components/ArchetypeCard";
import DirectoryCard from "@/components/DirectoryCard";
import ValueIcon from "@/components/ValueIcon";
import LogoMark from "@/components/LogoMark";
import { services, archetypes, roster, values, stages } from "@/lib/content";

export const metadata = {
  title: "Sense & Forum: Community, Programme and Event Design",
  description:
    "Sense & Forum designs programmes, communities and events, built on the Delia Model: our approach to inclusion for everyone.",
};

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1>
            We design <em>programmes, communities and events</em> that work
          </h1>
          <p>
            Built on the Delia Model: our approach to inclusion for
            everyone. We audit how you engage people, customers or members,
            then rebuild the architecture that connects them to what
            you&rsquo;re building. For startups, scale-ups, companies,
            nonprofits, community organisations and one-off events.
          </p>
          <div className="actions">
            <Pill href="/contact" variant="solid">
              Book a discovery call
            </Pill>
            <Pill href="/services" variant="ghost">
              See our services →
            </Pill>
          </div>

          <div className="collage" aria-hidden="true">
            <div className="tile coral">Audit + Redesign</div>
            <div className="tile pink">Fractional Support</div>
            <div className="tile mint">Build Your Community</div>
            <div className="tile yellow">Built on the Delia Model</div>
            <div className="tile cream">The Scale-Up</div>
            <div className="tile mint">One-Off Events</div>
          </div>
        </div>
      </section>

      <section className="method wrap" aria-labelledby="method-heading">
        <h2 id="method-heading" className="visually-hidden">
          How we work
        </h2>
        <Label>How we work</Label>
        <div className="steps">
          {stages.map((stage) => (
            <StepCard key={stage.number} number={stage.number} title={stage.title}>
              {stage.summary}
            </StepCard>
          ))}
        </div>
      </section>

      <section className="values" aria-labelledby="values-heading">
        <div className="wrap">
          <h2 id="values-heading" className="visually-hidden">
            The 4 C&rsquo;s of Sense &amp; Forum
          </h2>
          <Label>The 4 C&rsquo;s of Sense &amp; Forum</Label>
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

      <section className="intro" aria-labelledby="intro-heading">
        <div className="wrap">
          <h2 id="intro-heading" className="visually-hidden">
            About Sense &amp; Forum
          </h2>
          <LogoMark size={200} color="var(--green)" />
          <div>
            <p>
              You&rsquo;re here because engagement is bolted on, not built
              in. A social page exists. An event happens. But there&rsquo;s
              no real architecture connecting people to what you&rsquo;re
              building.
            </p>
            <p>
              We audit how you actually engage people, then redesign it:
              programmes, communications, events, rhythm and belonging.
              Built on the Delia Model, so inclusion is designed in from the
              start, not added later.
            </p>
            <Pill href="/about" variant="ghost-dark">
              About us →
            </Pill>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="wrap">
          <Label>What we offer</Label>
          <h2>
            So how can Sense &amp; Forum <em>support you?</em>
          </h2>
          <div>
            {services.map((service) => (
              <ServiceRow
                key={service.number}
                number={service.number}
                title={service.title}
                description={service.description}
                format={service.format}
                price={service.price}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="proof">
        <div className="wrap">
          <h2>
            Three patterns we keep <em>solving for</em>
          </h2>
          <div className="archetypes">
            {archetypes.map((arch) => (
              <ArchetypeCard key={arch.tag} tag={arch.tag} title={arch.title}>
                {arch.summary}
              </ArchetypeCard>
            ))}
          </div>
        </div>
      </section>

      <section className="directory">
        <div className="wrap">
          <h2>Our team</h2>
          <p className="lede">
            A small core team, extended by the specialists we bring in
            project by project. Placeholder roster: profiles go live as the
            bench is re-engaged.
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
          Ready to build <em>this properly?</em>
        </h2>
        <Pill href="/contact" variant="solid-green">
          Book a discovery call
        </Pill>
      </section>
    </>
  );
}
