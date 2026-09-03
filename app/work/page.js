import PageHero from "@/components/PageHero";
import Pill from "@/components/Pill";
import { caseStudies, clientLogos } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Work",
  description:
    "Real community and marketing engagements: how Sense & Forum helped Found & Flourish migrate their community and Her First Athletics launch Her Hudle.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        bg="soft-pink"
        eyebrow="Our work"
        title="Real engagements, real results"
        accentLeft="mid-coral"
        accentRight="hot-pink"
      >
        Two communities, two different problems: a migration under
        pressure, and a launch from a blank page.
      </PageHero>

      <section className="section wrap" style={{ paddingBottom: 0 }}>
        {caseStudies.map((study) => (
          <article className="case-study" key={study.key}>
            <div className="case-study-head">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={study.logo}
                alt={study.client}
                className="case-study-logo"
              />
              <span className="label">{study.tag}</span>
            </div>
            <h2>{study.client}</h2>
            <p className="lede">{study.challenge}</p>
            <h3>What we did</h3>
            <ul className="case-study-list">
              {study.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>The result</h3>
            <p className="case-study-result">{study.result}</p>
            <blockquote className="case-study-quote">
              <p>&ldquo;{study.quote}&rdquo;</p>
              <cite>{study.quoteAttribution}</cite>
            </blockquote>
          </article>
        ))}
      </section>

      <section className="trust-bar" aria-labelledby="past-clients-heading">
        <p className="trust-bar-label" id="past-clients-heading">
          Past clients
        </p>
        <div className="trust-bar-logos">
          {clientLogos.map((logo) => (
            <div className="trust-bar-logo-card" key={logo.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="trust-bar-logo" src={logo.src} alt={logo.name} />
            </div>
          ))}
        </div>
      </section>

      <section className="cta cta-coral">
        <h2>
          Want results like <em>these?</em>
        </h2>
        <Pill href="/contact" variant="solid-green">
          Book a discovery call
        </Pill>
      </section>
    </>
  );
}
