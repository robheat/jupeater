import Link from "next/link";

import type { Restaurant } from "@/lib/restaurants";

type RestaurantCardProps = {
  restaurant: Restaurant;
};

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <article className="glass-card flex h-full flex-col rounded-2xl p-5 shadow-[0_8px_28px_rgba(8,57,66,0.09)]">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="rounded-full bg-[var(--sand-100)] px-3 py-1 text-xs font-semibold tracking-wide text-teal-900">
          {restaurant.priceTier}
        </p>
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700/85">
          {restaurant.neighborhood}
        </p>
      </div>

      <h3 className="display-title text-3xl leading-tight text-teal-900">
        <Link href={`/restaurants/${restaurant.slug}`}>{restaurant.name}</Link>
      </h3>
      <p className="mt-2 text-sm font-semibold text-teal-700">{restaurant.tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">
        {restaurant.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {restaurant.cuisines.map((cuisine) => (
          <span
            key={cuisine}
            className="rounded-full border border-teal-900/15 bg-white px-2.5 py-1 text-xs font-medium text-slate-700"
          >
            {cuisine}
          </span>
        ))}
      </div>

      <Link
        href={`/restaurants/${restaurant.slug}`}
        className="mt-5 inline-flex w-fit rounded-full bg-[var(--teal-900)] px-4 py-2 text-sm font-semibold text-[var(--foam-100)] transition hover:bg-[var(--teal-700)]"
      >
        View Details
      </Link>
    </article>
  );
}