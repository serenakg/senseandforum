import PageHero from "@/components/PageHero";
import LegalContent from "@/components/LegalContent";
import { termsIntro, termsSections, termsUpdated } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms and Conditions",
  description: "The terms and conditions governing use of the Sense & Forum website and our services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        bg="canvas"
        eyebrow={`Last updated ${termsUpdated}`}
        title="Terms and Conditions"
      >
        M. S. Project Zeus CY LTD t/a Sense &amp; Forum® &middot; Company
        number 430641 &middot; Leoforos Tafon Ton Vasileon 118, Pafos,
        Cyprus 8015
      </PageHero>

      <section className="section wrap">
        <LegalContent intro={termsIntro} sections={termsSections} />
      </section>
    </>
  );
}
