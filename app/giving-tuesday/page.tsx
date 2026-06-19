import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GivingTuesday",
  description:
    "Make REGI part of GivingTuesday through a direct gift, wish-list supplies, volunteering, symbolic adoption, or gift shop purchase.",
};

const givingWays = [
  { number: "01", title: "Make a direct gift", text: "Help cover food, medicine, heat, transport, and the skilled time behind every recovery.", href: "https://app.giveforms.com/forms/raptoreducationgroup/default-giveform?gf-type=popup", action: "Donate securely ↗" },
  { number: "02", title: "Send a needed item", text: "Choose supplies REGI has hand-selected for patients, ambassadors, enrichment, and facility care.", href: "https://www.amazon.com/hz/wishlist/ls/LYOEKD0XEOUI?ref_=wl_share", action: "Open the wish list ↗" },
  { number: "03", title: "Give your time", text: "Bring consistency and practical help to transport, maintenance, cleaning, and the work around the work.", href: "/make-a-difference#volunteer", action: "Explore volunteering →" },
  { number: "04", title: "Give a bird story", text: "A symbolic adoption makes a memorable gift while supporting a non-releasable ambassador all year.", href: "/adopt-a-bird", action: "Adopt a bird →" },
];

export default function GivingTuesdayPage() {
  return (
    <main id="main-content">
      <section className="giving-tuesday-hero">
        <div className="giving-tuesday-hero-image"><Image src="/images/eagle-release.jpg" alt="A bald eagle flying free after rehabilitation" fill priority sizes="100vw" /></div>
        <div className="shell giving-tuesday-hero-copy">
          <p className="eyebrow eyebrow-light">December 1, 2026</p>
          <h1>One day built around doing good.</h1>
          <p>GivingTuesday is a worldwide celebration of generosity. At REGI, that generosity becomes medicine, meals, education, rescue miles, and another chance at the wild.</p>
          <a className="button button-cream" href="https://app.giveforms.com/forms/raptoreducationgroup/default-giveform?gf-type=popup">Make a gift <span>↗</span></a>
        </div>
      </section>

      <section className="section giving-impact-section">
        <div className="shell page-intro-grid">
          <div><p className="eyebrow">Why REGI</p><h2>Public support is the operating model.</h2></div>
          <div><p className="page-lead">REGI receives no state or federal operating support. Donations sustain care for roughly 800 to more than 1,000 patients each year and support a hardworking team of Avian Ambassadors.</p></div>
        </div>
      </section>

      <section className="section giving-ways-section">
        <div className="shell giving-ways-grid">
          {givingWays.map((way) => (
            <article key={way.number}>
              <span>{way.number}</span><h2>{way.title}</h2><p>{way.text}</p>
              {way.href.startsWith("http") ? <a className="text-link" href={way.href}>{way.action}</a> : <Link className="text-link" href={way.href}>{way.action}</Link>}
            </article>
          ))}
        </div>
      </section>

      <section className="giving-shop-callout">
        <div className="shell giving-shop-grid">
          <div><p className="eyebrow eyebrow-light">Wear your support</p><h2>The gift shop gives twice.</h2><p>Give someone a little bird joy. Every purchase also sends support back to the birds in REGI&apos;s care.</p><Link className="button button-cream" href="/shop">Shop REGI</Link></div>
          <div className="giving-shop-image"><Image src="/images/shop/night-owls.webp" alt="Night Owls graphic T-shirt" fill sizes="(max-width: 900px) 100vw, 45vw" /></div>
        </div>
      </section>
    </main>
  );
}
