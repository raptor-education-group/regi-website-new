import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wildlife Resources",
  alternates: { canonical: "/resources" },
  openGraph: { title: "Wildlife Resources" },
  twitter: { title: "Wildlife Resources" },
  description:
    "REGI guides and downloads for safer yards, indoor cats, healthy waterfowl, lead-free choices, volunteering, and donation drives.",
};

const downloads = [
  { title: "Keep Cats Indoors", type: "PDF guide", href: "/resources/keep-cats-indoors.pdf", text: "Why indoor living protects both companion cats and native wildlife." },
  { title: "Don't Feed Waterfowl Bread", type: "PDF guide", href: "/resources/dont-feed-waterfowl-bread.pdf", text: "How bread can cause permanent harm and what to do instead." },
  { title: "Lead in the Environment", type: "Visual guide", href: "/resources/lead-in-the-environment.png", text: "A quick guide to choosing non-lead ammunition and fishing tackle." },
  { title: "Volunteer Application", type: "Printable PDF", href: "/resources/volunteer-application.pdf", text: "Apply for a regular volunteer role at REGI." },
  { title: "Volunteer Transporter Application", type: "Printable PDF", href: "/resources/volunteer-transporter-application.pdf", text: "Help native birds reach licensed care and return to the wild." },
  { title: "Donation Drive Wish List", type: "Printable PDF", href: "/resources/donation-drive-wishlist.pdf", text: "Organize a practical supply drive for REGI's clinic and ambassadors." },
];

const externalReferences = [
  {
    title: "Dr. Hines' Wildlife Rehabilitation Guides",
    type: "External veterinary reference",
    href: "https://vetspace.2ndchance.info/all-of-dr-hines-guides-to-wildlife-rehabilitation/",
    text: "A broad collection of freely available wildlife rehabilitation articles compiled by veterinarian Ronald Hines.",
  },
  {
    title: "Baby Songbird Growth Charts",
    type: "External veterinary reference",
    href: "https://vetspace.2ndchance.info/growth-charts-for-baby-north-american-song-birds/",
    text: "Species-specific photo and growth references that may help with age estimation and identification.",
  },
];

export default function ResourcesPage() {
  return (
    <main id="main-content">
      <section className="resource-page-hero">
        <div className="shell resource-page-hero-grid">
          <p className="eyebrow eyebrow-light">Wildlife resources</p>
          <h1>Good intentions, made useful.</h1>
          <p>Guides, applications, and practical actions you can use, print, and share.</p>
        </div>
      </section>

      <section className="section featured-resource-section">
        <div className="shell featured-resource-grid">
          <article>
            <span>Start at home</span>
            <h2>Build a bird-safe backyard.</h2>
            <p>Clean water, native plants, thoughtful feeder placement, and fewer chemical hazards all add up.</p>
            <Link className="button" href="/protect-wildlife">Read the backyard guide</Link>
          </article>
          <article>
            <span>Choose lead free</span>
            <h2>Break the chain of accidental poisoning.</h2>
            <p>Learn how fragments from ammunition and lost fishing tackle move through food webs.</p>
            <Link className="button button-cream" href="/resources/poison-bullets">Read the lead-free explainer</Link>
          </article>
        </div>
      </section>

      <section className="section resource-download-section">
        <div className="shell resources-heading">
          <p className="eyebrow">Download &amp; share</p>
          <h2>Keep the useful stuff close.</h2>
        </div>
        <div className="shell resource-download-list">
          {downloads.map((resource, index) => (
            <a href={resource.href} key={resource.title}>
              <span>0{index + 1}</span>
              <div><small>{resource.type}</small><h3>{resource.title}</h3><p>{resource.text}</p></div>
              <i>↗</i>
            </a>
          ))}
        </div>
        <div className="shell resource-access-note">
          <strong>Need a different format?</strong>
          <p>Some legacy applications are designed for printing. Email <a href="mailto:volunteer@raptoreducationgroup.org?subject=Accessible%20volunteer%20application">volunteer@raptoreducationgroup.org</a> to request an accessible alternative or help completing one.</p>
        </div>
      </section>

      <section className="section external-reference-section">
        <div className="shell external-reference-heading">
          <div>
            <p className="eyebrow">Further reading</p>
            <h2>Independent wildlife references.</h2>
          </div>
          <p>
            These outside resources can support learning and identification,
            but they do not replace instructions from REGI or another licensed
            wildlife rehabilitator.
          </p>
        </div>
        <div className="shell external-reference-grid">
          {externalReferences.map((resource) => (
            <a href={resource.href} key={resource.href} rel="noreferrer" target="_blank">
              <small>{resource.type}</small>
              <h3>{resource.title}</h3>
              <p>{resource.text}</p>
              <span>Visit the reference <i aria-hidden="true">↗</i></span>
            </a>
          ))}
        </div>
        <p className="shell external-reference-credit">
          External articles and charts remain the work of their respective
          author and publisher and are linked here with attribution.
        </p>
      </section>
    </main>
  );
}
