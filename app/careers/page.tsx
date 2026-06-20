import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers & Internships",
  alternates: { canonical: "/careers" },
  openGraph: { title: "Careers & Internships" },
  twitter: { title: "Careers & Internships" },
  description:
    "Explore career and summer internship opportunities in avian rehabilitation and wildlife education at REGI.",
};

const objectives = [
  "Prepare species-appropriate diets and safely support feeding routines",
  "Practice routine handling, capture, restraint, observation, and recordkeeping",
  "Assist with basic rehabilitation care under experienced staff supervision",
  "Build public speaking and interpretive teaching skills",
  "Learn to work calmly and cooperatively in high-emotion situations",
];

export default function CareersPage() {
  return (
    <main id="main-content">
      <section className="inner-hero careers-hero">
        <div className="inner-hero-copy">
          <p className="eyebrow">Careers at REGI</p>
          <h1>Do work that asks something real of you.</h1>
          <p>
            Wildlife care is practical, demanding, collaborative work. It also
            offers the rare privilege of helping a wild life move forward.
          </p>
          <a className="button" href="#internships">Explore internships <span>↓</span></a>
        </div>
        <div className="inner-hero-image">
          <Image
            src="/images/rehabilitation.jpg"
            alt="REGI team members providing specialized care to a native bird"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 53vw"
          />
        </div>
      </section>

      <nav className="subnav-bar" aria-label="About REGI">
        <div className="shell">
          <Link href="/about">Our story</Link>
          <Link href="/staff">Staff</Link>
          <Link href="/board">Board</Link>
          <Link className="active" href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      <section className="section career-intro-section">
        <div className="shell career-intro-grid">
          <div>
            <p className="eyebrow">Join the work</p>
            <h2>Small team. Wide responsibility.</h2>
          </div>
          <div>
            <p className="page-lead">
              Staff roles at REGI can span patient care, rescue coordination,
              facility operations, ambassador care, teaching, and public
              communication.
            </p>
            <p>
              Open staff positions are shared here as they become available.
              The summer internship is REGI&apos;s primary structured entry point
              for students preparing for wildlife or environmental education
              careers.
            </p>
          </div>
        </div>
      </section>

      <section className="section internship-section" id="internships">
        <div className="shell internship-heading">
          <p className="eyebrow eyebrow-light">May through August · 10–14 weeks</p>
          <h2>Summer Internship</h2>
          <p>
            Choose a rehabilitation or education emphasis while contributing
            across both sides of REGI&apos;s mission. Scheduling is flexible around
            students&apos; academic calendars.
          </p>
        </div>
        <div className="shell internship-track-grid">
          <article>
            <span>Track 01</span>
            <h3>Avian rehabilitation</h3>
            <p>
              Focus on orphaned bird care, nutrition, housing, physical
              therapy, capture and restraint, safety, rescue coordination, and
              the daily rhythm of a working wildlife clinic.
            </p>
          </article>
          <article>
            <span>Track 02</span>
            <h3>Wildlife education</h3>
            <p>
              Focus on onsite tours, outreach programs, summer camp, lesson
              development, public interpretation, ambassador training, and
              species-appropriate enrichment.
            </p>
          </article>
        </div>
        <div className="shell internship-details-grid">
          <div>
            <p className="eyebrow">What you will build</p>
            <ul>
              {objectives.map((objective) => <li key={objective}>{objective}</li>)}
            </ul>
          </div>
          <aside>
            <p className="eyebrow">Compensation &amp; support</p>
            <strong>$75 weekly stipend</strong>
            <strong>Onsite housing</strong>
            <p>
              REGI can help shape a special project when one is required for
              academic credit.
            </p>
          </aside>
        </div>
      </section>

      <section className="section apply-section">
        <div className="shell apply-grid">
          <div>
            <p className="eyebrow">How to apply</p>
            <h2>Show us what draws you to the work.</h2>
          </div>
          <div>
            <p>
              Email a cover letter, résumé, and three references to Executive
              Director Marge Gibson and copy Director of Education Samantha
              Brooks. Use <strong>“Internship Application”</strong> as the
              subject line.
            </p>
            <a
              className="button"
              href="mailto:marge@raptoreducationgroup.org?cc=samantha@raptoreducationgroup.org&subject=Internship%20Application"
            >
              Start your application
            </a>
            <p className="application-email-note">
              marge@raptoreducationgroup.org · CC samantha@raptoreducationgroup.org
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
