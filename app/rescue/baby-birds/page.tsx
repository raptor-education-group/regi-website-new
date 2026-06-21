import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "../../lib/site-config";

export const metadata: Metadata = {
  title: "Found a Baby Bird?",
  description:
    "How to tell whether a baby bird needs help, when to reunite it with its parents, and when to call REGI.",
  alternates: { canonical: "/rescue/baby-birds" },
};

const situations = [
  {
    title: "Nestling",
    label: "Few feathers · cannot hop",
    text: "A nestling normally belongs in its nest. If the bird is warm, alert, and uninjured, return it to the original nest when you can do so safely. Human scent will not cause the parents to reject it.",
  },
  {
    title: "Fledgling",
    label: "Feathered · hopping or fluttering",
    text: "A fledgling often spends several days on the ground while its parents feed it and teach it to fly. Keep people and pets away and watch quietly from a distance unless the bird is injured or in immediate danger.",
  },
  {
    title: "Needs help now",
    label: "Injured · cold · attacked · orphaned",
    text: "Call REGI if you see bleeding, a drooping wing, weakness, flies or insects, contact with a cat or dog, a confirmed dead parent, or danger that cannot be removed. Cat contact is an emergency even when wounds are hard to see.",
  },
];

export default function BabyBirdsPage() {
  return (
    <main id="main-content">
      <section className="resource-page-hero baby-bird-hero">
        <div className="shell resource-page-hero-grid">
          <p className="eyebrow eyebrow-light">Baby bird help</p>
          <h1>Pause before you rescue.</h1>
          <p>
            Many young birds found on the ground are healthy fledglings with
            attentive parents nearby. A few careful observations can keep a
            wild family together.
          </p>
        </div>
      </section>

      <section className="section baby-bird-section">
        <div className="shell baby-bird-intro">
          <div>
            <p className="eyebrow">First, look closely</p>
            <h2>Feathers tell part of the story.</h2>
          </div>
          <p className="page-lead">
            Observe from a distance before intervening. Do not give food or
            water, and do not try these steps with a raptor, heron, crane,
            loon, or any bird that could injure you—call REGI instead.
          </p>
        </div>
        <div className="shell baby-bird-grid">
          {situations.map((situation, index) => (
            <article key={situation.title}>
              <span>0{index + 1}</span>
              <small>{situation.label}</small>
              <h2>{situation.title}</h2>
              <p>{situation.text}</p>
            </article>
          ))}
        </div>
        <aside className="shell baby-bird-reference">
          <div>
            <p className="eyebrow">Age &amp; identification reference</p>
            <h2>Compare carefully. Never feed by guesswork.</h2>
          </div>
          <div>
            <p>
              Veterinarian Ronald Hines publishes external growth charts for
              baby North American songbirds. Use them as a visual reference
              only, then call REGI before feeding, treating, or relocating a bird.
            </p>
            <a
              className="text-link"
              href="https://vetspace.2ndchance.info/growth-charts-for-baby-north-american-song-birds/"
              rel="noreferrer"
              target="_blank"
            >
              View the external growth charts <span aria-hidden="true">↗</span>
            </a>
          </div>
        </aside>
      </section>

      <section className="rescue-warning">
        <div className="shell rescue-warning-grid">
          <strong>Keep cats and dogs away</strong>
          <p>
            Move pets indoors and give the parents room to return. If a cat has
            touched the bird, call REGI immediately; bacteria can cause a fatal
            infection even without an obvious puncture wound.
          </p>
        </div>
      </section>

      <section className="section baby-bird-callout">
        <div className="shell baby-bird-callout-grid">
          <div>
            <p className="eyebrow">Still uncertain?</p>
            <h2>Call before moving the bird.</h2>
            <p>
              Be ready to describe the bird, its condition, the exact location,
              and what you have observed. A photo can help REGI staff determine
              the safest next step.
            </p>
          </div>
          <div>
            <a className="emergency-phone" href={siteConfig.clinic.phoneHref}>
              <span>Clinic · {siteConfig.clinic.hours}</span>
              {siteConfig.clinic.phone}
              <small>Tap to call now</small>
            </a>
            <Link className="text-link" href="/rescue">
              Injured raptor guidance <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
