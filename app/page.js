import Pill from "@/components/Pill";
import Label from "@/components/Label";
import StepCard from "@/components/StepCard";
import Marquee from "@/components/Marquee";
import AccentCircle from "@/components/AccentCircle";
import { homeServices, stages, experienceLogos, awards } from "@/lib/content";

export const metadata = {
  title: "Sense & Forum: Fractional CMO and Service Design",
  description:
    "Fractional CMO services for founders who want senior marketing leadership without a full-time hire. Sense & Forum also designs community, programme and event systems: audits, rebuilds, and growth built on the Delia Model™.",
};

export default function Home() {
  return (
    <>
      {/* 1. Who we are */}
      <section className="hero">
        <AccentCircle left="mid-coral" right="hot-pink" className="hero-accent" />
        <div className="wrap">
          <Label>Community-led marketing</Label>
          <h1>
            Sense &amp; Forum<span className="reg-mark">&reg;</span> is a{" "}
            <em>no-nonsense community-led marketing agency</em>
          </h1>
          <p>
            Reach that doesn&rsquo;t depend on an algorithm&rsquo;s mood. We
            build the system, then help you run it: senior marketing
            leadership and community strategy, minus the full-time hire, so
            nothing (and no one) gets missed.
          </p>
          <div className="actions">
            <Pill href="/contact" variant="solid">
              Book a discovery call
            </Pill>
          </div>
        </div>
      </section>

      <Marquee />

      {/* 2. What we do */}
      <section className="services" aria-labelledby="what-we-do-heading">
        <div className="wrap">
          <Label>What we do</Label>
          <h2 id="what-we-do-heading">
            Four ways to <em>build with intention</em>
          </h2>
          <p className="lede">
            We design community-led growth systems, then step in as senior
            marketing leadership to run them. End to end, with confidence.
          </p>
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
            Founders, teams and movements ready to lead with clarity.
          </h2>
          <p>Ongoing work or a single event: we work both ways.</p>
        </div>
      </section>

      {/* 4. How we do it */}
      <section className="method" aria-labelledby="how-we-do-it-heading">
        <div className="wrap">
          <Label>How we do it</Label>
          <h2 id="how-we-do-it-heading" className="visually-hidden">
            How we do it
          </h2>
          <p className="lede">
            Audit and review, then design, then implement, then prove it and
            review it. Every engagement runs through the Delia Model&trade;:
            we notice who a design leaves out, on purpose or by accident, and
            design them back in from the start.
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
        </div>
      </section>

      {/* 5. Why we do it */}
      <section className="why" aria-labelledby="why-we-do-it-heading">
        <AccentCircle left="soft-lime" right="soft-pink" className="why-accent" />
        <div className="wrap">
          <Label>Why we do it</Label>
          <h2 id="why-we-do-it-heading">
            Most engagement gaps aren&rsquo;t a <em>content issue</em>
          </h2>
          <p>
            A quiet channel, a fading list, a workshop that fills once and
            never comes back: most organisations reach for more posts, more
            emails, more reminders. What&rsquo;s actually missing is the
            design: specifically, who the format quietly excludes.
            That&rsquo;s the inclusion lens we bring to every engagement,
            built on the Delia Model&trade;: we notice what&rsquo;s easy to
            miss, and build it into the redesign.
          </p>
          <div className="video-embed">
            <iframe
              src="https://www.youtube-nocookie.com/embed/K6XhMgukAbE"
              title="Sense & Forum"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Partnering with */}
      <section className="trust-bar" aria-labelledby="partners-heading">
        <p className="trust-bar-label" id="partners-heading">
          Partnering with
        </p>
        <div className="trust-bar-logos">
          {experienceLogos.map((logo) => (
            <a
              className="trust-bar-logo-card"
              key={logo.name}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="trust-bar-logo" src={logo.src} alt={logo.name} />
            </a>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="trust-bar" aria-labelledby="awards-heading">
        <p className="trust-bar-label" id="awards-heading">
          Award-winning
        </p>
        <div className="trust-bar-logos">
          {awards.map((award) => (
            <div className="awards-logo-card" key={award.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="awards-logo" src={award.src} alt={award.name} />
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>
          Ready to build <em>this with intention?</em>
        </h2>
        <Pill href="/contact" variant="solid-green">
          Book a discovery call
        </Pill>
      </section>
    </>
  );
}
