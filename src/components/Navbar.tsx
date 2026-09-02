import Link from "next/link";
import { profile } from "@/data/profile";

const links = [
  { label: "About", href: "/" },
  { label: "Projects", href: "/projects" },
];

export function Navbar() {
  return (
    <nav className="flex shrink-0 items-center gap-8 text-[15px]">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-neutral-300 transition-colors hover:text-neutral-100"
        >
          {link.label}
        </Link>
      ))}
      <a
        href={profile.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-300 transition-colors hover:text-neutral-100"
      >
        Resume
      </a>
    </nav>
  );
}
