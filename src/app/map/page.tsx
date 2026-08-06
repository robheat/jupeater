import type { Metadata } from "next";

import { RestaurantMapLoader } from "@/components/restaurant-map-loader";
import { SiteHeader } from "@/components/site-header";
import { getRestaurants } from "@/lib/restaurants";

export const metadata: Metadata = {
  title: "Map View",
  description: "See every Jupiter-area restaurant listing plotted on an interactive map.",
};

export default function MapPage() {
  const restaurants = getRestaurants().map((restaurant, index) => ({
    ...restaurant,
    markerNumber: index + 1,
  }));

  return (
    <div className="page-shell min-h-screen">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <section className="glass-card rounded-3xl p-6 sm:p-8">
          <h1 className="display-title text-4xl text-teal-900 sm:text-5xl">Map View</h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
            Every current listing is plotted on an interactive Jupiter-area map. Pan, zoom, or tap a
            pin for directions.
          </p>

          <div className="relative mt-6 overflow-hidden rounded-3xl border border-teal-900/20 bg-[#eff7f2] shadow-[0_18px_50px_rgba(8,57,66,0.12)]">
            <div className="h-[520px] w-full sm:h-[600px]">
              <RestaurantMapLoader restaurants={restaurants} />
            </div>

            <div className="pointer-events-none absolute left-4 top-4 z-[1000] rounded-2xl border border-white/70 bg-white/90 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-900 shadow-lg shadow-teal-950/10 backdrop-blur">
              {restaurants.length} listings plotted
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <a
              key={restaurant.slug}
              href={restaurant.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="glass-card rounded-2xl p-4 transition hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--teal-900)] text-sm font-bold text-white">
                  {restaurant.markerNumber}
                </span>
                <div>
                  <p className="display-title text-2xl text-teal-900">{restaurant.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-teal-700">
                    {restaurant.neighborhood}
                  </p>
                </div>
              </div>
              <p className="mt-1 text-sm text-slate-700">{restaurant.address}</p>
            </a>
          ))}
        </section>
      </main>
    </div>
  );
}