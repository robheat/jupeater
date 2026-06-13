import Link from "next/link";

import { RestaurantCard } from "@/components/restaurant-card";
import { SiteHeader } from "@/components/site-header";
import { getFeaturedRestaurants } from "@/lib/restaurants";

export default function Home() {
  const featuredRestaurants = getFeaturedRestaurants();

  return (
    <div className="page-shell min-h-screen">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <section className="glass-card relative overflow-hidden rounded-3xl p-8 shadow-[0_15px_40px_rgba(8,57,66,0.12)] sm:p-12">
          <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[var(--coral-500)]/25 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-8 h-32 w-32 rounded-full bg-[var(--teal-700)]/20 blur-2xl" />

          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
            Jupiter, Florida Dining Guide
          </p>
          <h1 className="display-title mt-3 max-w-3xl text-5xl leading-tight text-teal-900 sm:text-6xl">
            Find the right table in Jupiter, from laid-back docks to elevated nights out.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
            Jupeater spotlights where locals and visitors eat in Jupiter. Browse by cuisine,
            neighborhood, and budget, then open each profile for details and directions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/restaurants"
              className="rounded-full bg-[var(--teal-900)] px-6 py-3 text-sm font-semibold text-[var(--foam-100)] transition hover:bg-[var(--teal-700)]"
            >
              Explore Restaurants
            </Link>
            <Link
              href="/submit"
              className="rounded-full border border-teal-900/30 bg-white/70 px-6 py-3 text-sm font-semibold text-teal-900 transition hover:bg-white"
            >
              Submit or Update a Listing
            </Link>
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                Featured Now
              </p>
              <h2 className="display-title mt-2 text-4xl text-teal-900">Waterfront and local favorites</h2>
            </div>
            <Link href="/restaurants" className="text-sm font-semibold text-teal-900 underline-offset-4 hover:underline">
              See all listings
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.slug} restaurant={restaurant} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
