import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div style={{ marginBottom: 14 }}>
        <Logo chip />
      </div>
      <div>We design programmes, communities and events people want to be part of.</div>
      <nav className="footer-links" aria-label="Footer">
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/how-we-work">How We Work</a>
        <a href="/team">Team</a>
        <a href="/contact">Contact</a>
      </nav>
      <div style={{ opacity: 0.7, fontSize: 12 }}>
        © {new Date().getFullYear()} Sense &amp; Forum
      </div>
    </footer>
  );
}
