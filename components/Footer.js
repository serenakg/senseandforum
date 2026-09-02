import Logo from "./Logo";
import AccentCircle from "./AccentCircle";

export default function Footer() {
  return (
    <footer className="site-footer">
      <AccentCircle left="sun-amber" right="mid-coral" className="footer-accent" />
      <div style={{ marginBottom: 14 }}>
        <Logo variant="black" />
      </div>
      <div>
        We design programmes, communities and events, and step in as
        marketing leadership when you need it.
      </div>
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
      <div style={{ opacity: 0.7, fontSize: 12 }}>
        © {new Date().getFullYear()} Sense &amp; Forum
      </div>
    </footer>
  );
}
