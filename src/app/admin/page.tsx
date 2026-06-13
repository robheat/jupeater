import {
  adminSignIn,
  adminSignOut,
  moderateReviewAction,
  moderateSubmissionAction,
} from "@/app/admin/actions";
import { SiteHeader } from "@/components/site-header";
import { getPendingOwnerSubmissions, getPendingReviews } from "@/lib/backend";
import { isAdminAuthenticated, isAdminConfigured } from "@/lib/admin-auth";
import { isSupabaseConfigured } from "@/lib/supabase";

type AdminPageProps = {
  searchParams: Promise<{ status?: string; message?: string }>;
};

export default async function AdminPage({ searchParams }: AdminPageProps) {
  const params = await searchParams;
  const authed = await isAdminAuthenticated();
  const adminConfigured = isAdminConfigured();
  const supabaseConfigured = isSupabaseConfigured();

  const pendingSubmissions = authed ? await getPendingOwnerSubmissions() : [];
  const pendingReviews = authed ? await getPendingReviews() : [];

  return (
    <div className="page-shell min-h-screen">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <section className="glass-card rounded-3xl p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Admin</p>
          <h1 className="display-title mt-3 text-4xl text-teal-900 sm:text-5xl">
            Moderation Dashboard
          </h1>

          {params.status === "success" && (
            <p className="mt-4 rounded-xl border border-emerald-300 bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
              {params.message ?? "Action completed."}
            </p>
          )}

          {params.status === "error" && (
            <p className="mt-4 rounded-xl border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">
              {params.message ?? "Something went wrong."}
            </p>
          )}

          {!adminConfigured && (
            <p className="mt-4 rounded-xl border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-800">
              Configure ADMIN_DASHBOARD_PASSWORD and ADMIN_SESSION_SALT to enable admin login.
            </p>
          )}

          {!supabaseConfigured && (
            <p className="mt-4 rounded-xl border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-800">
              Configure Supabase environment variables to enable moderation queries.
            </p>
          )}

          {!authed ? (
            <form action={adminSignIn} className="mt-6 grid max-w-md gap-3">
              <label className="grid gap-1 text-sm font-medium text-slate-700">
                Admin password
                <input
                  type="password"
                  name="password"
                  required
                  className="rounded-xl border border-teal-900/20 bg-white px-3 py-2 text-sm outline-none ring-teal-700/50 focus:ring"
                />
              </label>
              <button
                type="submit"
                className="w-fit rounded-full bg-[var(--teal-900)] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[var(--teal-700)]"
              >
                Sign in
              </button>
            </form>
          ) : (
            <form action={adminSignOut} className="mt-6">
              <button
                type="submit"
                className="rounded-full border border-teal-900/25 bg-white px-4 py-2 text-sm font-semibold text-teal-900"
              >
                Sign out
              </button>
            </form>
          )}
        </section>

        {authed && (
          <>
            <section className="mt-8">
              <h2 className="display-title text-3xl text-teal-900">Pending Owner Submissions</h2>
              <div className="mt-4 grid gap-4">
                {pendingSubmissions.length === 0 && (
                  <div className="glass-card rounded-2xl p-4 text-sm text-slate-700">
                    No pending owner submissions.
                  </div>
                )}

                {pendingSubmissions.map((submission) => (
                  <article key={submission.id} className="glass-card rounded-2xl p-4">
                    <p className="display-title text-2xl text-teal-900">{submission.restaurant_name}</p>
                    <p className="mt-1 text-sm text-slate-700">{submission.address}</p>
                    <p className="mt-1 text-sm text-slate-700">{submission.contact_email}</p>
                    <p className="mt-3 text-sm text-slate-700">{submission.change_notes}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <form action={moderateSubmissionAction}>
                        <input type="hidden" name="id" value={submission.id} />
                        <input type="hidden" name="decision" value="approved" />
                        <button
                          type="submit"
                          className="rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white"
                        >
                          Approve
                        </button>
                      </form>

                      <form action={moderateSubmissionAction}>
                        <input type="hidden" name="id" value={submission.id} />
                        <input type="hidden" name="decision" value="rejected" />
                        <button
                          type="submit"
                          className="rounded-full bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white"
                        >
                          Reject
                        </button>
                      </form>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-8 pb-10">
              <h2 className="display-title text-3xl text-teal-900">Pending Reviews</h2>
              <div className="mt-4 grid gap-4">
                {pendingReviews.length === 0 && (
                  <div className="glass-card rounded-2xl p-4 text-sm text-slate-700">
                    No pending reviews.
                  </div>
                )}

                {pendingReviews.map((review) => (
                  <article key={review.id} className="glass-card rounded-2xl p-4">
                    <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
                      {review.restaurant_slug}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-teal-900">
                      {review.reviewer_name} · {review.reviewer_email}
                    </p>
                    <p className="mt-1 text-sm text-slate-700">{"★".repeat(review.rating)}</p>
                    <p className="mt-2 text-sm text-slate-700">{review.comment}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <form action={moderateReviewAction}>
                        <input type="hidden" name="id" value={review.id} />
                        <input type="hidden" name="decision" value="approved" />
                        <button
                          type="submit"
                          className="rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white"
                        >
                          Approve
                        </button>
                      </form>

                      <form action={moderateReviewAction}>
                        <input type="hidden" name="id" value={review.id} />
                        <input type="hidden" name="decision" value="rejected" />
                        <button
                          type="submit"
                          className="rounded-full bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white"
                        >
                          Reject
                        </button>
                      </form>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}