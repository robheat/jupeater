import Link from "next/link";
import { notFound } from "next/navigation";

import { submitRestaurantReview } from "@/app/restaurants/[slug]/actions";
import { SiteHeader } from "@/components/site-header";
import { getPublishedReviews } from "@/lib/backend";
import { getRestaurantBySlug, getRestaurants } from "@/lib/restaurants";

type RestaurantDetailPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ review?: string; message?: string }>;
};

export function generateStaticParams() {
  return getRestaurants().map((restaurant) => ({ slug: restaurant.slug }));
}

export default async function RestaurantDetailPage({
  params,
  searchParams,
}: RestaurantDetailPageProps) {
  const { slug } = await params;
  const reviewParams = await searchParams;
  const restaurant = getRestaurantBySlug(slug);

  if (!restaurant) {
    notFound();
  }

  const publishedReviews = await getPublishedReviews(slug);

  return (
    <div className="page-shell min-h-screen">
      <SiteHeader />

      <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
        <Link href="/restaurants" className="text-sm font-semibold text-teal-900 underline-offset-4 hover:underline">
          Back to all restaurants
        </Link>

        <section className="glass-card mt-5 rounded-3xl p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[var(--sand-100)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-teal-900">
              {restaurant.neighborhood}
            </span>
            <span className="rounded-full bg-[var(--sand-100)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-teal-900">
              {restaurant.priceTier}
            </span>
            {restaurant.cuisines.map((cuisine) => (
              <span
                key={cuisine}
                className="rounded-full border border-teal-900/20 bg-white px-3 py-1 text-xs font-medium text-slate-700"
              >
                {cuisine}
              </span>
            ))}
          </div>

          <h1 className="display-title mt-4 text-5xl leading-tight text-teal-900 sm:text-6xl">
            {restaurant.name}
          </h1>
          <p className="mt-3 text-base font-semibold text-teal-700 sm:text-lg">{restaurant.tagline}</p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
            {restaurant.description}
          </p>

          <div className="mt-8 rounded-2xl border border-teal-900/15 bg-white/80 p-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
              Photo Gallery
            </h2>

            {restaurant.photoUrls.length > 0 ? (
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {restaurant.photoUrls.map((url, index) => (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="group overflow-hidden rounded-xl border border-teal-900/15 bg-white"
                  >
                    <div
                      className="h-40 bg-cover bg-center transition duration-300 group-hover:scale-[1.03]"
                      style={{ backgroundImage: `url(${url})` }}
                    />
                    <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-teal-900">
                      Photo {index + 1}
                    </p>
                  </a>
                ))}
              </div>
            ) : (
              <p className="mt-3 text-sm text-slate-700">No gallery photos are available yet.</p>
            )}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-teal-900/15 bg-white/80 p-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">Location</h2>
              <p className="mt-2 text-sm text-slate-700">{restaurant.address}</p>
              <a
                href={restaurant.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex text-sm font-semibold text-teal-900 underline-offset-4 hover:underline"
              >
                Open in Maps
              </a>
            </div>

            <div className="rounded-2xl border border-teal-900/15 bg-white/80 p-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">Contact</h2>
              <p className="mt-2 text-sm text-slate-700">{restaurant.phone}</p>
              <a
                href={restaurant.website}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex text-sm font-semibold text-teal-900 underline-offset-4 hover:underline"
              >
                Visit Website
              </a>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-teal-900/15 bg-white/80 p-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">Hours</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {restaurant.hours.map((row) => (
                <li key={row}>{row}</li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-xs text-slate-600">
            Last verified: {restaurant.lastVerified}. Hours can change for holidays and seasonal
            events.
          </p>

          <div className="mt-8 rounded-2xl border border-teal-900/15 bg-white/80 p-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
              Community Reviews
            </h2>

            {publishedReviews.length > 0 ? (
              <ul className="mt-4 space-y-3">
                {publishedReviews.map((review) => (
                  <li key={review.id} className="rounded-xl border border-teal-900/10 bg-white p-3">
                    <p className="text-sm font-semibold text-teal-900">
                      {review.reviewer_name} · {"★".repeat(review.rating)}
                    </p>
                    <p className="mt-1 text-sm text-slate-700">{review.comment}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-slate-700">
                No published reviews yet. Be the first to submit one.
              </p>
            )}
          </div>

          <div className="mt-8 rounded-2xl border border-teal-900/15 bg-white/80 p-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
              Leave a Review
            </h2>

            {reviewParams.review === "success" && (
              <p className="mt-3 rounded-xl border border-emerald-300 bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
                Thanks. Your review was submitted and is pending moderation.
              </p>
            )}

            {reviewParams.review === "error" && (
              <p className="mt-3 rounded-xl border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">
                {reviewParams.message ?? "Unable to submit review right now."}
              </p>
            )}

            <form action={submitRestaurantReview} className="mt-4 grid gap-3">
              <input type="hidden" name="restaurantSlug" value={restaurant.slug} />

              <label className="grid gap-1 text-sm font-medium text-slate-700">
                Name
                <input
                  name="reviewerName"
                  required
                  className="rounded-xl border border-teal-900/20 bg-white px-3 py-2 text-sm outline-none ring-teal-700/50 focus:ring"
                />
              </label>

              <label className="grid gap-1 text-sm font-medium text-slate-700">
                Email
                <input
                  type="email"
                  name="reviewerEmail"
                  required
                  className="rounded-xl border border-teal-900/20 bg-white px-3 py-2 text-sm outline-none ring-teal-700/50 focus:ring"
                />
              </label>

              <label className="grid gap-1 text-sm font-medium text-slate-700">
                Rating
                <select
                  name="rating"
                  required
                  defaultValue="5"
                  className="rounded-xl border border-teal-900/20 bg-white px-3 py-2 text-sm outline-none ring-teal-700/50 focus:ring"
                >
                  <option value="5">5 - Excellent</option>
                  <option value="4">4 - Very good</option>
                  <option value="3">3 - Good</option>
                  <option value="2">2 - Fair</option>
                  <option value="1">1 - Poor</option>
                </select>
              </label>

              <label className="grid gap-1 text-sm font-medium text-slate-700">
                Review
                <textarea
                  name="comment"
                  required
                  rows={4}
                  className="rounded-xl border border-teal-900/20 bg-white px-3 py-2 text-sm outline-none ring-teal-700/50 focus:ring"
                />
              </label>

              <button
                type="submit"
                className="mt-1 w-fit rounded-full bg-[var(--teal-900)] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[var(--teal-700)]"
              >
                Submit Review
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}