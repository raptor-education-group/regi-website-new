import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Taking Flight Newsletter",
  description:
    "Read Taking Flight, REGI's newsletter featuring rehabilitation stories, education updates, and the people helping native birds.",
};

export default function NewsletterPage() {
  return (
    <main id="main-content">
      <section className="legacy-hero newsletter-hero">
        <div className="legacy-hero-image">
          <Image src="/images/eagle-release.jpg" alt="A rehabilitated bald eagle returning to the wild" fill priority sizes="100vw" />
        </div>
        <div className="shell legacy-hero-copy">
          <p className="eyebrow eyebrow-light">Taking Flight</p>
          <h1>Stories from the clinic, classroom, and release site.</h1>
          <p>Follow the people, patients, ambassadors, and ideas moving REGI&apos;s mission forward.</p>
        </div>
      </section>

      <section className="section newsletter-current-section">
        <div className="shell newsletter-current-grid">
          <div>
            <p className="eyebrow">Current issue · Winter 2025</p>
            <h2>Thirty-five years—and still taking flight.</h2>
            <p className="page-lead">
              This ten-page anniversary edition looks back at REGI&apos;s growth
              while making room for the work still ahead.
            </p>
            <ul>
              <li>REGI&apos;s growth, expansion, and next chapter</li>
              <li>Loon rehabilitation and the team at Loon Rescue</li>
              <li>A growing education program and summer camp</li>
              <li>A new education van and the community partners behind it</li>
            </ul>
            <a className="button" href="/resources/taking-flight-winter-2025.pdf">
              Read the newsletter <span>↗</span>
            </a>
          </div>
          <div className="newsletter-cover">
            <span>35</span>
            <p>Years of rehabilitation, research, education, and release</p>
            <strong>Taking Flight</strong>
            <small>Winter 2025 · Raptor Education Group, Inc.</small>
          </div>
        </div>
      </section>

      <section className="newsletter-signup-section">
        <div className="shell newsletter-signup-grid">
          <div>
            <p className="eyebrow eyebrow-light">Stay close to the work</p>
            <h2>Get the next issue when it lands.</h2>
          </div>
          <div>
            <p>
              Ask the education team to add you to REGI&apos;s newsletter list.
              We&apos;ll keep it useful: new stories, events, and ways to help.
            </p>
            <a className="button button-cream" href="mailto:education@raptoreducationgroup.org?subject=Taking%20Flight%20Newsletter%20Signup">
              Join the newsletter list
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
