import PageHero from "@/components/PageHero";
import Pill from "@/components/Pill";
import { services } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Four ways to work with Sense & Forum: Community/Engagement Audit + Redesign, Fractional Community/Growth Support, Build Your Community, Programme or Event, and Launch Partner fractional CMO work.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        bg="soft-pink"
        eyebrow="What we offer"
        title="So how can Sense & Forum support you?"
        accentLeft="sun-amber"
        accentRight="mid-coral"
      >
        Four ways in, depending on how much you already know and how fast
        you need to move.
      </PageHero>

      <section className="services">
        <div className="wrap">
          {services.map((service) => (
            <article className="svc-full" key={service.number}>
              <div className="n" aria-hidden="true">
                {service.number}
              </div>
              <h2>{service.title}</h2>
              <p className="desc">{service.fullDescription}</p>
              <ul className="svc-full-includes">
                {service.whatYouGet.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="svc-fit">
                <div>
                  <h3>This is for you if</h3>
                  <ul className="svc-fit-list svc-fit-yes">
                    {service.forYouIf.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>This isn&rsquo;t for you if</h3>
                  <ul className="svc-fit-list svc-fit-no">
                    {service.notForYouIf.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="meta">
                <div className="meta-item">
                  <div className="k">Format</div>
                  <div className="v">{service.format}</div>
                </div>
                <div className="meta-item">
                  <div className="k">Pricing (benchmark)</div>
                  <div className="v">{service.price}</div>
                </div>
              </div>
            </article>
          ))}
          <p className="notice" style={{ marginTop: 30 }}>
            Pricing shown is a benchmark estimate based on typical scope, not
            a fixed quote. Every engagement is scoped to the work in front of
            us.
          </p>
        </div>
      </section>

      <section className="cta">
        <h2>
          Not sure which one you <em>need?</em>
        </h2>
        <Pill href="/contact" variant="solid-green">
          Book a discovery call
        </Pill>
      </section>
    </>
  );
}
