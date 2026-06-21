import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../lib/site-config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-newsletter">
        <div className="shell footer-newsletter-inner">
          <div>
            <p className="eyebrow eyebrow-light">Taking Flight newsletter</p>
            <h2>Stories worth opening your inbox for.</h2>
          </div>
          <div>
            <p>Patient journeys, releases, education news, events, and thoughtful ways to help native birds.</p>
            <button className="button button-cream" type="button" data-newsletter-open>Join the newsletter</button>
          </div>
        </div>
      </div>
      <div className="footer-visit-notice">
        <div className="shell footer-visit-notice-inner">
          <p className="eyebrow eyebrow-light">Before you visit</p>
          <p>
            REGI is not open to the public. Please call our clinic before
            dropping off a bird. Call our education office for information on
            visiting REGI during our Raptor Tour season.
          </p>
          <div>
            <a href={siteConfig.clinic.phoneHref}>Clinic · {siteConfig.clinic.phone}</a>
            <a href={siteConfig.education.phoneHref}>Education · {siteConfig.education.phone}</a>
          </div>
        </div>
      </div>

      <div className="shell footer-top">
        <div className="footer-brand">
          <Link href="/" aria-label="REGI home">
            <Image
              src="/images/regi-logo.png"
              alt="Raptor Education Group, Inc."
              width={230}
              height={145}
            />
          </Link>
          <p>Rehabilitate. Educate. Research. Release.</p>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/about">About REGI</Link>
          <Link href="/staff">Meet the staff</Link>
          <Link href="/board">Our board</Link>
          <Link href="/education">Education programs</Link>
          <Link href="/visit">Raptor tours</Link>
          <Link href="/newsletter">Taking Flight newsletter</Link>
        </div>
        <div>
          <h2>Take action</h2>
          <Link href="/make-a-difference">Make a difference</Link>
          <Link href="/careers">Careers &amp; internships</Link>
          <Link href="/support">Support REGI</Link>
          <Link href="/adopt-a-bird">Adopt a bird</Link>
          <Link href="/shop">Gift shop</Link>
          <Link href="/resources">Wildlife resources</Link>
          <Link href="/rescue">Injured bird help</Link>
          <Link href="/rescue/songbirds">Songbird rescue</Link>
          <Link href="/rescue/baby-birds">Baby bird help</Link>
          <Link href="/contact">Contact us</Link>
        </div>
        <div>
          <h2>Contact</h2>
          <a href={`mailto:${siteConfig.education.email}`}>
            {siteConfig.education.email}
          </a>
          <address>
            {siteConfig.address.street}<br />
            {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}
          </address>
          <p>
            Open 8:00 a.m.–4:00 p.m.
            <br />7 days a week
          </p>
          <div className="social-links">
            <a
              href={siteConfig.social.facebook}
            >
              Facebook
            </a>
            <a
              href={siteConfig.social.instagram}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} Raptor Education Group, Inc.</p>
        <p>501(c)(3) nonprofit · Antigo, Wisconsin</p>
        <Link href="/privacy">Privacy</Link>
        <Link href="/accessibility">Accessibility</Link>
        <Link href="/support">Help a bird today →</Link>
      </div>
    </footer>
  );
}
