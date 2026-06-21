import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { directionsUrl, mailto, siteConfig } from "../lib/site-config";

export const metadata: Metadata = {
  title: "Visit REGI",
  alternates: { canonical: "/visit" },
  openGraph: { title: "Visit REGI" },
  twitter: { title: "Visit REGI" },
  description:
    "Plan a seasonal Raptor Tour at REGI, review visitor information, or explore Raptor Adventures Summer Camp in Antigo, Wisconsin.",
};

export default function VisitPage() {
  const { tourBooking } = siteConfig.external;

  return (
    <main id="main-content">
      <section className="inner-hero visit-hero">
        <div className="inner-hero-copy">
          <p className="eyebrow">Visit REGI</p>
          <h1>A wild Wisconsin experience—with a guide.</h1>
          <p>
            REGI welcomes registered guests for seasonal Raptor Tours and
            special education experiences. Because this is an active wildlife
            hospital, the grounds are not open for self-guided visits.
          </p>
          <div className="visit-hero-actions">
            <a className="button" href="#raptor-tours">Explore Raptor Tours <span>↓</span></a>
            <Link className="text-link" href="/summer-camp">Explore Summer Camp</Link>
          </div>
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

      <section className="visit-ground-rules" aria-label="Important visitor information">
        <div className="shell visit-ground-rules-grid">
          <p><span>01</span><strong>Register before arriving</strong>Walk-in and self-guided visits are not available.</p>
          <p><span>02</span><strong>Plan for the outdoors</strong>Tours take place outside and are weather dependent.</p>
          <p><span>03</span><strong>Protect the birds</strong>Leave pets at home and follow your educator&apos;s directions.</p>
        </div>
      </section>

      <section className="section visit-tour-section" id="raptor-tours">
        <div className="shell visit-tour-intro">
          <div>
            <p className="eyebrow">June · July · August</p>
            <h2>Seasonal Raptor Tours</h2>
          </div>
          <div>
            <p className="page-lead">
              Meet a changing cast of avian ambassadors while a REGI educator
              shares their stories, adaptations, and role in Wisconsin&apos;s wild
              communities.
            </p>
            <p>
              Tours last approximately 50–60 minutes and move between outdoor
              stations. Rehabilitation patients and clinic enclosures remain
              private under REGI&apos;s federal permits.
            </p>
          </div>
        </div>

        <div className="shell visit-tour-details">
          <article><span>Length</span><strong>50–60 minutes</strong><p>Guided, outdoors, and paced for questions.</p></article>
          <article><span>Admission</span><strong>$12 adult · $8 child</strong><p>Child admission applies to ages 12 and under.</p></article>
          <article><span>Check in</span><strong>Welcome &amp; Nature Center</strong><p>Arrive before your scheduled start time to check in and pay.</p></article>
          <article><span>Registration</span><strong>Required in advance</strong><p>Contact education for assistance or groups larger than ten.</p></article>
        </div>

        <div className="shell visit-tour-action">
          <div>
            <p className="eyebrow">Reserve your place</p>
            <h3>Choose a scheduled tour before making the drive.</h3>
          </div>
          <div>
            {tourBooking ? (
              <a className="button" href={tourBooking}>View available tours <span aria-hidden="true">↗</span></a>
            ) : (
              <a className="button" href={siteConfig.education.phoneHref}>Call {siteConfig.education.phone}</a>
            )}
            <p>For groups larger than ten or registration assistance, contact the education office.</p>
          </div>
        </div>
      </section>

      <section className="section visit-experiences-section">
        <div className="shell visit-experiences-heading">
          <p className="eyebrow eyebrow-light">More ways to visit</p>
          <h2>Seasonal experiences for curious minds.</h2>
        </div>
        <div className="shell visit-experience-grid">
          <article id="owl-o-ween">
            <div className="visit-experience-image">
              <Image src="/images/foster-owl.jpg" alt="Great horned owls at REGI" fill sizes="(max-width: 760px) 100vw, 50vw" />
            </div>
            <div>
              <p className="eyebrow eyebrow-light">October only</p>
              <h3>Owl-O-Ween Tours</h3>
              <p>
                Celebrate fall with owl, crow, and vulture folklore alongside
                warm cider, cocoa, and optional pumpkin painting.
              </p>
              <p className="visit-experience-price">$12 adult · $8 child age 12 and under</p>
            </div>
          </article>
          <article>
            <div className="visit-experience-image">
              <Image src="/images/summer-camp.jpg" alt="A group of REGI Raptor Adventures campers" fill sizes="(max-width: 760px) 100vw, 50vw" />
            </div>
            <div>
              <p className="eyebrow eyebrow-light">Raptor Adventures</p>
              <h3>Summer Camp</h3>
              <p>
                Weeklong youth sessions combine live birds, nature study,
                games, art, exploration, and time outside.
              </p>
              <Link className="text-link text-link-light" href="/summer-camp">Camp dates, ages &amp; details <span>→</span></Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section visit-planning-section">
        <div className="shell visit-planning-grid">
          <div>
            <p className="eyebrow">Before you arrive</p>
            <h2>A little planning keeps the day focused on the birds.</h2>
          </div>
          <div className="visit-planning-list">
            <div><span>Weather</span><p>Dress for current conditions and comfortable outdoor walking.</p></div>
            <div><span>Animals</span><p>Pets, including dogs, are not allowed on REGI property.</p></div>
            <div><span>Clinic privacy</span><p>Wild patients and rehabilitation areas are never part of public tours.</p></div>
            <div><span>Accessibility</span><p>Contact education before your visit to discuss mobility or accommodation needs.</p></div>
            <div><span>Location</span><p>{siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}</p></div>
          </div>
        </div>
        <div className="shell visit-planning-actions">
          <a className="button" href={directionsUrl}>Open Google Maps <span aria-hidden="true">↗</span></a>
          <Link className="text-link" href="/contact#contact-inquiry">Ask a non-scheduling question</Link>
        </div>
      </section>

      <section className="page-cta">
        <div className="shell page-cta-grid">
          <p className="eyebrow eyebrow-light">Need help planning?</p>
          <h2>Make REGI part of your Wisconsin adventure.</h2>
          <div>
            <a className="button button-cream" href={siteConfig.education.phoneHref}>Call the education office</a>
            <a className="text-link text-link-light" href={mailto(siteConfig.education.email, "REGI visit inquiry")}>Email education</a>
            <p>For registration assistance, accommodations, or groups larger than ten.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
