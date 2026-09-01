import Label from "./Label";
import AccentCircle from "./AccentCircle";

export default function PageHero({
  bg = "canvas",
  onDark = false,
  eyebrow,
  title,
  children,
  accentLeft,
  accentRight,
}) {
  return (
    <section
      className={`page-hero${onDark ? " on-dark" : ""}`}
      style={{ background: `var(--${bg})` }}
    >
      {accentLeft && accentRight && (
        <AccentCircle left={accentLeft} right={accentRight} className="page-hero-accent" />
      )}
      <div className="wrap">
        {eyebrow && <Label onDark={onDark}>{eyebrow}</Label>}
        <h1>{title}</h1>
        {children && <p>{children}</p>}
      </div>
    </section>
  );
}
