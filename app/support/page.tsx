import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support REGI",
  description:
    "Donate, volunteer, or give supplies to support independent wildlife rehabilitation and education at REGI.",
};

const wishlist = [
  "New or used blankets, sheets, pillowcases, and towels",
  "Unscented dish soap, laundry detergent, paper products, and trash bags",
  "Bird seed, suet blocks, dried mealworms, fresh produce, and nuts",
  "Pet bowls, puzzle feeders, plastic travel kennels, and storage bins",
  "Clamp lights, heat bulbs, heat pads, tarps, and heavy-duty zip ties",
  "Amazon, Fleet Farm, and RodentPro gift cards",
];

export default function SupportPage() {
  return (
    <main id="main-content">
      <section className="support-page-hero">
        <div className="support-page-hero-image">
          <Image src="/images/volunteers.jpg" alt="REGI volunteers working together to support wildlife care" fill priority sizes="100vw" />
        </div>
        <div className="shell support-page-hero-copy">
          <p className="eyebrow eyebrow-light">Support REGI</p>
          <h1>Every release has a community behind it.</h1>
          <p>
            REGI receives no state or federal operating support. Gifts of money,
            time, and supplies keep specialized care available every day of the
            year.
          </p>
          <a className="button button-cream" href="https://app.giveforms.com/forms/raptoreducationgroup/default-giveform?gf-type=popup">Donate securely <span>↗</span></a>
        </div>
      </section>

      <section className="section giving-section">
        <div className="shell page-intro-grid">
          <div><p className="eyebrow">Choose your way to help</p><h2>Care takes many forms.</h2></div>
          <div><p className="page-lead">Food. Medicine. Heat. Transportation. Expert time. Every patient&apos;s recovery depends on hundreds of practical things coming together.</p></div>
        </div>
        <div className="shell giving-grid">
          <article><span>01</span><h3>Give online</h3><p>Use REGI&apos;s trusted GiveForms donation page for a secure, tax-deductible monetary gift.</p><a className="text-link" href="https://app.giveforms.com/forms/raptoreducationgroup/default-giveform?gf-type=popup">Open donation page <span>↗</span></a></article>
          <article><span>02</span><h3>Mail a check</h3><p>Make checks payable to “Raptor Education Group, Inc.” and mail them to:</p><address>REGI · PO Box 481<br />Antigo, WI 54409</address></article>
          <article><span>03</span><h3>Feed a patient</h3><p>Give directly through REGI&apos;s RodentPro charity page or purchase useful items from its Amazon wish list.</p><div className="giving-actions"><a className="text-link" href="https://rodentpro.com/Charities/DonateToCharity/raptor-education-group">Feed a bird <span>↗</span></a><a className="text-link" href="https://www.amazon.com/hz/wishlist/ls/LYOEKD0XEOUI?ref_=wl_share">Amazon wish list <span>↗</span></a></div></article>
          <article><span>04</span><h3>Adopt an ambassador</h3><p>Choose one of REGI&apos;s 15 permanent education birds for a one-time symbolic adoption and a mailed keepsake packet.</p><div className="giving-actions"><Link className="text-link" href="/adopt-a-bird">Choose a bird <span>→</span></Link><Link className="text-link" href="/ambassadors">Meet the ambassadors <span>→</span></Link></div></article>
        </div>
      </section>

      <section className="section wishlist-section">
        <div className="shell wishlist-grid">
          <div>
            <p className="eyebrow eyebrow-light">Wish list</p>
            <h2>The everyday things that make care possible.</h2>
            <p>New and gently used supplies are welcome. Please do not donate pillows, onions, or avocados.</p>
          </div>
          <ul>{wishlist.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="section volunteer-section" id="volunteer">
        <div className="shell volunteer-grid">
          <div className="volunteer-image"><Image src="/images/rehabilitation.jpg" alt="Hands-on wildlife care at REGI" fill sizes="(max-width: 800px) 100vw, 48vw" /></div>
          <div>
            <p className="eyebrow">Give your time</p>
            <h2>Put your hands behind the mission.</h2>
            <p className="page-lead">Volunteers help a small staff sustain a very large mission—from facility work and transport to the practical routines that keep patients safe.</p>
            <p>Volunteer needs and requirements can change with the season. Visit REGI&apos;s current application page for available roles and next steps.</p>
            <Link className="button" href="/make-a-difference#volunteer">Apply to volunteer <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="shell page-cta-grid">
          <p className="eyebrow eyebrow-light">Thank you</p>
          <h2>You are part of helping wildlife become wild once more.</h2>
          <div><a className="button button-cream" href="https://app.giveforms.com/forms/raptoreducationgroup/default-giveform?gf-type=popup">Make a donation</a><p>All monetary donations are tax-deductible.</p></div>
        </div>
      </section>
    </main>
  );
}
