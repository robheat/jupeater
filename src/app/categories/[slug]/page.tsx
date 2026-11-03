import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { RestaurantCard } from "@/components/restaurant-card";
import { SiteHeader } from "@/components/site-header";
import {
  getRestaurantCategories,
  getRestaurantCategoryBySlug,
  getRestaurantsForCategory,
} from "@/lib/restaurant-categories";
import { SITE_URL } from "@/lib/site";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

const INLINE_LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

// Category copy is plain text; a `[label](href)` in a paragraph becomes a link.
function renderParagraph(paragraph: string) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of paragraph.matchAll(INLINE_LINK)) {
    const [whole, label, href] = match;
    parts.push(paragraph.slice(last, match.index));
    parts.push(
      href.startsWith("http") ? (
        <a key={match.index} href={href} className="font-semibold text-teal-900 underline underline-offset-4">
          {label}
        </a>
      ) : (
        <Link key={match.index} href={href} className="font-semibold text-teal-900 underline underline-offset-4">
          {label}
        </Link>
      ),
    );
    last = match.index + whole.length;
  }
  parts.push(paragraph.slice(last));
  return parts;
}

export function generateStaticParams() {
  return getRestaurantCategories().map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getRestaurantCategoryBySlug(slug);

  if (!category) {
    return {};
  }

  // A count signals a concrete list; it comes from the same list the page renders.
  const count = getRestaurantsForCategory(slug).length;

  return {
    title: count >= 2 ? `${category.title} (${count} Picks)` : category.title,
    description: category.description,
    alternates: { canonical: `${SITE_URL}/categories/${category.slug}` },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getRestaurantCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const restaurants = getRestaurantsForCategory(slug);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: category.keyword,
    itemListElement: restaurants.map((restaurant, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/restaurants/${restaurant.slug}`,
      name: restaurant.name,
    })),
  };

  return (
    <div className="page-shell min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <section className="glass-card rounded-3xl p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Local Search Category
          </p>
          <h1 className="display-title mt-3 text-4xl text-teal-900 sm:text-5xl">{category.keyword}</h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
            {category.description}
          </p>
          <div className="mt-4 text-sm">
            <Link href="/categories" className="font-semibold text-teal-900 underline-offset-4 hover:underline">
              Browse all categories
            </Link>
          </div>
        </section>

        <section className="glass-card mt-8 rounded-3xl p-6 sm:p-8">
          <h2 className="display-title text-3xl text-teal-900 sm:text-4xl">
            Local Guide: {category.keyword}
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
            {category.seoParagraphs.map((paragraph) => (
              <p key={paragraph}>{renderParagraph(paragraph)}</p>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
            {restaurants.length} listing{restaurants.length === 1 ? "" : "s"} found
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {restaurants.map((restaurant, index) => (
              <RestaurantCard key={restaurant.slug} restaurant={restaurant} priority={index < 3} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
