export default function AccentCircle({ left, right, className = "" }) {
  return (
    <svg
      className={`accent-circle ${className}`}
      viewBox="0 0 200 200"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M100,0 A100,100 0 0 0 100,200 Z" fill={`var(--${left})`} />
      <path d="M100,0 A100,100 0 0 1 100,200 Z" fill={`var(--${right})`} />
    </svg>
  );
}
