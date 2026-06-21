import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../../lib/site-config";

export const metadata: Metadata = {
  title: "Found an Injured Songbird?",
  description:
    "Safe capture, temporary containment, and transport guidance for injured native songbirds in Wisconsin.",
  alternates: { canonical: "/rescue/songbirds" },
  openGraph: { title: "Found an Injured Songbird?" },
  twitter: { title: "Found an Injured Songbird?" },
};

const transportSteps = [
  {
    number: "01",
    title: "Prepare a small box",
    text: "Use a ventilated cardboard box with a secure lid. Line the bottom with paper towel or a smooth, tightly woven cloth. Avoid wire cages and towels with loose loops that can catch tiny toes.",
  },
  {
    number: "02",
    title: "Cover and gently scoop",
    text: "Dim the room when possible. Place a light cloth over the bird and gently scoop it into the box. Never squeeze the chest—birds must move their breastbone freely to breathe.",
  },
  {
    number: "03",
    title: "Keep quiet, dark, and warm",
    text: "Close the box and place it away from children, pets, music, and activity. Do not offer food, water, medicine, or attempt to clean wounds unless REGI instructs you to do so.",
  },
  {
    number: "04",
    title: "Call before transport",
    text: "Contact REGI with the species if known, condition, exact found location, and cause of injury. Keep the box level and secure inside the temperature-controlled passenger area of your vehicle—not the trunk or an open truck bed.",
  },
];

const urgentSigns = [
  "Any contact with a cat, even when no puncture wound is visible",
  "Bleeding, a drooping wing, inability to stand, or obvious fracture",
  "Closed eyes, labored breathing, weakness, or failure to fly away",
  "Oil, glue, fishing line, netting, or another substance on the feathers",
  "A window strike that does not resolve promptly in a quiet, protected box",
];

export default function SongbirdsPage() {
  return (
    <main id="main-content">
      <section className="songbird-hero">
        <div className="shell songbird-hero-grid">
          <div>
            <p className="eyebrow eyebrow-light">Native bird rescue</p>
            <h1>Found an injured songbird?</h1>
            <p>
              Robins, sparrows, finches, warblers, swallows, and other native
              birds need the same licensed care as larger wildlife—but a much
              gentler approach to capture and transport.
            </p>
            <a className="button button-cream" href={siteConfig.clinic.phoneHref}>
              Call {siteConfig.clinic.phone}
            </a>
          </div>
          <div className="songbird-hero-image">
            <Image
              src="/images/rosie.jpg"
              alt="Rosie, REGI's American Crow avian ambassador"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 42vw"
            />
            <p>Songbirds include more than small backyard birds—crows belong to the same diverse order.</p>
          </div>
        </div>
      </section>

      <section className="rescue-warning">
        <div className="shell rescue-warning-grid">
          <strong>First: adult or youngster?</strong>
          <p>
            A fully feathered young bird hopping on the ground may be a healthy
            fledgling still cared for by its parents. If you are unsure, use the
            <Link href="/rescue/baby-birds"> baby-bird guide</Link> before intervening.
          </p>
        </div>
      </section>

      <section className="section songbird-transport-section" id="safe-transport">
        <div className="shell songbird-section-heading">
          <div>
            <p className="eyebrow">Safe containment</p>
            <h2>Small bird. Small box. Very little handling.</h2>
          </div>
          <p className="page-lead">
            The goal is not to treat the bird at home. It is to prevent further
            injury and stress while arranging licensed care.
          </p>
        </div>
        <div className="shell songbird-step-grid">
          {transportSteps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section songbird-urgent-section">
        <div className="shell songbird-urgent-grid">
          <div>
            <p className="eyebrow eyebrow-light">Needs professional care</p>
            <h2>Call REGI when any of these are true.</h2>
            <p>
              Cat bites and scratches are especially dangerous because bacteria
              can cause a fatal infection even when the bird appears alert.
            </p>
          </div>
          <ul>
            {urgentSigns.map((sign) => <li key={sign}>{sign}</li>)}
          </ul>
        </div>
      </section>

      <section className="section songbird-do-not-section">
        <div className="shell songbird-do-not-grid">
          <div>
            <p className="eyebrow">Please do not</p>
            <h2>Good intentions can complicate recovery.</h2>
          </div>
          <div>
            <p><strong>Do not feed or give water.</strong> An injured bird can aspirate, and the wrong diet can cause additional harm.</p>
            <p><strong>Do not keep checking the box.</strong> Darkness and quiet reduce shock; repeated handling adds stress.</p>
            <p><strong>Do not attempt home rehabilitation.</strong> Native birds are protected and require species-specific care from a licensed rehabilitator.</p>
            <p><strong>Do not handle larger corvids or unfamiliar birds if you feel unsafe.</strong> Keep the area protected and call REGI for direction.</p>
          </div>
        </div>
      </section>

      <section className="page-cta songbird-cta">
        <div className="shell page-cta-grid">
          <p className="eyebrow eyebrow-light">When in doubt, call</p>
          <h2>A quick conversation can prevent the wrong rescue.</h2>
          <div>
            <a className="button button-cream" href={siteConfig.clinic.phoneHref}>Call the REGI clinic</a>
            <p>{siteConfig.clinic.hours} · {siteConfig.clinic.phone}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
