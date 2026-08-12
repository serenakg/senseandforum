"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/freelancers", label: "Freelancers" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="site-nav" aria-label="Primary">
      <Logo chip />
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="primary-nav-links"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <div
        id="primary-nav-links"
        className={`navlinks${open ? " open" : ""}`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
