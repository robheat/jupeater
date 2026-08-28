import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-teal-900/10 bg-[#fffdf8]">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-5 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
          Jupeater
        </p>

        <nav className="flex items-center gap-3">
          <Link
            href="/restaurants"
            className="pill-link rounded-full border border-teal-900/20 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal-900"
          >
            Restaurants
          </Link>
          <Link
            href="/categories"
            className="pill-link rounded-full border border-teal-900/20 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal-900"
          >
            Categories
          </Link>
          <Link
            href="/map"
            className="pill-link rounded-full border border-teal-900/20 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal-900"
          >
            Map
          </Link>
          <Link
            href="/faq"
            className="pill-link rounded-full border border-teal-900/20 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal-900"
          >
            FAQ
          </Link>
          <Link
            href="/privacy"
            className="pill-link rounded-full border border-teal-900/20 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal-900"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="pill-link rounded-full border border-teal-900/20 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal-900"
          >
            Terms
          </Link>
          <Link
            href="/contact"
            className="pill-link rounded-full border border-teal-900/20 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal-900"
          >
            Contact
          </Link>
          <Link
            href="/submit"
            className="pill-link rounded-full border border-teal-900/20 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal-900"
          >
            Submit
          </Link>
          <a
            href="https://jupiterfl360.com"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-link rounded-full border border-teal-900/20 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal-900"
          >
            Things to Do in Jupiter
          </a>
        </nav>
      </div>
    </footer>
  );
}