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
              person, or book a discovery call straight into the calendar.
            </p>
            <a className="pill pill-solid-green" href="mailto:hello@senseandforum.com">
              Email hello@senseandforum.com
            </a>
            <a className="pill pill-ghost-dark" href="mailto:hello@senseandforum.com?subject=Book%20a%20discovery%20call">
              Book a discovery call →
            </a>
            <p style={{ fontSize: 12.5, opacity: 0.6, marginTop: 16, marginBottom: 0 }}>
              Placeholder contact details: swap in a live booking link once
              one&rsquo;s set up.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
