import { SiteHeader } from "@/components/site-header";
import { getRestaurants } from "@/lib/restaurants";

export default function MapPage() {
  const restaurants = getRestaurants();

  return (
    <div className="page-shell min-h-screen">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <section className="glass-card rounded-3xl p-6 sm:p-8">
          <h1 className="display-title text-4xl text-teal-900 sm:text-5xl">Map View (Beta)</h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
            This first pass centers on Jupiter and links each listing to turn-by-turn directions.
            Interactive per-listing map markers will be added in the next build.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-teal-900/20">
            <iframe
              title="Jupiter Florida map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-80.2057%2C26.8803%2C-80.0107%2C26.9984&layer=mapnik"
              className="h-[420px] w-full"
            />
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
              <p className="display-title text-2xl text-teal-900">{restaurant.name}</p>
              <p className="mt-1 text-sm text-slate-700">{restaurant.address}</p>
            </a>
          ))}
        </section>
      </main>
    </div>
  );
}