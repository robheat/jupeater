import Link from "next/link";

import { submitContactMessage } from "@/app/contact/actions";
import { SiteHeader } from "@/components/site-header";

type ContactPageProps = {
  searchParams: Promise<{ status?: string; message?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;

  return (
    <div className="page-shell min-h-screen">
      <SiteHeader />

      <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
        <section className="glass-card rounded-3xl p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Contact
          </p>
          <h1 className="display-title mt-3 text-4xl text-teal-900 sm:text-5xl">
            Get in Touch
          </h1>

          <div className="mt-6 space-y-5 text-sm leading-relaxed text-slate-700 sm:text-base">
            <p>
              For listing corrections, partnership requests, or support,
              email support@jupeater.com.
            </p>

            <p>
              Or use the form below and we will route your message to the right team.
            </p>

            {params.status === "success" && (
              <p className="rounded-xl border border-emerald-300 bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
                Your message was sent successfully.
              </p>
            )}

            {params.status === "error" && (
              <p className="rounded-xl border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">
                {params.message ?? "Unable to send your message right now."}
              </p>
            )}

            <form action={submitContactMessage} className="grid gap-3 rounded-2xl border border-teal-900/15 bg-white/80 p-4">
              <label className="grid gap-1 text-sm font-medium text-slate-700">
                Name
                <input
                  name="name"
                  required
                  className="rounded-xl border border-teal-900/20 bg-white px-3 py-2 text-sm outline-none ring-teal-700/50 focus:ring"
                />
              </label>

              <label className="grid gap-1 text-sm font-medium text-slate-700">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  className="rounded-xl border border-teal-900/20 bg-white px-3 py-2 text-sm outline-none ring-teal-700/50 focus:ring"
                />
              </label>

              <label className="grid gap-1 text-sm font-medium text-slate-700">
                Topic
                <input
                  name="topic"
                  required
                  placeholder="Partnership, listing correction, support"
                  className="rounded-xl border border-teal-900/20 bg-white px-3 py-2 text-sm outline-none ring-teal-700/50 focus:ring"
                />
              </label>

              <label className="grid gap-1 text-sm font-medium text-slate-700">
                Message
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="rounded-xl border border-teal-900/20 bg-white px-3 py-2 text-sm outline-none ring-teal-700/50 focus:ring"
                />
              </label>

              <button
                type="submit"
                className="w-fit rounded-full bg-[var(--teal-900)] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[var(--teal-700)]"
              >
                Send Message
              </button>
            </form>

            <p>
              Restaurant owners can also submit updates directly through the
              listing form.
            </p>

            <p>
              <Link href="/submit" className="font-semibold text-teal-900 underline-offset-4 hover:underline">
                Open the submit form
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}