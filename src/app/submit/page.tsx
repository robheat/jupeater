import { SiteHeader } from "@/components/site-header";
import { submitRestaurantListing } from "@/app/submit/actions";

type SubmitPageProps = {
  searchParams: Promise<{ status?: string; message?: string }>;
};

export default async function SubmitPage({ searchParams }: SubmitPageProps) {
  const params = await searchParams;

  return (
    <div className="page-shell min-h-screen">
      <SiteHeader />

      <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
        <section className="glass-card rounded-3xl p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Owner Tools
          </p>
          <h1 className="display-title mt-3 text-4xl text-teal-900 sm:text-5xl">
            Submit or update a Jupiter restaurant listing
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
            This UI is now wired and will be connected next to a moderated backend workflow.
            Submissions remain visible to admins only until approved.
          </p>

          {params.status === "success" && (
            <p className="mt-5 rounded-xl border border-emerald-300 bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
              Your submission was received and is pending moderation.
            </p>
          )}

          {params.status === "error" && (
            <p className="mt-5 rounded-xl border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">
              {params.message ?? "Unable to submit right now. Please try again."}
            </p>
          )}

          <form action={submitRestaurantListing} className="mt-8 grid gap-4">
            <label className="grid gap-1 text-sm font-medium text-slate-700">
              Restaurant name
              <input
                name="restaurantName"
                placeholder="Your restaurant name"
                required
                className="rounded-xl border border-teal-900/20 bg-white px-3 py-2 text-sm outline-none ring-teal-700/50 focus:ring"
              />
            </label>

            <label className="grid gap-1 text-sm font-medium text-slate-700">
              Contact email
              <input
                name="contactEmail"
                type="email"
                placeholder="owner@example.com"
                required
                className="rounded-xl border border-teal-900/20 bg-white px-3 py-2 text-sm outline-none ring-teal-700/50 focus:ring"
              />
            </label>

            <label className="grid gap-1 text-sm font-medium text-slate-700">
              Address
              <input
                name="address"
                placeholder="Street address in Jupiter, FL"
                required
                className="rounded-xl border border-teal-900/20 bg-white px-3 py-2 text-sm outline-none ring-teal-700/50 focus:ring"
              />
            </label>

            <label className="grid gap-1 text-sm font-medium text-slate-700">
              What changed?
              <textarea
                name="changeNotes"
                rows={5}
                placeholder="Share updates to hours, menu style, photos, or contact details."
                required
                className="rounded-xl border border-teal-900/20 bg-white px-3 py-2 text-sm outline-none ring-teal-700/50 focus:ring"
              />
            </label>

            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input
                type="checkbox"
                name="newsletterOptIn"
                className="h-4 w-4 rounded border-teal-900/25"
              />
              Keep me on the Jupeater newsletter for listing updates and local dining spotlights.
            </label>

            <button
              type="submit"
              className="mt-2 w-fit rounded-full bg-[var(--teal-900)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--teal-700)]"
            >
              Submit for Review
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}