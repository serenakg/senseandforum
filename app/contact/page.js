import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
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
            we&rsquo;re a fit before we get a call in the calendar.
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

      <section className="section wrap">
        <div className="contact-layout">
          <div>
            <h2 className="visually-hidden">Send us a message</h2>
            <ContactForm />
          </div>

          <div className="contact-card">
            <h2>Prefer to skip the form?</h2>
            <p>
              Email us directly and we&rsquo;ll route it to the right
              person.
            </p>
            <a className="pill pill-solid-green" href="mailto:hello@senseandforum.com">
              Email hello@senseandforum.com
            </a>
            <a
              className="pill pill-ghost-dark"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdP33no5Ksu7zq68RJdI0_DTdt-MwvzksSkKQ5bi1t4y3Ivcg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fill out our work with us form →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
