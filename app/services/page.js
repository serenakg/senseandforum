import PageHero from "@/components/PageHero";
import Pill from "@/components/Pill";
import { services } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Four ways to work with Sense & Forum — Audit + Redesign, Change-Making Workshops, Fractional Support, and the Build-Your-Culture Program.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        bg="green"
        onDark
        eyebrow="What we offer"
        title="So how can Sense & Forum support you?"
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
              <div className="meta">
                <div className="meta-item">
                  <div className="k">Format</div>
                  <div className="v">{service.format}</div>
                </div>
                <div className="meta-item">
                  <div className="k">Pricing (benchmark)</div>
                  <div className="v">{service.price}</div>
                </div>
                <div className="meta-item" style={{ flex: "1 1 260px" }}>
                  <div className="k">Who it&rsquo;s for</div>
                  <div className="v" style={{ fontWeight: 500 }}>
                    {service.whoFor}
                  </div>
                </div>
              </div>
            </article>
          ))}
          <p className="notice" style={{ marginTop: 30 }}>
            Pricing shown is a benchmark estimate based on typical scope, not
            a fixed quote — every engagement is scoped to the work in front
            of us.
          </p>
        </div>
      </section>

      <section className="cta">
        <h2>
          Not sure which one you need<em>?</em>
        </h2>
        <Pill href="/contact" variant="solid-green">
          Talk it through with us
        </Pill>
      </section>
    </>
  );
}
