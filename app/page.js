import Pill from "@/components/Pill";
import Label from "@/components/Label";
import StepCard from "@/components/StepCard";
import Marquee from "@/components/Marquee";
import AccentCircle from "@/components/AccentCircle";
import { homeServices, stages, experienceLogos, awards } from "@/lib/content";

const title = "Sense & Forum: No-Nonsense Community-Led Marketing";
const description =
  "Sense & Forum® is a no-nonsense community-led marketing agency: senior marketing leadership and community strategy, minus the full-time hire.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "https://senseandforum.com" },
  openGraph: {
    title,
    description,
    url: "https://senseandforum.com",
    siteName: "Sense & Forum",
    images: [
      {
        url: "/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sense & Forum",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/brand/og-image.png"],
  },
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
            build the system, then run it with you: senior marketing
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

      {/* 4. Why we do it */}
      <section className="why" aria-labelledby="why-we-do-it-heading">
        <div className="wrap why-grid">
          <div className="why-text">
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
              built on the Delia Model&trade;, the methodology{" "}
              <a href="/team">founder Serena Gasparini</a> created: we notice
              what&rsquo;s easy to miss, and build it into the redesign.
            </p>
          </div>
          <div className="video-wrap">
            <AccentCircle left="soft-lime" right="soft-pink" className="why-accent" />
            <div className="video-embed">
              <iframe
                src="https://www.youtube-nocookie.com/embed/K6XhMgukAbE"
                title="Sense & Forum"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. How we do it */}
      <section className="method" aria-labelledby="how-we-do-it-heading">
        <div className="wrap">
          <Label>How we do it</Label>
          <h2 id="how-we-do-it-heading" className="visually-hidden">
            How we do it
          </h2>
          <p className="lede">
            Every engagement runs through{" "}
            <a href="/team">Serena Gasparini&rsquo;s</a> DELIA Model&trade;,
            the methodology behind how Sense &amp; Forum designs programmes,
            communities and growth systems.
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

      {/* 6. Meet the founder */}
      <section className="founder" aria-labelledby="meet-founder-heading">
        <div className="wrap founder-grid">
          <div className="founder-text">
            <Label>Who&rsquo;s behind it</Label>
            <h2 id="meet-founder-heading">Meet Serena Gasparini</h2>
            <p className="lede">
              Serena Gasparini founded Sense &amp; Forum&reg; and created
              the DELIA Model&trade;, the methodology behind how we work.
              Over 20 years in marketing, events and community led her
              here.
            </p>
            <Pill href="/team" variant="ghost-dark">
              Meet the team →
            </Pill>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/team/serena.jpg"
            alt="Serena Gasparini"
            className="founder-photo"
          />
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
