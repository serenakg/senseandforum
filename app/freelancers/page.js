import PageHero from "@/components/PageHero";
import Pill from "@/components/Pill";
import DirectoryCard from "@/components/DirectoryCard";
import { roster } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Freelancer Directory",
  description:
    "The specialists Sense & Forum brings in project by project — a placeholder roster, ready to go live as the bench is re-engaged.",
  path: "/freelancers",
});

export default function FreelancersPage() {
  return (
    <>
      <PageHero
        bg="mint"
        eyebrow="The bench"
        title="Freelancer directory"
      >
        The specialists we bring in project by project, on top of the core
        team. This roster is a placeholder — no bench members are named
        yet, and full profiles go live as they&rsquo;re re-engaged.
      </PageHero>

      <section className="directory" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="notice" style={{ marginBottom: 40 }}>
            Placeholder listing. Each card is built to carry a name, photo,
            short bio, rate band, and availability once a specialist is
            confirmed — nothing here is a live profile yet.
          </p>
          <div className="roster">
            {roster.map((slot, i) => (
              <DirectoryCard
                key={slot.role}
                role={slot.role}
                status={slot.status}
                initials={slot.initials}
                colorIndex={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>
          Know someone who should be <em>on this list?</em>
        </h2>
        <Pill href="/contact" variant="solid-green">
          Get in touch
        </Pill>
      </section>
    </>
  );
}
