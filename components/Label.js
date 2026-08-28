export default function Label({ onDark = false, as: As = "span", children }) {
  return (
    <As className={`label${onDark ? " on-dark" : ""}`}>{children}</As>
  );
}
