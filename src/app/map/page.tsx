import { SiteHeader } from "@/components/site-header";
import { getRestaurants } from "@/lib/restaurants";
import Image from "next/image";

const MAP_WIDTH = 960;
const MAP_HEIGHT = 560;
const MAP_CENTER = {
  lat: 26.921,
  lon: -80.0965,
};
const MAP_ZOOM = 12;
const TILE_SIZE = 256;

function projectLocation(lat: number, lon: number) {
  const scale = 2 ** MAP_ZOOM * TILE_SIZE;
  const centerX = ((MAP_CENTER.lon + 180) / 360) * scale;
  const centerLatRadians = (MAP_CENTER.lat * Math.PI) / 180;
  const centerY =
    (0.5 - Math.log((1 + Math.sin(centerLatRadians)) / (1 - Math.sin(centerLatRadians))) / (4 * Math.PI)) *
    scale;

  const pointX = ((lon + 180) / 360) * scale;
  const latRadians = (lat * Math.PI) / 180;
  const pointY =
    (0.5 - Math.log((1 + Math.sin(latRadians)) / (1 - Math.sin(latRadians))) / (4 * Math.PI)) *
    scale;

  const x = ((pointX - centerX + MAP_WIDTH / 2) / MAP_WIDTH) * 100;
  const y = ((pointY - centerY + MAP_HEIGHT / 2) / MAP_HEIGHT) * 100;

  return {
    x: Math.min(96, Math.max(4, x)),
    y: Math.min(96, Math.max(4, y)),
  };
}

export default function MapPage() {
  const restaurants = getRestaurants().map((restaurant, index) => ({
    ...restaurant,
    markerNumber: index + 1,
    position: projectLocation(restaurant.location.lat, restaurant.location.lon),
  }));
  const mapUrl = `https://staticmap.openstreetmap.de/staticmap.php?center=${MAP_CENTER.lat},${MAP_CENTER.lon}&zoom=${MAP_ZOOM}&size=${MAP_WIDTH}x${MAP_HEIGHT}&maptype=mapnik`;

  return (
    <div className="page-shell min-h-screen">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <section className="glass-card rounded-3xl p-6 sm:p-8">
          <h1 className="display-title text-4xl text-teal-900 sm:text-5xl">Map View</h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
            Every current listing is plotted on the Jupiter map and still links out to turn-by-turn
            directions.
          </p>

          <div className="mt-6 overflow-hidden rounded-3xl border border-teal-900/20 bg-[#eff7f2] shadow-[0_18px_50px_rgba(8,57,66,0.12)]">
            <div className="relative aspect-[12/7] w-full overflow-hidden">
              <Image
                alt="Jupiter Florida map"
                src={mapUrl}
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />

              {restaurants.map((restaurant) => (
                <a
                  key={restaurant.slug}
                  href={restaurant.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open directions for ${restaurant.name}`}
                  className="group absolute -translate-x-1/2 -translate-y-full transition-transform hover:scale-105 focus:scale-105 focus:outline-none"
                  style={{
                    left: `${restaurant.position.x}%`,
                    top: `${restaurant.position.y}%`,
                  }}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/90 bg-[var(--teal-900)] text-sm font-bold text-white shadow-lg shadow-teal-950/20">
                    {restaurant.markerNumber}
                  </span>
                  <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-teal-900 opacity-0 shadow-md shadow-teal-950/10 transition group-hover:opacity-100 group-focus:opacity-100 whitespace-nowrap">
                    {restaurant.name}
                  </span>
                </a>
              ))}

              <div className="absolute left-4 top-4 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-900 shadow-lg shadow-teal-950/10 backdrop-blur">
                {restaurants.length} listings plotted
              </div>
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