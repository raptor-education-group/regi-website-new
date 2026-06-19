import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-visit-notice">
        <div className="shell footer-visit-notice-inner">
          <p className="eyebrow eyebrow-light">Before you visit</p>
          <p>
            REGI is not open to the public. Please call our clinic before
            dropping off a bird. Call our education office for information on
            visiting REGI during our Raptor Tour season.
          </p>
          <div>
            <a href="tel:+17156234015">Clinic · 715-623-4015</a>
            <a href="tel:+17156232563">Education · 715-623-2563</a>
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
          <Link href="/contact">Contact us</Link>
        </div>
        <div>
          <h2>Contact</h2>
          <a href="mailto:education@raptoreducationgroup.org">
            education@raptoreducationgroup.org
          </a>
          <address>
            N2160 W Rollwood Rd.<br />
            Antigo, WI 54409
          </address>
          <p>
            Open 8:00 a.m.–4:00 p.m.
            <br />7 days a week
          </p>
          <div className="social-links">
            <a
              href="https://www.facebook.com/RaptorEducationGroupInc"
              aria-label="REGI on Facebook"
            >
              FB
            </a>
            <a
              href="https://www.instagram.com/raptoreducationgroup/"
              aria-label="REGI on Instagram"
            >
              IG
            </a>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} Raptor Education Group, Inc.</p>
        <p>501(c)(3) nonprofit · Antigo, Wisconsin</p>
        <Link href="/support">Help a bird today →</Link>
      </div>
    </footer>
  );
}
