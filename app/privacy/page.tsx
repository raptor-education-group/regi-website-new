import type { Metadata } from "next";
import { siteConfig } from "../lib/site-config";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How the REGI website handles information and third-party services.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main id="main-content">
      <section className="policy-hero"><div className="shell"><p className="eyebrow eyebrow-light">Website information</p><h1>Privacy</h1><p>A plain-language overview of this website and the services it connects to.</p></div></section>
      <section className="section policy-section"><div className="shell policy-copy">
        <h2>Information you choose to share</h2>
        <p>This website uses telephone and email links to help you contact REGI. Information you send by telephone or email is handled by REGI and the service providers you use to communicate.</p>
        <h2>Donations, purchases, and registrations</h2>
        <p>Donation, store, newsletter, and registration links may take you to a third-party service. That provider processes the information you submit under its own privacy practices. REGI does not receive payment-card details through this website.</p>
        <h2>Technical information</h2>
        <p>The website host may process routine request information needed to deliver and protect the site. If REGI adds audience measurement in the future, this statement should be updated to identify the service and its purpose.</p>
        <h2>Questions</h2>
        <p>Email <a href={`mailto:${siteConfig.education.email}`}>{siteConfig.education.email}</a> with privacy questions or requests concerning information shared with REGI.</p>
        <p><small>Last reviewed June 20, 2026. REGI should review this statement whenever forms, analytics, or service providers change.</small></p>
      </div></section>
    </main>
  );
}
