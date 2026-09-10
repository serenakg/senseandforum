import PageHero from "@/components/PageHero";
import Label from "@/components/Label";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact: Book a Discovery Call",
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
        <Label>Book a discovery call</Label>
        <h2>Tell us what you&rsquo;re working on</h2>
        <p className="lede">
          Fill out the form below and we&rsquo;ll route it to the right
          person.
        </p>
        <div className="form-embed">
          <iframe
            src="https://forms.gle/h2QPvd8PRaNFUNfWA"
            title="Book a discovery call form"
          >
            Loading&hellip;
          </iframe>
        </div>
      </section>

      <section className="section wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/photos/contact-desk.jpg"
          alt="Sense & Forum, wherever the work happens"
          className="content-image"
        />
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
