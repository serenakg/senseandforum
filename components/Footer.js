import Logo from "./Logo";
import AccentCircle from "./AccentCircle";

export default function Footer() {
  return (
    <footer className="site-footer">
      <AccentCircle left="sun-amber" right="mid-coral" className="footer-accent" />
      <div style={{ marginBottom: 14 }}>
        <Logo variant="black" />
      </div>
      <div>No-nonsense community-led growth.</div>
      <nav className="footer-links" aria-label="Footer">
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/how-we-work">How We Work</a>
        <a href="/team">Team</a>
        <a href="/contact">Contact</a>
      </nav>
      <nav className="footer-legal" aria-label="Legal">
        <a href="/terms">Terms and Conditions</a>
        <a href="/privacy">Privacy Policy</a>
      </nav>
      <div style={{ opacity: 0.6, fontSize: 12.5, marginTop: 4 }}>
        Built with intention, and slightly too much coffee.
      </div>
      <div style={{ opacity: 0.7, fontSize: 12 }}>
        © {new Date().getFullYear()} Sense &amp; Forum&reg;
      </div>
    </footer>
  );
}
