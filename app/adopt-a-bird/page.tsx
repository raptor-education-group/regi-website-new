import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ambassadors } from "../data/ambassadors";

export const metadata: Metadata = {
  title: "Adopt a Bird",
  alternates: { canonical: "/adopt-a-bird" },
  openGraph: { title: "Adopt a Bird" },
  twitter: { title: "Adopt a Bird" },
  description:
    "Symbolically adopt one of REGI's non-releasable Avian Ambassadors and directly support their food, housing, enrichment, and medical care.",
};

export default function AdoptABirdPage() {
  return (
    <main id="main-content">
      <section className="adoption-hero">
        <div className="shell adoption-hero-grid">
          <div>
            <p className="eyebrow eyebrow-light">Symbolic adoption</p>
            <h1>Put your name behind an ambassador.</h1>
            <p>Choose one of REGI&apos;s permanent Avian Ambassadors and make a one-time gift toward the food, housing, enrichment, and medical care that supports their work.</p>
            <Link className="button button-cream" href="/shop/symbolic-adoption">Choose your bird <span>→</span></Link>
          </div>
          <div className="adoption-hero-image">
            <Image src="/images/shop/symbolic-adoption.webp" alt="REGI symbolic adoption certificate, bird photo, and biography" fill priority sizes="(max-width: 900px) 100vw, 48vw" />
          </div>
        </div>
      </section>

      <section className="section adoption-includes-section">
        <div className="shell page-intro-grid">
          <div><p className="eyebrow">What symbolic means</p><h2>A connection, not ownership.</h2></div>
          <div>
            <p className="page-lead">Your chosen bird stays at REGI, where licensed staff provide lifelong care and the ambassador continues helping people learn about native wildlife.</p>
            <p>The $50 adoption is a one-time contribution, not an exclusive sponsorship. It recognizes your connection to one ambassador while helping sustain excellent care across the education team.</p>
          </div>
        </div>
        <div className="shell adoption-includes-grid">
          <article><span>01 · Choose</span><h3>Meet your bird</h3><p>Browse all 15 ambassadors and choose the individual whose story, species, or personality speaks to you.</p></article>
          <article><span>02 · Support</span><h3>Fund daily care</h3><p>Your gift helps provide species-appropriate food, safe housing, enrichment, and veterinary care.</p></article>
          <article><span>03 · Receive</span><h3>Open their story</h3><p>REGI mails a signed certificate, professional portrait, and biography of your chosen ambassador.</p></article>
        </div>
      </section>

      <section className="section adoption-roster-section">
        <div className="shell adoption-roster-heading">
          <div>
            <p className="eyebrow eyebrow-light">Choose an ambassador</p>
            <h2>Fifteen birds. Fifteen reasons to care.</h2>
          </div>
          <div>
            <p>Every ambassador is a non-releasable individual approved for education work. Meet their story or begin an adoption directly from any portrait—no hunting through another page.</p>
            <Link className="text-link text-link-light" href="/ambassadors">Read all ambassador stories <span>→</span></Link>
          </div>
        </div>
        <div className="shell adoption-portrait-grid">
          {ambassadors.map((bird, index) => (
            <article className="adoption-bird-card" key={bird.name}>
              <Link
                className="adoption-bird-image"
                href={`/shop/symbolic-adoption#choose-${bird.slug}`}
                aria-label={`Begin a symbolic adoption of ${bird.name}`}
              >
                <Image
                  src={bird.image}
                  alt={`${bird.name}, ${bird.species} Avian Ambassador`}
                  fill
                  sizes="(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 20vw"
                />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </Link>
              <div>
                <h3>{bird.name}</h3>
                <p>{bird.species}</p>
                <div className="adoption-bird-actions">
                  <Link href={`/ambassadors#bird-${bird.slug}`}>Learn more</Link>
                  <Link href={`/shop/symbolic-adoption#choose-${bird.slug}`}>Adopt <span>→</span></Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-cta">
        <div className="shell page-cta-grid">
          <p className="eyebrow eyebrow-light">$50 symbolic adoption</p>
          <h2>Turn admiration into excellent daily care.</h2>
          <div><Link className="button button-cream" href="/shop/symbolic-adoption">Choose an ambassador</Link><p>One-time symbolic gift · Mailed keepsake packet · The bird remains in REGI&apos;s care.</p></div>
        </div>
      </section>
    </main>
  );
}
