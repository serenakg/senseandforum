import Link from "next/link";

export default function Logo({ variant = "reversed" }) {
  const src = variant === "black" ? "/brand/logo-black.svg" : "/brand/logo-reversed.svg";

  return (
    <Link href="/" aria-label="Sense and Forum home" className="logo-link">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="Sense &amp; Forum" className="logo-img" />
    </Link>
  );
}
