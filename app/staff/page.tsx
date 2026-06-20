import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meet the Staff",
  alternates: { canonical: "/staff" },
  openGraph: { title: "Meet the Staff" },
  twitter: { title: "Meet the Staff" },
  description:
    "Meet the rehabilitation and education professionals who care for REGI's patients, ambassadors, and community programs.",
};

const staff = [
  {
    name: "Marge Gibson",
    role: "Founder & Executive Director",
    image: "/images/staff-marge.webp",
    alt: "REGI founders Don and Marge Gibson with a snowy owl",
    email: "marge@raptoreducationgroup.org",
    bio: "Marge co-founded REGI in 1990 after years of field biology work, including service with the California Condor Recovery Team and bald eagle health assessment work following the Exxon Valdez oil spill. She also teaches wildlife rehabilitation internationally.",
  },
  {
    name: "Samantha Brooks",
    role: "Assistant Director & Director of Education",
    image: "/images/staff-samantha.webp",
    alt: "Samantha Brooks holding a barred owl",
    email: "samantha@raptoreducationgroup.org",
    bio: "Samantha joined REGI in 2022 after earning a degree in Wildlife and Natural Resource Conservation and serving with AmeriCorps. She leads education experiences that use non-releasable raptors to build lasting connections with the natural world.",
  },
  {
    name: "Cinna Smallwood",
    role: "Wildlife Educator",
    image: "/images/staff-cinna.webp",
    alt: "Cinna Smallwood holding an American crow",
    email: "cinna@raptoreducationgroup.org",
    bio: "A former REGI intern, Cinna returned as a wildlife educator in 2023 after earning a degree in Wildlife Education. He combines teaching, ambassador care, illustration, and design to help people see their place in the living world.",
  },
  {
    name: "Adam Scott",
    role: "Avian Rehabilitation Technician",
    image: "/images/staff-adam.webp",
    alt: "Adam Scott holding a great horned owl",
    bio: "Adam earned his degree in Environmental Science in 2024, then completed a fall internship at REGI. He returned as a full-time team member in January 2025 to help provide the skilled, species-specific care every patient needs.",
  },
];

export default function StaffPage() {
  return (
    <main id="main-content">
      <section className="people-hero">
        <div className="shell people-hero-grid">
          <div>
            <p className="eyebrow eyebrow-light">The people behind the mission</p>
            <h1>Meet the team that keeps care moving.</h1>
          </div>
          <p>
            A small, deeply experienced staff connects clinic care, wildlife
            education, rescue coordination, and the daily work of running an
            independent nonprofit.
          </p>
        </div>
      </section>

      <nav className="subnav-bar" aria-label="About REGI">
        <div className="shell">
          <Link href="/about">Our story</Link>
          <Link className="active" href="/staff">Staff</Link>
          <Link href="/board">Board</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      <section className="section staff-intro-section">
        <div className="shell page-intro-grid">
          <div>
            <p className="eyebrow">Care is a team practice</p>
            <h2>Expertise with muddy boots.</h2>
          </div>
          <div>
            <p className="page-lead">
              REGI&apos;s work calls for clinical judgment, patience, clear
              teaching, practical problem-solving, and a willingness to meet
              each day exactly as it arrives.
            </p>
            <p>
              Staff work alongside interns, volunteers, veterinarians, board
              members, rescuers, and supporters to give native birds the best
              possible path forward.
            </p>
          </div>
        </div>
      </section>

      <section className="section staff-directory-section" id="team">
        <div className="shell staff-directory">
          {staff.map((person, index) => (
            <article className="staff-card" key={person.name}>
              <div className="staff-card-image">
                <Image
                  src={person.image}
                  alt={person.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
                />
                <span>0{index + 1}</span>
              </div>
              <div className="staff-card-copy">
                <p>{person.role}</p>
                <h2>{person.name}</h2>
                <p>{person.bio}</p>
                {person.email ? (
                  <a className="text-link" href={`mailto:${person.email}`}>
                    Email {person.name.split(" ")[0]} <span>→</span>
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="team-join-section">
        <div className="shell team-join-grid">
          <div>
            <p className="eyebrow eyebrow-light">Work with us</p>
            <h2>Bring your care, curiosity, and follow-through.</h2>
          </div>
          <div>
            <p>
              Explore staff opportunities, seasonal internships, or a regular
              volunteer commitment with REGI.
            </p>
            <div className="inline-actions">
              <Link className="button button-cream" href="/careers">
                Careers &amp; internships
              </Link>
              <Link className="text-link text-link-light" href="/make-a-difference#volunteer">
                Volunteer <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
