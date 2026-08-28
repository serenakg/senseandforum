export default function LogoMark({ size = 200, color = "var(--green)" }) {
  return (
    <div
      className="logo-mark"
      style={{ width: size, color, fontSize: size * 0.42 }}
      role="img"
      aria-label="Sense and Forum logo mark"
    >
      <span className="amp" aria-hidden="true">
        &amp;
      </span>
    </div>
  );
}
