import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { mailto, siteConfig } from "../lib/site-config";

export const metadata: Metadata = {
  title: "Raptor Adventures Summer Camp",
  alternates: { canonical: "/summer-camp" },
  openGraph: { title: "Raptor Adventures Summer Camp" },
  twitter: { title: "Raptor Adventures Summer Camp" },
  description:
    "Explore 2026 Raptor Adventures Summer Camp sessions, ages, activities, scholarships, and registration information at REGI in Antigo, Wisconsin.",
};

export default function SummerCampPage() {
  const { campRegistration, campThemes } = siteConfig.external;

  return (
    <main id="main-content">
      <section className="camp-page-hero">
        <div className="camp-page-hero-image">
          <Image src="/images/summer-camp.jpg" alt="Young people participating in REGI Raptor Adventures Summer Camp" fill priority sizes="100vw" />
        </div>
        <div className="shell camp-page-hero-copy">
          <p className="eyebrow eyebrow-light">Raptor Adventures · Summer 2026</p>
          <h1>Let curiosity run wild.</h1>
          <p>
            A week of live birds, wildlife discovery, outdoor exploration,
            creative projects, games, and friendships for young naturalists.
          </p>
          <a className="button button-cream" href="#camp-sessions">See 2026 sessions <span>↓</span></a>
        </div>
      </section>

      <nav className="subnav-bar" aria-label="Visit REGI">
        <div className="shell">
          <Link href="/visit">Visit REGI</Link>
          <Link href="/visit#raptor-tours">Raptor Tours</Link>
          <Link className="active" href="/summer-camp">Summer Camp</Link>
        </div>
      </nav>

      <section className="section camp-page-intro">
        <div className="shell camp-page-intro-grid">
          <div>
            <p className="eyebrow">A week at REGI</p>
            <h2>Outside, hands-on, and built around wonder.</h2>
          </div>
          <div>
            <p className="page-lead">
              Campers meet avian ambassadors and investigate the habitats,
              behaviors, and adaptations that make Wisconsin wildlife remarkable.
            </p>
            <p>
              Nature exploration, group games, wildlife study, art, and
              unhurried outdoor play help each age group build confidence and
              a lasting relationship with the natural world.
            </p>
          </div>
        </div>
      </section>

      <section className="section camp-sessions-section" id="camp-sessions">
        <div className="shell camp-sessions-heading">
          <p className="eyebrow eyebrow-light">Choose a session</p>
          <h2>2026 camp weeks</h2>
        </div>
        <div className="shell camp-page-session-grid">
          <article>
            <span>Session 01</span>
            <h3>Ages 7–9</h3>
            <p>July 13–17, 2026</p>
            <small>Five days of age-appropriate wildlife exploration and activities.</small>
          </article>
          <article>
            <span>Session 02</span>
            <h3>Ages 10–13</h3>
            <p>August 3–7, 2026</p>
            <small>Five days designed for older campers ready to look closer and dig deeper.</small>
          </article>
        </div>
        <div className="shell camp-registration-panel">
          <div>
            <p className="eyebrow eyebrow-light">Registration</p>
            <h3>Reserve a place for your young naturalist.</h3>
            <p>Spaces are limited. Review the current materials before submitting registration.</p>
          </div>
          <div className="camp-registration-actions">
            {campRegistration ? <a className="button button-cream" href={campRegistration}>Registration form <span aria-hidden="true">↗</span></a> : null}
            {campThemes ? <a className="text-link text-link-light" href={campThemes}>Explore 2026 camp themes <span aria-hidden="true">↗</span></a> : null}
            {!campRegistration && !campThemes ? <a className="button button-cream" href={siteConfig.education.phoneHref}>Call {siteConfig.education.phone}</a> : null}
          </div>
        </div>
      </section>

      <section className="section camp-experience-section">
        <div className="shell camp-experience-grid">
          <div className="camp-experience-copy">
            <p className="eyebrow">What campers can expect</p>
            <h2>Every day offers a new way to notice.</h2>
            <ul>
              <li>Meet live avian ambassadors with REGI educators</li>
              <li>Explore local habitats, wildlife signs, and natural systems</li>
              <li>Learn through games, art, observation, and group activities</li>
              <li>Spend meaningful time outdoors with other young nature enthusiasts</li>
            </ul>
          </div>
          <div className="camp-experience-images">
            <figure><Image src="/images/camp-exploration.jpg" alt="REGI campers exploring wildlife and nature" fill sizes="(max-width: 900px) 100vw, 45vw" /></figure>
            <figure><Image src="/images/camp-activity.jpg" alt="A hands-on Raptor Adventures camp activity" fill sizes="(max-width: 900px) 100vw, 28vw" /></figure>
          </div>
        </div>
      </section>

      <section className="section camp-scholarship-section">
        <div className="shell camp-scholarship-grid">
          <div>
            <p className="eyebrow eyebrow-light">Scholarships available</p>
            <h2>Cost should not be the end of the conversation.</h2>
          </div>
          <div>
            <p>Contact the education office to ask about scholarship availability or request registration help.</p>
            <a className="button button-cream" href={mailto(siteConfig.education.email, "Raptor Adventures Summer Camp scholarship inquiry")}>Ask about a scholarship</a>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="shell page-cta-grid">
          <p className="eyebrow eyebrow-light">Questions before registering?</p>
          <h2>Talk with the REGI education team.</h2>
          <div>
            <a className="button button-cream" href={siteConfig.education.phoneHref}>Call {siteConfig.education.phone}</a>
            <Link className="text-link text-link-light" href="/contact#contact-inquiry">Send a camp question</Link>
            <p>Please use the registration materials—not the contact form—to reserve a place.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
