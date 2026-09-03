import Label from "@/components/Label";
import Pill from "@/components/Pill";
import AccentCircle from "@/components/AccentCircle";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ background: "var(--soft-pink)" }}>
      <AccentCircle left="sun-amber" right="mid-coral" className="page-hero-accent" />
      <div className="wrap">
        <Label>404</Label>
        <h1>You&rsquo;ve found the one thing on this site we haven&rsquo;t designed yet</h1>
        <p>
          Wrong link, old bookmark, or you&rsquo;re just testing us. Either
          way, the page you&rsquo;re after isn&rsquo;t here.
        </p>
        <div style={{ marginTop: 30 }}>
          <Pill href="/" variant="solid">
            Back to the homepage
          </Pill>
        </div>
      </div>
    </section>
  );
}
