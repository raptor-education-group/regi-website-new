import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Work & Story",
  alternates: { canonical: "/about" },
  openGraph: { title: "Our Work & Story" },
  twitter: { title: "Our Work & Story" },
  description:
    "Learn how REGI has rehabilitated native birds, advanced avian care, and educated Wisconsin communities since 1990.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="about-hero">
        <div className="about-hero-image">
          <Image src="/images/eagle-release.jpg" alt="A rehabilitated bald eagle returning to the wild" fill priority sizes="100vw" />
        </div>
        <div className="shell about-hero-copy">
          <p className="eyebrow eyebrow-light">Our work &amp; story</p>
          <h1>Care with one destination: the wild.</h1>
          <p>
            REGI brings rehabilitation, research, and public education together
            to give native birds their strongest possible future.
          </p>
        </div>
      </section>

      <nav className="subnav-bar" aria-label="About REGI">
        <div className="shell">
          <Link className="active" href="/about">Our story</Link>
          <Link href="/staff">Staff</Link>
          <Link href="/board">Board</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      <section className="section page-intro-section">
        <div className="shell page-intro-grid">
          <div>
            <p className="eyebrow">Since 1990</p>
            <h2>A small idea that grew wings.</h2>
          </div>
          <div>
            <p className="page-lead">
              Marge Gibson and her late husband, Don, founded REGI around
              educational programming and field research on avian species.
            </p>
            <p>
              The need for a rehabilitation center—especially for raptors and
              swans—quickly reshaped the mission. Today, REGI admits between 800
              and more than 1,000 patients each year while reaching hundreds of
              people through close, memorable wildlife education.
            </p>
          </div>
        </div>
        <div className="shell founders-story-grid">
          <div className="founders-story-image">
            <Image src="/images/founders.jpg" alt="REGI founders Don and Marge Gibson with a turkey vulture" fill sizes="(max-width: 800px) 100vw, 58vw" />
          </div>
          <blockquote>
            <span>Our purpose</span>
            “Helping wildlife become wild once more.”
            <cite>Raptor Education Group, Inc.</cite>
          </blockquote>
        </div>
      </section>

      <section className="section mission-section">
        <div className="shell mission-heading">
          <p className="eyebrow eyebrow-light">Three connected goals</p>
          <h2>Every part of the mission strengthens the next.</h2>
        </div>
        <div className="shell mission-grid">
          <article><span>01</span><h3>A safe haven</h3><p>Create a safe place for injured and orphaned native birds until they can return to the wild.</p></article>
          <article><span>02</span><h3>Better care</h3><p>Develop nutrition, husbandry, and rehabilitation methods grounded in each species&apos; natural history.</p></article>
          <article><span>03</span><h3>Broader understanding</h3><p>Help the public and scientific community better understand native birds, behaviors, and habitat needs.</p></article>
        </div>
      </section>

      <section className="section rehab-story-section">
        <div className="shell rehab-story-grid">
          <div>
            <p className="eyebrow">Species-specific rehabilitation</p>
            <h2>The patient leads the plan.</h2>
            <p className="page-lead">
              An owl is not a small eagle. A swan is not a large duck. Every
              bird arrives with different anatomy, behavior, diet, stress, and
              conditioning needs.
            </p>
            <p>
              REGI&apos;s team builds care around those differences—from medical
              treatment and nutrition to flight conditioning and release
              criteria—so recovery prepares a bird for life beyond the clinic.
            </p>
            <Link className="text-link" href="/rescue">Learn how to help an injured bird <span>→</span></Link>
          </div>
          <div className="rehab-story-image">
            <Image src="/images/rehabilitation.jpg" alt="REGI staff providing specialized care to a native bird" fill sizes="(max-width: 800px) 100vw, 48vw" />
          </div>
        </div>
      </section>

      <section className="section about-people-section">
        <div className="shell about-people-grid">
          <div className="about-people-image">
            <Image
              src="/images/staff-samantha.webp"
              alt="Samantha Brooks holding a barred owl"
              fill
              sizes="(max-width: 900px) 100vw, 52vw"
            />
            <span>Education, care, and connection</span>
          </div>
          <div className="about-people-copy">
            <p className="eyebrow eyebrow-light">The people of REGI</p>
            <h2>A small team with a wide reach.</h2>
            <p>
              Wildlife care happens one patient at a time, but never through
              one person alone. REGI&apos;s staff, board, interns, volunteers,
              veterinary partners, rescuers, and supporters each hold part of
              the work.
            </p>
            <div className="about-people-links">
              <Link href="/staff"><span>01</span><strong>Meet the staff</strong><i>→</i></Link>
              <Link href="/board"><span>02</span><strong>Meet the board</strong><i>→</i></Link>
              <Link href="/careers"><span>03</span><strong>Careers &amp; internships</strong><i>→</i></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section credentials-section">
        <div className="shell credentials-grid">
          <div><strong>800–1,000+</strong><span>patients annually</span></div>
          <div><strong>35+</strong><span>years serving wildlife</span></div>
          <div className="candid-credential"><strong>Platinum</strong><span>2026 Candid Seal of Transparency</span></div>
          <div><strong>USFWS</strong><span>federal rehabilitation permits</span></div>
          <div><strong>Wisconsin DNR</strong><span>state rehabilitation license</span></div>
          <div><strong>501(c)(3)</strong><span>independent nonprofit</span></div>
        </div>
        <div className="shell credentials-copy">
          <p>
            REGI holds permits from the Wisconsin Department of Natural
            Resources and U.S. Fish and Wildlife Service. REGI earned Candid&apos;s
            2026 Platinum Seal of Transparency and participates in professional communities
            including the International Wildlife Rehabilitation Council,
            National Wildlife Rehabilitators Association, Raptor Research
            Foundation, and American Society of Ornithology.
          </p>
        </div>
      </section>

      <section className="page-cta">
        <div className="shell page-cta-grid">
          <p className="eyebrow eyebrow-light">Keep the mission moving</p>
          <h2>Be part of the next release story.</h2>
          <div>
            <Link className="button button-cream" href="/support">Support REGI</Link>
            <p>Donations and volunteers make independent wildlife care possible.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
