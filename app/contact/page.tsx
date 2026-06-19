import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact REGI",
  description:
    "Contact REGI's clinic or education office, request a patient update, or find directions to the Antigo, Wisconsin facility.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="contact-hero">
        <div className="shell contact-hero-grid">
          <div>
            <p className="eyebrow eyebrow-light">Contact REGI</p>
            <h1>Start with the right team.</h1>
          </div>
          <p>
            Bird emergency, tour question, patient update, or general note—we
            will help you find the clearest next step.
          </p>
        </div>
      </section>

      <nav className="subnav-bar" aria-label="About REGI">
        <div className="shell">
          <Link href="/about">Our story</Link>
          <Link href="/staff">Staff</Link>
          <Link href="/board">Board</Link>
          <Link href="/careers">Careers</Link>
          <Link className="active" href="/contact">Contact</Link>
        </div>
      </nav>

      <section className="section contact-route-section">
        <div className="shell contact-route-grid">
          <article className="contact-route urgent-contact">
            <span>01 · Urgent</span>
            <h2>Injured bird</h2>
            <p>
              Call the clinic before transporting a bird. If it is safe to do
              so, contain the bird in a ventilated cardboard box and keep it
              quiet, dark, and warm.
            </p>
            <a className="contact-number" href="tel:+17156234015">715-623-4015</a>
            <Link className="text-link text-link-light" href="/rescue">
              Safe handling guide <span>→</span>
            </Link>
          </article>
          <article className="contact-route">
            <span>02 · Plan a visit</span>
            <h2>Education &amp; tours</h2>
            <p>
              Call for Raptor Tours, programs, summer camp, group visits, or
              other education questions. REGI is not generally open for
              self-guided public visits.
            </p>
            <a className="contact-number" href="tel:+17156232563">715-623-2563</a>
            <a
              className="text-link"
              href="mailto:education@raptoreducationgroup.org"
            >
              Email education <span>→</span>
            </a>
          </article>
          <article className="contact-route">
            <span>03 · Patient status</span>
            <h2>Request an update</h2>
            <p>
              Include the bird&apos;s species, where it was found, and the date it
              arrived. The small clinic team responds as patient care allows.
            </p>
            <a
              className="contact-email"
              href="mailto:updates@raptoreducationgroup.org"
            >
              updates@raptoreducationgroup.org
            </a>
          </article>
        </div>
      </section>

      <section className="section contact-details-section">
        <div className="shell contact-details-grid">
          <div>
            <p className="eyebrow eyebrow-light">Find REGI</p>
            <h2>Antigo, Wisconsin</h2>
            <address>
              Raptor Education Group, Inc.<br />
              N2160 W Rollwood Rd.<br />
              Antigo, WI 54409
            </address>
          </div>
          <div className="contact-detail-list">
            <div><span>Hours</span><strong>8:00 a.m.–4:00 p.m. · 7 days a week</strong></div>
            <div><span>General education email</span><a href="mailto:education@raptoreducationgroup.org">education@raptoreducationgroup.org</a></div>
            <div><span>Board correspondence</span><a href="mailto:board@raptoreducationgroup.org">board@raptoreducationgroup.org</a></div>
            <div><span>Volunteer questions</span><a href="mailto:volunteer@raptoreducationgroup.org">volunteer@raptoreducationgroup.org</a></div>
          </div>
        </div>
      </section>
    </main>
  );
}
