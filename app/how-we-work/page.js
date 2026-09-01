import PageHero from "@/components/PageHero";
import Pill from "@/components/Pill";
import { stages, archetypes } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "How We Work",
  description:
    "The Sense & Forum method: Audit, Redesign, Implement, Prove It. Plus the three patterns we keep solving for across scale-ups, community organisations, and one-off events.",
  path: "/how-we-work",
});

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        bg="amber-pale"
        eyebrow="Our method"
        title="Four stages, one architecture"
        accentLeft="soft-lime"
        accentRight="soft-pink"
      >
        Audit and Review, Design, Implement, Prove It and Review It. The
        same method whether we&rsquo;re fixing one programme or building a
        community from scratch.
      </PageHero>

      <section className="section wrap">
        {stages.map((stage) => (
          <div className="stage" key={stage.number}>
            <div className="n" aria-hidden="true">
              {stage.number}
            </div>
            <div>
              <h2>{stage.title}</h2>
              <p>{stage.detail}</p>
              <ul>
                {stage.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="proof">
        <div className="wrap">
          <h2>
            Three patterns we keep <em>solving for</em>
          </h2>
          {archetypes.map((arch) => (
            <div className="arch-full" key={arch.tag}>
              <span className="label">{arch.tag}</span>
              <h3>{arch.title}</h3>
              <p>{arch.detail}</p>
              <ul className="steps-list">
                {arch.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>
          See what this looks like for <em>your team</em>
        </h2>
        <Pill href="/contact" variant="solid-green">
          Book a discovery call
        </Pill>
      </section>
    </>
  );
}
