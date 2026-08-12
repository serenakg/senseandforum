import Link from "next/link";

export default function Logo({ chip = false }) {
  return (
    <Link
      href="/"
      aria-label="Sense and Forum home"
      className={`wordmark${chip ? " on-dark-chip" : ""}`}
    >
      <span aria-hidden="true">Sense</span>
      <span className="amp" aria-hidden="true">
        &amp;
      </span>
      <span aria-hidden="true">Forum</span>
    </Link>
  );
}
