import type { Metadata } from "next";
import { ViewTransition } from "react";
import { ScrollReveal } from "./components/scroll-reveal";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { NewsletterModal } from "./components/newsletter-modal";
import { absoluteUrl, allowIndexing, siteConfig } from "./lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Raptor Education Group, Inc. | Rehabilitate. Educate. Release.",
    template: "%s | Raptor Education Group",
  },
  description: siteConfig.description,
  keywords: [
    "Raptor Education Group",
    "wildlife rehabilitation Wisconsin",
    "raptor education",
    "Antigo Wisconsin",
    "injured bird help",
    "injured songbird help",
  ],
  openGraph: {
    title: "Raptor Education Group, Inc.",
    description: "Helping wildlife become wild once more since 1990.",
    type: "website",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/eagle-release.jpg",
        width: 1920,
        height: 1280,
        alt: "A rehabilitated bald eagle returns to the wild",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raptor Education Group, Inc.",
    description: "Helping wildlife become wild once more since 1990.",
    images: ["/images/eagle-release.jpg"],
  },
  robots: allowIndexing
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
  category: "nonprofit wildlife rehabilitation",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  logo: absoluteUrl("/images/regi-logo.png"),
  description: siteConfig.description,
  telephone: siteConfig.clinic.phone,
  email: siteConfig.education.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <NewsletterModal />
        <ScrollReveal />
        <ViewTransition name="route-content" default="route-soften">
          {children}
        </ViewTransition>
        <SiteFooter />
      </body>
    </html>
  );
}
