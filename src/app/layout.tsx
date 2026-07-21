import type { Metadata } from "next";
import { Cormorant_Garamond, Sora } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sansFont = Sora({
  variable: "--font-sans",
  subsets: ["latin"],
});

const defaultTitle = `${SITE_NAME} | Jupiter Dining Guide`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: defaultTitle,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${sansFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
