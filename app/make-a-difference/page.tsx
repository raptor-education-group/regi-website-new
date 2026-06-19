import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Make a Difference",
  description:
    "Volunteer, intern, choose lead-free alternatives, and use practical conservation resources to help native birds and REGI.",
};

const pathways = [
  {
    number: "01",
    title: "Volunteer",
    text: "Give reliable, practical help at the center or as part of REGI's rescue transport network.",
    href: "#volunteer",
  },
  {
    number: "02",
    title: "Intern",
    text: "Build hands-on experience in avian rehabilitation and environmental education.",
    href: "/careers#internships",
  },
  {
    number: "03",
    title: "Go lead free",
    text: "Protect scavengers and waterbirds by choosing non-lead ammunition and fishing tackle.",
    href: "#lead-free",
  },
  {
    number: "04",
    title: "Help at home",
    text: "Make everyday choices that create safer yards, waterways, and communities for wildlife.",
    href: "#resources",
  },
];

export default function MakeADifferencePage() {
  return (
    <main id="main-content">
      <section className="difference-hero">
        <div className="difference-hero-image">
          <Image
            src="/images/volunteers.jpg"
            alt="REGI volunteers working together outdoors"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="shell difference-hero-copy">
          <p className="eyebrow eyebrow-light">Make a difference</p>
          <h1>Wildlife needs more than good intentions.</h1>
          <p>
            It needs people who show up, learn, change a habit, share a skill,
            or make room for one more living thing.
          </p>
          <a className="button button-cream" href="#ways-to-help">
            Find your way to help <span>↓</span>
          </a>
        </div>
      </section>

      <section className="section difference-pathways-section" id="ways-to-help">
        <div className="shell difference-heading">
          <p className="eyebrow">Start where you are</p>
          <h2>Four useful ways forward.</h2>
        </div>
        <div className="shell difference-pathway-grid">
          {pathways.map((pathway) => (
            <Link href={pathway.href} key={pathway.number}>
              <span>{pathway.number}</span>
              <h3>{pathway.title}</h3>
              <p>{pathway.text}</p>
              <i aria-hidden="true">↘</i>
            </Link>
          ))}
        </div>
      </section>

      <section className="section difference-volunteer-section" id="volunteer">
        <div className="shell difference-volunteer-grid">
          <div className="difference-volunteer-image">
            <Image
              src="/images/rehabilitation.jpg"
              alt="Hands-on care work at REGI"
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </div>
          <div>
            <p className="eyebrow">Apply to volunteer</p>
            <h2>Be someone the team can count on.</h2>
            <p className="page-lead">
              Volunteers help with cleaning, maintenance, gardening,
              construction, fundraising, painting, bird transport, and the
              many unglamorous jobs that make excellent care possible.
            </p>
            <div className="volunteer-facts">
              <p><span>Age</span><strong>18 years or older</strong></p>
              <p><span>Best fit</span><strong>A regular, reliable schedule</strong></p>
              <p><span>Questions</span><a href="mailto:volunteer@raptoreducationgroup.org">volunteer@raptoreducationgroup.org</a></p>
            </div>
            <div className="inline-actions">
              <a className="button" href="/resources/volunteer-application.pdf">
                Volunteer application <span>↗</span>
              </a>
              <a className="text-link" href="/resources/volunteer-transporter-application.pdf">
                Transporter application <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section lead-free-section" id="lead-free">
        <div className="shell lead-free-grid">
          <div>
            <p className="eyebrow eyebrow-light">Going lead free</p>
            <h2>One material. A long chain of harm.</h2>
            <p className="page-lead-orange">
              Lead ammunition and fishing sinkers can poison wildlife long
              after a shot is fired or a line is lost.
            </p>
            <p>
              Loons and swans can ingest small lead tackle. Eagles and other
              scavengers can be poisoned when they feed on remains containing
              fragments of lead ammunition. Choosing non-lead alternatives is
              a direct, practical act of conservation.
            </p>
            <div className="lead-resource-links">
              <a href="https://www.sportingleadfree.org/the-why">Sporting Lead Free <span>↗</span></a>
              <a href="/resources/lead-in-the-environment.png">Lead in the Environment guide <span>↗</span></a>
              <Link href="/resources/poison-bullets">Lead ammunition &amp; wildlife <span>→</span></Link>
            </div>
          </div>
          <figure className="lead-free-image">
            <Image
              src="/images/lead-free-loon.jpeg"
              alt="Radiograph of a common loon showing ingested lead tackle"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
            />
            <figcaption>Common loon with ingested lead tackle</figcaption>
          </figure>
        </div>
      </section>

      <section className="section home-resources-section" id="resources">
        <div className="shell resources-heading">
          <p className="eyebrow">Conservation starts with you</p>
          <h2>Make the places around you safer for birds.</h2>
        </div>
        <div className="shell resource-list">
          <Link href="/protect-wildlife">
            <span>01</span><div><h3>Build a bird-safe backyard</h3><p>Offer healthy habitat while reducing common hazards around the home.</p></div><i>↗</i>
          </Link>
          <a href="/resources/keep-cats-indoors.pdf">
            <span>02</span><div><h3>Keep cats indoors</h3><p>Protect native wildlife while keeping companion cats safer, too.</p></div><i>↗</i>
          </a>
          <a href="/resources/dont-feed-waterfowl-bread.pdf">
            <span>03</span><div><h3>Skip bread for waterfowl</h3><p>Learn why bread causes harm and what to do instead.</p></div><i>↗</i>
          </a>
        </div>
      </section>

      <section className="page-cta">
        <div className="shell page-cta-grid">
          <p className="eyebrow eyebrow-light">Another direct path</p>
          <h2>Put resources behind the next recovery.</h2>
          <div>
            <Link className="button button-cream" href="/support">Support REGI</Link>
            <p>Money and supplies keep independent wildlife care available.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
