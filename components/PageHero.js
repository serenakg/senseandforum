import Label from "./Label";

export default function PageHero({ bg = "canvas", onDark = false, eyebrow, title, children }) {
  return (
    <section
      className={`page-hero${onDark ? " on-dark" : ""}`}
      style={{ background: `var(--${bg})` }}
    >
      <div className="wrap">
        {eyebrow && <Label onDark={onDark}>{eyebrow}</Label>}
        <h1>{title}</h1>
        {children && <p>{children}</p>}
      </div>
    </section>
  );
}
