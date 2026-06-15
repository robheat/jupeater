import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/restaurants", label: "Restaurants" },
  { href: "/map", label: "Map" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-teal-900/10 bg-[#fffdf8]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="inline-flex items-center" aria-label="Jupeater home">
          <Image
            src="/jupeater-logo.webp"
            alt="Jupeater"
            width={180}
            height={52}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <nav className="flex items-center gap-2 sm:gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="pill-link rounded-full border border-teal-900/15 bg-white/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal-900 sm:text-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}