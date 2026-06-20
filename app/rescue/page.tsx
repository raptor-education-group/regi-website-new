import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../lib/site-config";

export const metadata: Metadata = {
  title: "Found an Injured Raptor?",
  alternates: { canonical: "/rescue" },
  openGraph: { title: "Found an Injured Raptor?" },
  twitter: { title: "Found an Injured Raptor?" },
  description:
    "Immediate guidance for safely containing and transporting an injured eagle, hawk, owl, or other raptor to licensed care.",
};

const rescueSteps = [
  {
    number: "01",
    title: "Cover the bird",
    image: "/images/rescue-step-1.png",
    text: "Approach calmly from behind when possible. Completely cover the bird with a towel, blanket, jacket, or other lightweight item. Keep dogs and crowds away.",
  },
  {
    number: "02",
    title: "Secure the talons",
    image: "/images/rescue-step-2.jpg",
    text: "A raptor's feet are its primary defense. Keep the legs and talons covered, gather the wings naturally against the body, and hold both legs high near the body.",
  },
  {
    number: "03",
    title: "Box and transport",
    image: "/images/rescue-step-3.png",
    text: "Place the bird in a ventilated cardboard box lined with a towel. Keep it quiet, dark, and warm. Never use a wire cage, car trunk, or open pickup bed.",
  },
];

export default function RescuePage() {
  return (
    <main id="main-content">
      <section className="rescue-page-hero">
        <div className="shell rescue-page-hero-grid">
          <div>
            <p className="eyebrow eyebrow-light">Bird emergency</p>
            <h1>Found an injured raptor?</h1>
            <p>
              Your first job is to keep yourself safe and reduce the bird&apos;s
              stress. Call REGI before transport whenever possible.
            </p>
          </div>
          <a className="emergency-phone" href={siteConfig.clinic.phoneHref}>
            <span>Clinic · {siteConfig.clinic.hours}</span>
            {siteConfig.clinic.phone}
            <small>Tap to call now</small>
          </a>
        </div>
      </section>

      <section className="rescue-warning">
        <div className="shell rescue-warning-grid">
          <strong>Before you move closer</strong>
          <p>
            Raptors have extremely sharp, powerful talons. If you do not feel
            confident containing the bird, keep people and pets away, note the
            location, and call REGI for guidance or volunteer transport help.
          </p>
        </div>
      </section>

      <section className="rescue-baby-bird-link">
        <div className="shell rescue-warning-grid">
          <strong>Is this a young bird?</strong>
          <p>Many feathered fledglings on the ground are still being cared for by their parents. <Link href="/rescue/baby-birds">Check the baby-bird guide before intervening →</Link></p>
        </div>
      </section>

      <section className="section rescue-guide-section" id="safe-recovery">
        <div className="shell rescue-guide-heading">
          <p className="eyebrow">Safe recovery guide</p>
          <h2>Three careful steps can prevent further injury.</h2>
        </div>
        <div className="shell rescue-guide-list">
          {rescueSteps.map((step) => (
            <article key={step.number}>
              <div className="rescue-guide-image">
                <Image src={step.image} alt={`Step ${step.number}: ${step.title}`} fill sizes="(max-width: 800px) 100vw, 40vw" />
              </div>
              <div className="rescue-guide-copy">
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section rescue-details-section">
        <div className="shell rescue-detail-grid">
          <article>
            <p className="eyebrow eyebrow-light">While you wait</p>
            <h2>Quiet. Dark. Warm.</h2>
            <p>
              Do not offer food or water. Keep the closed box in a safe,
              temperature-controlled room away from children, pets, music, and
              unnecessary handling until REGI responds.
            </p>
          </article>
          <article>
            <p className="eyebrow eyebrow-light">Remember the location</p>
            <h2>Release starts here.</h2>
            <p>
              Record exactly where the bird was found. REGI needs that
              geographic information to return a recovered bird to its home
              territory when it is ready for release.
            </p>
          </article>
        </div>
      </section>

      <section className="section legal-note-section">
        <div className="shell legal-note-grid">
          <div>
            <p className="eyebrow">Legal &amp; licensed care</p>
            <h2>Rescue is legal. Keeping the bird is not.</h2>
          </div>
          <div>
            <p className="page-lead">
              Federal and Wisconsin law allow a person to rescue and
              immediately transport a bird of prey to a licensed rehabilitator.
            </p>
            <p>
              It is illegal to possess or keep a raptor or other protected
              native bird. REGI is licensed by the U.S. Fish and Wildlife
              Service and Wisconsin Department of Natural Resources to provide
              specialized rehabilitation.
            </p>
            <a className="button" href={siteConfig.clinic.phoneHref}>Call REGI now</a>
          </div>
        </div>
      </section>
    </main>
  );
}
