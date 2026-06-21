import type { Metadata } from "next";
import Link from "next/link";
import { navigationGroups } from "../lib/navigation";

export const metadata: Metadata = {
  title: "Site Map",
  alternates: { canonical: "/site-map" },
  description: "Browse every major section of the Raptor Education Group website.",
};

export default function SiteMapPage() {
  return (
    <main id="main-content">
      <section className="site-map-hero">
        <div className="shell site-map-hero-grid">
          <div>
            <p className="eyebrow">Explore REGI</p>
            <h1>Site map.</h1>
          </div>
          <div className="site-map-hero-intro">
            <strong>Looking for something specific?</strong>
            <p>
              Browse every major section of the REGI website, from urgent bird
              assistance and education programs to visits, resources, and ways
              to support the work.
            </p>
          </div>
        </div>
      </section>

      <section className="section site-map-section">
        <div className="shell site-map-grid">
          {navigationGroups.map((group, index) => (
            <section key={group.label}>
              <div className="site-map-group-heading">
                <span>0{index + 1}</span>
                <h2><Link href={group.href}>{group.label}</Link></h2>
              </div>
              <nav aria-label={`${group.label} pages`}>
                {group.items.map((item) => (
                  <Link href={item.href} key={item.href + item.label}>
                    <span>{item.label}</span><i aria-hidden="true">→</i>
                  </Link>
                ))}
              </nav>
            </section>
          ))}
        </div>
        <div className="shell site-map-utility-wrap">
          <p>Helpful links</p>
          <div className="site-map-utility">
            <Link href="/contact">Contact REGI</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/accessibility">Accessibility</Link>
            <Link href="/cart">Cart</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
