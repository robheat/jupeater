import Link from "next/link";

import { RestaurantCard } from "@/components/restaurant-card";
import { SiteHeader } from "@/components/site-header";
import { filterRestaurants } from "@/lib/filters";
import {
  getCuisineOptions,
  getNeighborhoodOptions,
  getRestaurants,
  type PriceTier,
} from "@/lib/restaurants";

type RestaurantsPageProps = {
  searchParams: Promise<{
    q?: string;
    cuisine?: string;
    neighborhood?: string;
    price?: PriceTier;
  }>;
};

const priceTiers: PriceTier[] = ["$", "$$", "$$$"];

export default async function RestaurantsPage({ searchParams }: RestaurantsPageProps) {
  const params = await searchParams;
  const restaurants = getRestaurants();
  const filtered = filterRestaurants(restaurants, {
    query: params.q,
    cuisine: params.cuisine,
    neighborhood: params.neighborhood,
    priceTier: params.price,
  });

  const cuisineOptions = getCuisineOptions();
  const neighborhoodOptions = getNeighborhoodOptions();

  return (
    <div className="page-shell min-h-screen">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <section className="glass-card rounded-3xl p-6 sm:p-8">
          <h1 className="display-title text-4xl text-teal-900 sm:text-5xl">All Jupiter Dining Options</h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
            Filter by neighborhood, cuisine, and price tier. This is the first implementation pass
            and will expand to full city coverage.
          </p>

          <form className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            <input
              name="q"
              defaultValue={params.q ?? ""}
              placeholder="Search by name or vibe"
              className="rounded-xl border border-teal-900/20 bg-white px-3 py-2 text-sm outline-none ring-teal-700/50 focus:ring"
            />

            <select
              name="cuisine"
              defaultValue={params.cuisine ?? ""}
              className="rounded-xl border border-teal-900/20 bg-white px-3 py-2 text-sm outline-none ring-teal-700/50 focus:ring"
            >
              <option value="">All cuisines</option>
              {cuisineOptions.map((cuisine) => (
                <option key={cuisine} value={cuisine}>
                  {cuisine}
                </option>
              ))}
            </select>

            <select
              name="neighborhood"
              defaultValue={params.neighborhood ?? ""}
              className="rounded-xl border border-teal-900/20 bg-white px-3 py-2 text-sm outline-none ring-teal-700/50 focus:ring"
            >
              <option value="">All neighborhoods</option>
              {neighborhoodOptions.map((neighborhood) => (
                <option key={neighborhood} value={neighborhood}>
                  {neighborhood}
                </option>
              ))}
            </select>

            <select
              name="price"
              defaultValue={params.price ?? ""}
              className="rounded-xl border border-teal-900/20 bg-white px-3 py-2 text-sm outline-none ring-teal-700/50 focus:ring"
            >
              <option value="">All prices</option>
              {priceTiers.map((tier) => (
                <option key={tier} value={tier}>
                  {tier}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="rounded-xl bg-[var(--teal-900)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--teal-700)]"
            >
              Apply Filters
            </button>
          </form>

          <div className="mt-3 text-sm">
            <Link href="/restaurants" className="font-semibold text-teal-900 underline-offset-4 hover:underline">
              Reset filters
            </Link>
          </div>
        </section>

        <section className="mt-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
            {filtered.length} listing{filtered.length === 1 ? "" : "s"} found
          </p>

          {filtered.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((restaurant) => (
                <RestaurantCard key={restaurant.slug} restaurant={restaurant} />
              ))}
            </div>
          ) : (
            <div className="glass-card rounded-2xl p-6 text-sm text-slate-700">
              No listings match those filters yet. Try broadening your search.
            </div>
          )}
        </section>
      </main>
    </div>
  );
}