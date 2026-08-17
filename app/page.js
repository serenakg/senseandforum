import Pill from "@/components/Pill";
import Label from "@/components/Label";
import StepCard from "@/components/StepCard";
import { homeServices, stages } from "@/lib/content";

export const metadata = {
  title: "Sense & Forum: Community, Programme and Event Design",
  description:
    "Sense & Forum designs programmes, communities and events, built on the Delia Model: our approach to inclusion for everyone.",
};

export default function Home() {
  return (
    <>
      {/* 1. Who we are */}
      <section className="hero">
        <div className="wrap">
          <h1>
            Sense &amp; Forum is a <em>service design agency</em> for
            community led growth
          </h1>
          <p>Built on the Delia Model: inclusion for everyone.</p>
          <div className="actions">
            <Pill href="/contact" variant="solid">
              Book a discovery call
            </Pill>
          </div>
        </div>
      </section>

      {/* 2. What we do */}
      <section className="services" aria-labelledby="what-we-do-heading">
        <div className="wrap">
          <Label>What we do</Label>
          <h2 id="what-we-do-heading">
            Three ways to <em>work with us</em>
          </h2>
          <div>
            {homeServices.map((service) => (
              <div className="svc-row-lite" key={service.number}>
                <div className="n" aria-hidden="true">
                  {service.number}
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Pill href="/services" variant="ghost-dark">
            See the details and pricing →
          </Pill>
        </div>
      </section>

      {/* 3. Who we serve */}
      <section className="serve" aria-labelledby="who-we-serve-heading">
        <div className="wrap">
          <Label onDark>Who we serve</Label>
          <h2 id="who-we-serve-heading">
            Startups. Scale-ups. Companies. Nonprofits and community
            organisations.
          </h2>
          <p>Ongoing work or a single event: we work both ways.</p>
        </div>
      </section>

      {/* 4. How we do it */}
      <section className="method wrap" aria-labelledby="how-we-do-it-heading">
        <Label>How we do it</Label>
        <h2 id="how-we-do-it-heading" className="visually-hidden">
          How we do it
        </h2>
        <p className="lede">
          Audit, then redesign, then implement, then prove it with data.
          Every engagement runs through the Delia Model: we check who a
          design leaves out, on purpose or by accident, and fix that as
          part of the rebuild.
        </p>
        <div className="steps">
          {stages.map((stage) => (
            <StepCard key={stage.number} number={stage.number} title={stage.title}>
              {stage.summary}
            </StepCard>
          ))}
        </div>
        <Pill href="/how-we-work" variant="ghost-dark">
          See the full method →
        </Pill>
      </section>

      {/* 5. Why we do it */}
      <section className="why" aria-labelledby="why-we-do-it-heading">
        <div className="wrap">
          <Label>Why we do it</Label>
          <h2 id="why-we-do-it-heading">
            Most engagement problems get <em>blamed on content</em>
          </h2>
          <p>
            A quiet channel, a fading list, a workshop that fills once and
            never comes back: most organisations call that a content
            problem and try to fix it with more posts, more emails, more
            reminders. It&rsquo;s usually a design problem, specifically
            who the format quietly excludes. That&rsquo;s what Sense &amp;
            Forum exists to catch, and to fix.
          </p>
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
