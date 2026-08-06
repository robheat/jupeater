import Link from "next/link";
import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import {
  getRestaurantCategories,
  getRestaurantsForCategory,
} from "@/lib/restaurant-categories";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Restaurant Categories",
  description:
    "Browse SEO-focused Jupiter-area dining categories including waterfront, seafood, date night, and family-friendly restaurants.",
  alternates: { canonical: `${SITE_URL}/categories` },
};

export default function CategoriesPage() {
  const categories = getRestaurantCategories().map((category) => ({
    ...category,
    count: getRestaurantsForCategory(category.slug).length,
  }));

  return (
    <div className="page-shell min-h-screen">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <section className="glass-card rounded-3xl p-6 sm:p-8">
          <h1 className="display-title text-4xl text-teal-900 sm:text-5xl">Restaurant Categories</h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
            Explore high-intent local dining searches for Jupiter, Tequesta, Juno Beach, and Palm
            Beach Gardens.
          </p>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="glass-card rounded-2xl p-5 transition hover:-translate-y-0.5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
                {category.count} listing{category.count === 1 ? "" : "s"}
              </p>
              <h2 className="display-title mt-2 text-3xl text-teal-900">{category.title}</h2>
              <p className="mt-2 text-sm text-slate-700">{category.description}</p>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
