import { SiteHeader } from "@/components/site-header";

export default function PrivacyPage() {
  return (
    <div className="page-shell min-h-screen">
      <SiteHeader />

      <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
        <section className="glass-card rounded-3xl p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Privacy
          </p>
          <h1 className="display-title mt-3 text-4xl text-teal-900 sm:text-5xl">
            Jupeater Privacy Notice
          </h1>

          <div className="mt-6 space-y-5 text-sm leading-relaxed text-slate-700 sm:text-base">
            <p>
              Jupeater collects only the data needed to operate listing submissions,
              moderated reviews, and newsletter preferences.
            </p>

            <p>
              If you submit a listing update or a review, we store the contact details
              and content you provide to support moderation and quality control.
            </p>

            <p>
              We use this data only for site operations and do not sell personal
              information. You can request deletion or correction by contacting us.
            </p>

            <p>
              This page is an MVP placeholder and should be reviewed by legal counsel
              before public launch.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}