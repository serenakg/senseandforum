import PageHero from "@/components/PageHero";
import LegalContent from "@/components/LegalContent";
import { privacyIntro, privacySections, privacyUpdated } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Sense & Forum collects, uses and protects your personal data, and your rights under the GDPR.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        bg="canvas"
        eyebrow={`Last updated ${privacyUpdated}`}
        title="Privacy Policy"
      >
        M. S. Project Zeus CY LTD t/a Sense &amp; Forum® &middot; Company
        number 430641 &middot; Leoforos Tafon Ton Vasileon 118, Pafos,
        Cyprus 8015
      </PageHero>

      <section className="section wrap">
        <LegalContent intro={privacyIntro} sections={privacySections} />
      </section>
    </>
  );
}
