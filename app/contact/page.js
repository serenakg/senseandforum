import PageHero from "@/components/PageHero";
import Label from "@/components/Label";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Book a discovery call with Sense & Forum, or send us a message about what you're working on.",
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
        <div className="contact-card" style={{ maxWidth: 640 }}>
          <h2>Book a discovery call</h2>
          <p>
            Fill out this short form first: it&rsquo;s how we work out if
            we&rsquo;re a fit before we get a call in the calendar. Short
            form, no trick questions.
          </p>
          <a
            className="pill pill-solid-green"
            href="https://forms.gle/h2QPvd8PRaNFUNfWA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fill out the discovery call form →
          </a>
        </div>
      </section>

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
          <h2>Prefer to skip the form?</h2>
          <p>Email us directly and we&rsquo;ll route it to the right person.</p>
          <a className="pill pill-solid-green" href="mailto:hello@senseandforum.com">
            Email hello@senseandforum.com
          </a>
        </div>
      </section>
    </>
  );
}
