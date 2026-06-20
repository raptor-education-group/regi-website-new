import type { Metadata } from "next";
import { siteConfig } from "../lib/site-config";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "REGI's commitment to an accessible website and how to request help.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <main id="main-content">
      <section className="policy-hero"><div className="shell"><p className="eyebrow eyebrow-light">Access for everyone</p><h1>Accessibility</h1><p>REGI wants wildlife information, emergency guidance, and opportunities to participate to be available to everyone.</p></div></section>
      <section className="section policy-section"><div className="shell policy-copy">
        <h2>Our approach</h2>
        <p>We work to provide keyboard-friendly navigation, meaningful headings and alternative text, readable contrast, reduced-motion support, and content that adapts to phones, tablets, and larger screens.</p>
        <h2>Third-party content</h2>
        <p>Some purchases, donations, registrations, and downloadable documents are provided through other services. REGI will work to offer a reasonable alternative when one of those services or files creates a barrier.</p>
        <h2>Tell us what is not working</h2>
        <p>If you encounter an accessibility problem, email <a href={`mailto:${siteConfig.education.email}?subject=Website%20accessibility`}>{siteConfig.education.email}</a> or call <a href={siteConfig.education.phoneHref}>{siteConfig.education.phone}</a>. Include the page, the task you were trying to complete, and the technology you were using when possible.</p>
        <p><small>Last reviewed June 20, 2026.</small></p>
      </div></section>
    </main>
  );
}
