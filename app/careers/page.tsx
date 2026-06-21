import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InternshipApplicationForm } from "../components/internship-application-form";

export const metadata: Metadata = {
  title: "Careers & Internships",
  alternates: { canonical: "/careers" },
  openGraph: { title: "Careers & Internships" },
  twitter: { title: "Careers & Internships" },
  description:
    "Explore career and summer internship opportunities in avian rehabilitation and wildlife education at REGI.",
};

const sharedExperience = [
  "Work as part of a small, collaborative nonprofit team",
  "Build calm communication and sound judgment in changing situations",
  "Learn the daily systems behind ethical wildlife care and public education",
  "Contribute to meaningful work rather than observing from the sidelines",
  "Develop a special project when one is required for academic credit",
];

const clinicalWork = [
  "Prepare species-appropriate diets and support feeding routines",
  "Assist with orphan care, enclosure setup, sanitation, and enrichment",
  "Observe intake, assessment, treatment planning, and patient progression",
  "Practice safe capture, restraint, transport, observation, and recordkeeping",
  "Support rescue coordination, facility care, and release preparation",
];

const educationWork = [
  "Help deliver onsite Raptor Tours and offsite outreach programs",
  "Support Raptor Adventures Summer Camp activities and group management",
  "Practice public interpretation, storytelling, and audience-centered teaching",
  "Assist with ambassador care, training, enrichment, and program preparation",
  "Develop lesson materials and conservation messages for varied audiences",
];

export default function CareersPage() {
  return (
    <main id="main-content">
      <section className="inner-hero careers-hero">
        <div className="inner-hero-copy">
          <p className="eyebrow">Careers &amp; internships</p>
          <h1>Do work that asks something real of you.</h1>
          <p>
            Wildlife care and education are practical, demanding,
            collaborative work. They also offer the rare privilege of helping
            a wild life—or a curious learner—move forward.
          </p>
          <a className="button" href="#internships">Explore internships <span aria-hidden="true">↓</span></a>
        </div>
        <div className="inner-hero-image">
          <Image
            src="/images/rehabilitation.jpg"
            alt="A REGI team member providing specialized care to a native trumpeter swan"
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
          <Link className="active" href="/careers">Careers &amp; internships</Link>
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
              Open staff positions are posted here as they become available.
              REGI&apos;s summer internships are structured entry points for
              students and early-career professionals preparing for wildlife,
              veterinary, conservation, or environmental education work.
            </p>
          </div>
        </div>
        <div className="shell career-status-card">
          <span>Employment</span>
          <div><h3>Current staff openings</h3><p>No staff vacancies are listed at this time. Internship applications are available below.</p></div>
          <a href="#application">Apply for an internship <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="section internship-section" id="internships">
        <div className="shell internship-heading">
          <p className="eyebrow eyebrow-light">May through August · 10–14 weeks</p>
          <h2>Summer internships</h2>
          <p>
            Choose an avian rehabilitation or wildlife education emphasis while
            learning how both sides of REGI&apos;s mission support one another.
            Scheduling can flex around students&apos; academic calendars.
          </p>
        </div>

        <div className="shell internship-overview-ribbon" aria-label="Internship overview">
          <p><strong>$75</strong><span>weekly stipend</span></p>
          <p><strong>Onsite</strong><span>housing available</span></p>
          <p><strong>2</strong><span>focused tracks</span></p>
          <p><strong>Hands-on</strong><span>supervised experience</span></p>
        </div>

        <div className="shell internship-track-detail-grid">
          <article>
            <div className="internship-track-title"><span>Track 01</span><h3>Avian rehabilitation</h3><p>Clinical and husbandry experience inside the daily rhythm of a working wildlife rehabilitation facility.</p></div>
            <div><h4>What you may do</h4><ul>{clinicalWork.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <aside><strong>A strong fit for</strong><p>Students exploring wildlife rehabilitation, veterinary medicine, animal science, biology, zoology, ecology, or related clinical paths.</p></aside>
          </article>
          <article>
            <div className="internship-track-title"><span>Track 02</span><h3>Wildlife education</h3><p>Interpretive and ambassador-focused experience connecting live birds, science, and conservation with the public.</p></div>
            <div><h4>What you may do</h4><ul>{educationWork.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <aside><strong>A strong fit for</strong><p>Students exploring environmental education, interpretation, communications, teaching, conservation, biology, recreation, or nonprofit outreach.</p></aside>
          </article>
        </div>

        <div className="shell internship-shared-grid">
          <div><p className="eyebrow">Across both tracks</p><h3>Professional habits matter as much as technical skills.</h3></div>
          <ul>{sharedExperience.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>

        <div className="shell internship-reality-check">
          <div><p className="eyebrow eyebrow-light">The honest version</p><h3>Wildlife work is not all releases and close encounters.</h3></div>
          <p>Interns should expect cleaning, food preparation, outdoor work, repetitive physical tasks, changing priorities, emotionally difficult cases, and schedules shaped by the needs of living animals and public programs. Supervision and training are provided; flexibility, reliability, and respect for safety are essential.</p>
        </div>
      </section>

      <section className="section application-section" id="application">
        <div className="shell">
          <InternshipApplicationForm />
        </div>
      </section>

      <section className="application-followup-section">
        <div className="shell application-followup-grid">
          <div><p className="eyebrow eyebrow-light">Before you send</p><h2>Finish with your own voice.</h2></div>
          <div><p>The application prepares a downloadable response file and opens a pre-addressed email to Executive Director Marge Gibson and Director of Education Samantha Brooks. Attach the downloaded application, résumé, and cover letter before sending.</p><p>Automated receipt and response emails will be added when REGI&apos;s Resend workflow is ready.</p></div>
        </div>
      </section>
    </main>
  );
}
