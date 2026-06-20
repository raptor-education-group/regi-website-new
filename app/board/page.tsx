import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Board",
  alternates: { canonical: "/board" },
  openGraph: { title: "Our Board" },
  twitter: { title: "Our Board" },
  description:
    "Meet the volunteer Board of Directors providing governance, guidance, and support for Raptor Education Group, Inc.",
};

const board = [
  { name: "Tracey Grimek", role: "Board President" },
  { name: "Steve Fisher", role: "Vice President" },
  { name: "Megan Ackley", role: "Board Secretary" },
  { name: "Carrie Asplund", role: "Treasurer" },
];

export default function BoardPage() {
  return (
    <main id="main-content">
      <section className="people-hero board-hero">
        <div className="shell people-hero-grid">
          <div>
            <p className="eyebrow eyebrow-light">Volunteer leadership</p>
            <h1>Guidance that keeps the mission strong.</h1>
          </div>
          <p>
            REGI&apos;s Board of Directors provides governance, perspective,
            stewardship, and steady support for the people doing the work.
          </p>
        </div>
      </section>

      <nav className="subnav-bar" aria-label="About REGI">
        <div className="shell">
          <Link href="/about">Our story</Link>
          <Link href="/staff">Staff</Link>
          <Link className="active" href="/board">Board</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      <section className="section board-section">
        <div className="shell board-heading">
          <p className="eyebrow">Board of Directors</p>
          <h2>Service, oversight, and a shared belief in the work.</h2>
        </div>
        <div className="shell board-grid">
          {board.map((member, index) => (
            <article key={member.name}>
              <span>0{index + 1}</span>
              <p>{member.role}</p>
              <h2>{member.name}</h2>
            </article>
          ))}
        </div>
        <div className="shell board-contact">
          <p>
            Need to reach REGI&apos;s board? Board correspondence can be sent
            directly to the officers.
          </p>
          <a className="button" href="mailto:board@raptoreducationgroup.org">
            Email the board
          </a>
        </div>
      </section>

      <section className="page-cta">
        <div className="shell page-cta-grid">
          <p className="eyebrow eyebrow-light">The daily work</p>
          <h2>Meet the people caring, teaching, and coordinating.</h2>
          <div>
            <Link className="button button-cream" href="/staff">Meet the staff</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
