import PageHero from "@/components/PageHero";
import Pill from "@/components/Pill";
import { services, servicesInvestmentNote, servicesFaqs } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services: Fractional CMO & Community Marketing",
  description:
    "Five ways to work with Sense & Forum: audits, fractional CMO retainers, growth support, full community builds, and launch partner work.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        bg="soft-pink"
        eyebrow="What we offer"
        title={
          <>
            So how can Sense &amp; Forum
            <span className="reg-mark">&reg;</span> support you?
          </>
        }
        accentLeft="sun-amber"
        accentRight="mid-coral"
      >
        Five ways in, depending on how much you already know and how fast
        you need to move. Community you own outperforms reach you&rsquo;re
        renting.
      </PageHero>

      <section className="section wrap" style={{ paddingBottom: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/photos/services-notebook.jpg"
          alt="Planning out a service engagement"
          className="content-image"
        />
      </section>

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
              {service.closingNote && (
                <p
                  className="desc"
                  style={{ fontStyle: "italic", textAlign: "center" }}
                >
                  {service.closingNote}
                  {service.closingNoteLinkHref && (
                    <a
                      href={service.closingNoteLinkHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {service.closingNoteLinkText}
                    </a>
                  )}
                  {service.closingNoteLinkHref && "."}
                </p>
              )}
              {service.howWeWork && (
                <div className="svc-scope">
                  <div className="svc-scope-label">How we work</div>
                  <div className="svc-scope-format">{service.format}</div>
                  <ul>
                    {service.howWeWork.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}

          <div className="svc-investment">
            <h3>{servicesInvestmentNote.heading}</h3>
            <p>{servicesInvestmentNote.body}</p>
          </div>
        </div>
      </section>

      <section className="section wrap faq">
        <h2>
          Frequently asked <em>questions</em>
        </h2>
        <div className="faq-list">
          {servicesFaqs.map((item) => (
            <div className="faq-item" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>
          Not sure which one you <em>need?</em>
        </h2>
        <p>Neither did most of our clients, before we talked it through.</p>
        <Pill href="/contact" variant="solid-green">
          Book a discovery call
        </Pill>
      </section>
    </>
  );
}
