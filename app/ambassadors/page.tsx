import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AmbassadorDirectory } from "../components/ambassador-directory";

export const metadata: Metadata = {
  title: "Avian Ambassadors",
  alternates: { canonical: "/ambassadors" },
  openGraph: { title: "Avian Ambassadors" },
  twitter: { title: "Avian Ambassadors" },
  description:
    "Meet REGI's non-releasable avian ambassadors who help audiences connect with Wisconsin wildlife.",
};

export default function AmbassadorsPage() {
  return (
    <main id="main-content">
      <section className="ambassador-page-hero">
        <div className="shell ambassador-page-hero-grid">
          <div>
            <p className="eyebrow eyebrow-light">Meet our avian ambassadors</p>
            <h1>The birds who change minds.</h1>
            <p>
              These permanent REGI residents cannot be released, but their work
              is powerful: helping people understand native birds one close
              encounter at a time.
            </p>
          </div>
          <div className="ambassador-page-hero-image">
            <Image src="/images/jasper.jpg" alt="Jasper, an eastern screech-owl avian ambassador" fill priority sizes="(max-width: 800px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      <section className="section ambassador-intro-section">
        <div className="shell page-intro-grid">
          <div><p className="eyebrow">Working wildlife</p><h2>Every ambassador carries a story.</h2></div>
          <div>
            <p className="page-lead">
              Ambassadors are non-releasable birds whose health, temperament,
              and permits allow them to participate in public education.
            </p>
            <p>
              They help audiences see adaptations, behavior, and conservation
              needs in a way no screen can duplicate. REGI holds state and
              federal permits to care for and present these protected birds.
            </p>
          </div>
        </div>
      </section>

      <section className="ambassador-directory-section" id="ambassador-directory">
        <div className="shell ambassador-directory-heading">
          <p>15 ambassadors · 15 wild perspectives</p>
          <span>Select any bird to open their story</span>
        </div>
        <AmbassadorDirectory />
      </section>

      <section className="section ambassador-education-cta">
        <div className="shell ambassador-education-grid">
          <div className="ambassador-education-image">
            <Image src="/images/education-group.jpg" alt="Students meeting a REGI avian ambassador" fill sizes="(max-width: 800px) 100vw, 55vw" />
          </div>
          <div>
            <p className="eyebrow eyebrow-light">Meet them in person</p>
            <h2>Bring an ambassador to your learners.</h2>
            <p>
              Education programs feature four to six birds and adapt to your
              group&apos;s age, curriculum, and questions.
            </p>
            <Link className="button button-cream" href="/education">Explore education programs</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
