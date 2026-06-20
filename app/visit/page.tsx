import type { Metadata } from "next";
import Image from "next/image";
import { mailto, siteConfig } from "../lib/site-config";

export const metadata: Metadata = {
  title: "Visit REGI",
  alternates: { canonical: "/visit" },
  openGraph: { title: "Visit REGI" },
  twitter: { title: "Visit REGI" },
  description:
    "Plan a seasonal Raptor Tour or Raptor Adventures Summer Camp experience at REGI in Antigo, Wisconsin.",
};

export default function VisitPage() {
  const { tourBooking, campRegistration, campThemes } = siteConfig.external;

  return (
    <main id="main-content">
      <section className="inner-hero visit-hero">
        <div className="inner-hero-copy">
          <p className="eyebrow">Visit REGI</p>
          <h1>Come closer to Wisconsin&apos;s wild side.</h1>
          <p>
            Seasonal outdoor tours and youth camps invite you onto the REGI
            grounds to meet avian ambassadors, explore nature, and discover the
            stories behind the feathers.
          </p>
          <a className="button" href="#raptor-tours">Plan your visit <span>↓</span></a>
        </div>
        <div className="inner-hero-image">
          <Image
            src="/images/raptor-tour.jpg"
            alt="Guests meeting a barred owl during a guided REGI Raptor Tour"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 53vw"
          />
        </div>
      </section>

      <section className="section tour-section" id="raptor-tours">
        <div className="shell page-intro-grid">
          <div>
            <p className="eyebrow">June · July · August</p>
            <h2>Raptor Tours</h2>
          </div>
          <div>
            <p className="page-lead">
              Follow REGI educators to stations across the property and meet a
              changing cast of hawks, owls, falcons, crows, vultures, and
              waterfowl up close.
            </p>
            <p>
              Tours last about 50 minutes to one hour and take place entirely
              outdoors. Rehabilitation patients and clinic enclosures remain
              private under REGI&apos;s federal permits.
            </p>
          </div>
        </div>
        <div className="shell visit-info-grid">
          <article><span>Length</span><strong>50–60 minutes</strong><p>Guided, outdoors, and paced for conversation.</p></article>
          <article><span>Admission</span><strong>$12 adult · $8 child</strong><p>Child admission applies to ages 12 and under.</p></article>
          <article><span>Arrival</span><strong>Welcome &amp; Nature Center</strong><p>Check in and pay before your scheduled tour.</p></article>
          <article><span>Registration</span><strong>Required in advance</strong><p>Call for assistance or groups larger than ten.</p></article>
        </div>
        <div className="shell visit-notice">
          <p><strong>Dress for the weather.</strong> Tours are outdoors and subject to conditions.</p>
          <p><strong>Please leave pets at home.</strong> Dogs are not allowed on REGI property.</p>
          <div className="visit-action-row">
            {tourBooking ? <a className="button" href={tourBooking}>Register for a tour <span aria-hidden="true">↗</span></a> : null}
            <a className={tourBooking ? "text-link" : "button"} href={siteConfig.education.phoneHref}>Call {siteConfig.education.phone}</a>
          </div>
        </div>
      </section>

      <section className="section october-section">
        <div className="shell october-grid">
          <div className="october-image">
            <Image src="/images/foster-owl.jpg" alt="Great horned owls at REGI" fill sizes="(max-width: 800px) 100vw, 50vw" />
          </div>
          <div>
            <p className="eyebrow eyebrow-light">October only</p>
            <h2>Owl-O-Ween Tours</h2>
            <p className="page-lead">
              Celebrate fall, REGI-style—with pumpkin painting, warm cider,
              cocoa, and a closer look at the folklore, myths, and legends
              surrounding owls, crows, and vultures.
            </p>
            <p>$12 per adult · $8 per child age 12 and under. Pumpkins are available for $5, or bring your own.</p>
          </div>
        </div>
      </section>

      <section className="section camp-section" id="summer-camp">
        <div className="shell camp-heading">
          <div>
            <p className="eyebrow">Raptor Adventures</p>
            <h2>Summer camp gets kids outside—and looking closer.</h2>
          </div>
          <p>
            Live birds of prey, nature exploration, group games, wildlife
            study, art, and unhurried outdoor play help young people build a
            lasting relationship with the natural world.
          </p>
        </div>
        <div className="shell camp-session-grid">
          <article><span>Session 01</span><h3>Ages 7–9</h3><p>July 13–17, 2026</p></article>
          <article><span>Session 02</span><h3>Ages 10–13</h3><p>August 3–7, 2026</p></article>
          <div className="camp-scholarship"><strong>Scholarships are available.</strong><p>Call the education office to learn more or request a registration form.</p></div>
        </div>
        {(campRegistration || campThemes) ? (
          <div className="shell camp-action-row" aria-label="Summer camp downloads">
            {campRegistration ? <a className="button" href={campRegistration}>Registration form <span aria-hidden="true">↗</span></a> : null}
            {campThemes ? <a className="text-link" href={campThemes}>Explore 2026 camp themes <span aria-hidden="true">↗</span></a> : null}
          </div>
        ) : null}
        <div className="shell camp-gallery">
          <figure><Image src="/images/summer-camp.jpg" alt="A group of REGI summer campers" fill sizes="(max-width: 800px) 100vw, 50vw" /></figure>
          <figure><Image src="/images/camp-exploration.jpg" alt="REGI campers exploring wildlife and nature" fill sizes="(max-width: 800px) 100vw, 50vw" /></figure>
        </div>
      </section>

      <section className="page-cta">
        <div className="shell page-cta-grid">
          <p className="eyebrow eyebrow-light">Ready for an adventure?</p>
          <h2>Make REGI part of your Wisconsin summer.</h2>
          <div>
            <a className="button button-cream" href={siteConfig.education.phoneHref}>Call the education office</a>
            <a className="text-link text-link-light" href={mailto(siteConfig.education.email, "Tour or summer camp inquiry")}>Email the education team</a>
            <p>For tour registration, camp details, or groups larger than ten.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
