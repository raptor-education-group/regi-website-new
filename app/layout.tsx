import type { Metadata } from "next";
import { ViewTransition } from "react";
import { ScrollReveal } from "./components/scroll-reveal";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Raptor Education Group, Inc. | Rehabilitate. Educate. Release.",
    template: "%s | Raptor Education Group",
  },
  description:
    "Raptor Education Group, Inc. is an Antigo, Wisconsin nonprofit rehabilitating native birds and connecting people with wildlife through education.",
  keywords: [
    "Raptor Education Group",
    "wildlife rehabilitation Wisconsin",
    "raptor education",
    "Antigo Wisconsin",
    "injured bird help",
  ],
  openGraph: {
    title: "Raptor Education Group, Inc.",
    description: "Helping wildlife become wild once more since 1990.",
    type: "website",
    images: [
      {
        url: "/images/eagle-release.jpg",
        width: 1920,
        height: 1280,
        alt: "A rehabilitated bald eagle returns to the wild",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <ScrollReveal />
        <ViewTransition name="route-content" default="route-soften">
          {children}
        </ViewTransition>
        <SiteFooter />
      </body>
    </html>
  );
}
