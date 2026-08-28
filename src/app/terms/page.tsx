import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of Jupeater's restaurant listings, reviews, and submissions.",
};

export default function TermsPage() {
  return (
    <div className="page-shell min-h-screen">
      <SiteHeader />

      <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
        <section className="glass-card rounded-3xl p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Terms of Service
          </p>
          <h1 className="display-title mt-3 text-4xl text-teal-900 sm:text-5xl">
            Jupeater Terms of Service
          </h1>

          <div className="mt-6 space-y-5 text-sm leading-relaxed text-slate-700 sm:text-base">
            <p>
              By using Jupeater, you agree to these terms. If you do not agree, please
              do not use the site.
            </p>

            <p>
              <strong className="text-teal-900">Listing accuracy.</strong> Jupeater is a
              local dining directory. Restaurant details - hours, menus, pricing, and
              availability - are compiled from public sources and owner submissions and
              can change without notice. Always confirm hours and details directly with
              a restaurant, especially around holidays, before visiting.
            </p>

            <p>
              <strong className="text-teal-900">User-submitted content.</strong> If you
              submit a listing correction, a review, or a contact form message, you are
              responsible for the accuracy of what you submit. We may edit, decline, or
              remove submitted content, including reviews, at our discretion, and may
              moderate content before it is published.
            </p>

            <p>
              <strong className="text-teal-900">No endorsement or affiliation.</strong>{" "}
              Inclusion of a restaurant on Jupeater is not an endorsement, and Jupeater
              is not affiliated with the restaurants listed unless stated otherwise. We
              are not responsible for the quality of food, service, or any transaction
              between you and a listed restaurant.
            </p>

            <p>
              <strong className="text-teal-900">Third-party links.</strong> Jupeater
              links to third-party restaurant websites, map services, and our sister
              site, Jupiter FL 360. We do not control and are not responsible for the
              content, availability, or practices of any third-party site.
            </p>

            <p>
              <strong className="text-teal-900">Intellectual property.</strong> Jupeater's
              own content - site design, original descriptions, and category guides - may
              not be copied or republished without permission. Restaurant names, logos,
              and photos remain the property of their respective owners.
            </p>

            <p>
              <strong className="text-teal-900">Limitation of liability.</strong> Jupeater
              is provided "as is," without warranties of any kind. To the fullest extent
              permitted by law, Jupeater is not liable for any damages arising from your
              use of the site or reliance on listing information.
            </p>

            <p>
              <strong className="text-teal-900">Changes to these terms.</strong> We may
              update these terms as the site evolves. Continued use of Jupeater after a
              change means you accept the updated terms.
            </p>

            <p>
              Questions about these terms can be sent to{" "}
              <a href="mailto:support@jupeater.com" className="font-semibold text-teal-900 underline-offset-4 hover:underline">
                support@jupeater.com
              </a>
              .
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
