import Link from "next/link";
import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { getFaqs } from "@/lib/faq";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Jupiter Dining FAQ",
  description:
    "Answers to common questions about dining in Jupiter, FL and nearby Tequesta, Juno Beach, and Palm Beach Gardens.",
  alternates: { canonical: `${SITE_URL}/faq` },
};

export default function FaqPage() {
  const faqs = getFaqs();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="page-shell min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />

      <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
        <section className="glass-card rounded-3xl p-6 sm:p-8">
          <h1 className="display-title text-4xl text-teal-900 sm:text-5xl">Jupiter Dining FAQ</h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
            Common questions about eating out in Jupiter, FL and the surrounding coastal towns -
            Tequesta, Juno Beach, and Palm Beach Gardens.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.slug} className="glass-card rounded-2xl p-5 sm:p-6">
              <h2 className="display-title text-2xl text-teal-900">{faq.question}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">{faq.answer}</p>
              {faq.linkHref && faq.linkLabel && (
                <Link
                  href={faq.linkHref}
                  className="mt-3 inline-flex text-sm font-semibold text-teal-900 underline-offset-4 hover:underline"
                >
                  {faq.linkLabel}
                </Link>
              )}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
