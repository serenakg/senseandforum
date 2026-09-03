import PageHero from "@/components/PageHero";
import Label from "@/components/Label";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Sense & Forum: send us a message about what you're working on, or find our contact details and location.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        bg="deep-green"
        onDark
        eyebrow="Book a discovery call"
        title="Let’s talk"
        accentLeft="mid-coral"
        accentRight="hot-pink"
      >
        Tell us what you&rsquo;re working on. If it&rsquo;s a fit, we&rsquo;ll
        set up a discovery call.
      </PageHero>

      <section className="section wrap" style={{ paddingBottom: 0 }}>
        <Label>Send us a message</Label>
        <h2>Tell us what you&rsquo;re working on</h2>
        <p className="lede">
          Fill out the form below and we&rsquo;ll route it to the right
          person.
        </p>
        <div className="form-embed">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdP33no5Ksu7zq68RJdI0_DTdt-MwvzksSkKQ5bi1t4y3Ivcg/viewform?embedded=true"
            title="Work with us form"
          >
            Loading&hellip;
          </iframe>
        </div>
      </section>

      <section className="section wrap">
        <div className="contact-card contact-card-centered">
          <h2>Contact details</h2>
          <p>
            Email:{" "}
            <a href="mailto:hello@senseandforum.com">
              hello@senseandforum.com
            </a>
          </p>
          <p>Based in Pafos, Cyprus.</p>
        </div>
      </section>
    </>
  );
}
