import Image from "next/image";
import Link from "next/link";
import { AmbassadorSpotlight } from "./components/ambassador-spotlight";

const programCards = [
  {
    number: "01",
    kicker: "June · July · August",
    title: "Raptor Tours",
    description:
      "Walk the REGI grounds with an educator and meet hawks, owls, falcons, vultures, and other ambassadors up close.",
    detail: "50–60 min · Pre-registration required",
    image: "/images/raptor-tour.jpg",
    alt: "Visitors meeting an owl during a REGI raptor tour",
    href: "/visit#raptor-tours",
    label: "Plan a tour",
  },
  {
    number: "02",
    kicker: "Bring REGI to your group",
    title: "Education Programs",
    description:
      "Invite a wildlife educator and four to six avian ambassadors to your school, club, workplace, or community event.",
    detail: "Ages 5+ · Adaptable to your curriculum",
    image: "/images/education-fonzie.jpg",
    alt: "A REGI educator presenting with a great horned owl",
    href: "/education",
    label: "Explore student programs",
  },
  {
    number: "03",
    kicker: "Summer 2026",
    title: "Raptor Adventures Camp",
    description:
      "A week of live birds, nature exploration, games, wildlife study, and art—designed to grow curious young naturalists.",
    detail: "Ages 7–13 · Scholarships available",
    image: "/images/summer-camp.jpg",
    alt: "Children and educators at REGI Raptor Adventures Summer Camp",
    href: "/visit#summer-camp",
    label: "See camp details",
  },
];

export default function Home() {
  return (
    <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="hero-copy-inner">
              <p className="eyebrow">Wildlife rehabilitation · Antigo, WI</p>
              <h1 id="hero-title">
                Every wild bird deserves a <em>second flight.</em>
              </h1>
              <p className="hero-intro">
                We rescue and rehabilitate Wisconsin&apos;s native birds, advance
                avian care, and inspire people to protect the wild world we
                share.
              </p>
              <div className="hero-actions">
                <Link className="button" href="/about">
                  Discover our work <span aria-hidden="true">↓</span>
                </Link>
                <Link className="text-link" href="/rescue">
                  I found an injured bird <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="hero-note">
              <span className="wing-mark" aria-hidden="true">
                〽
              </span>
              <p>
                <strong>Helping wildlife become wild once more.</strong>
                <span>Since 1990</span>
              </p>
            </div>
          </div>

          <div className="hero-image">
            <Image
              src="/images/eagle-release.jpg"
              alt="A rehabilitated bald eagle flying over open water after release"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 55vw"
            />
            <div className="image-caption">
              <span>Back where they belong</span>
              <strong>Release day</strong>
            </div>
          </div>
        </section>

        <section className="action-deck" aria-label="Quick actions">
          <div className="shell action-grid">
            <Link className="action-card urgent" href="/rescue">
              <span className="action-number">Urgent help</span>
              <h2>Found an injured bird?</h2>
              <p>Start here for safe capture, containment, and transport.</p>
              <span className="round-arrow" aria-hidden="true">→</span>
            </Link>
            <Link
              className="action-card"
              href="/education"
            >
              <span className="action-number">Education</span>
              <h2>Bring raptors to your group</h2>
              <p>Programs for schools, clubs, workplaces, and events.</p>
              <span className="round-arrow" aria-hidden="true">→</span>
            </Link>
            <Link
              className="action-card"
              href="/visit"
            >
              <span className="action-number">Seasonal visits</span>
              <h2>Meet the ambassadors</h2>
              <p>Reserve an outdoor Raptor Tour in June, July, or August.</p>
              <span className="round-arrow" aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="intro-section section" id="about">
          <div className="shell intro-grid">
            <div className="intro-heading">
              <p className="eyebrow">More than a rescue</p>
              <h2>Where science, care, and wonder take wing.</h2>
            </div>
            <div className="intro-body">
              <p className="lead">
                Raptor Education Group, Inc. is a 501(c)(3) nonprofit dedicated
                to the care and rehabilitation of injured or orphaned native
                birds—and to helping people understand why their future matters.
              </p>
              <p>
                Founded in 1990 by Marge Gibson and her late husband, Don, REGI
                has grown from an education and field-research organization into
                one of northern Wisconsin&apos;s essential avian rehabilitation
                centers.
              </p>
              <Link className="text-link" href="/about">
                See how rehabilitation works <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>

          <div className="shell image-stat-grid">
            <div className="founders-image">
              <Image
                src="/images/founders.jpg"
                alt="REGI founders Don and Marge Gibson with a turkey vulture"
                fill
                sizes="(max-width: 800px) 100vw, 58vw"
              />
              <p>Don &amp; Marge Gibson · REGI founders</p>
            </div>
            <div className="impact-card">
              <p className="eyebrow eyebrow-light">Annual impact</p>
              <strong>800–1,000+</strong>
              <span>birds admitted for care each year</span>
              <div className="impact-rule" />
              <p>
                Licensed by the State of Wisconsin and the U.S. Fish &amp;
                Wildlife Service.
              </p>
            </div>
          </div>
        </section>

        <section className="work-section section" id="our-work">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow eyebrow-light">Our work</p>
                <h2>From rescue to release.</h2>
              </div>
              <p>
                Every patient receives species-specific care rooted in natural
                history, modern rehabilitation methods, and one unwavering goal:
                a safe return to the wild.
              </p>
            </div>

            <div className="process-grid">
              <article>
                <span>01</span>
                <h3>Rescue</h3>
                <p>
                  Our clinic and volunteer transport network help injured and
                  orphaned native birds reach specialized care quickly.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Rehabilitate</h3>
                <p>
                  Nutrition, medical treatment, conditioning, and thoughtful
                  husbandry give each bird its strongest possible chance.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Release</h3>
                <p>
                  When a patient is healthy, strong, and ready, it returns to the
                  habitat and freedom it was made for.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="programs-section section" id="visit">
          <div className="shell">
            <div className="section-heading programs-heading">
              <div>
                <p className="eyebrow">Visit · Learn · Wonder</p>
                <h2>Wild encounters.<br />Lasting connections.</h2>
              </div>
              <p>
                REGI&apos;s non-releasable avian ambassadors turn curiosity into
                understanding—one close encounter at a time.
              </p>
            </div>

            <div className="program-list">
              {programCards.map((program) => (
                <article className="program-card" key={program.number}>
                  <div className="program-image">
                    <Image
                      src={program.image}
                      alt={program.alt}
                      fill
                      sizes="(max-width: 800px) 100vw, 38vw"
                    />
                    <span>{program.number}</span>
                  </div>
                  <div className="program-copy">
                    <p className="eyebrow">{program.kicker}</p>
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                    <div className="program-meta">{program.detail}</div>
                    <Link className="text-link" href={program.href}>
                      {program.label} <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ambassadors-section" id="ambassadors">
          <div className="shell ambassadors-heading">
            <p className="eyebrow eyebrow-light">Meet the team with feathers</p>
            <h2>Wild stories, shared up close.</h2>
            <p>
              REGI&apos;s permanent residents cannot return to the wild, but they
              play a vital role: helping people see native birds differently.
            </p>
          </div>
          <AmbassadorSpotlight />
        </section>

        <section className="rescue-section section" id="rescue-help">
          <div className="shell rescue-grid">
            <div className="rescue-callout">
              <p className="eyebrow">Bird emergency</p>
              <h2>Pause. Protect. Then call.</h2>
              <p>
                Raptors protect themselves with powerful talons. If you can
                safely help, keep the bird calm, contained, and on its way to a
                licensed rehabilitator.
              </p>
              <a className="phone-link" href="tel:+17156234015">
                <span>Clinic · 8am–4pm daily</span>
                715-623-4015
              </a>
              <p className="small-note">
                Please call before bringing a bird to REGI. The facility is not
                open for unscheduled public visits.
              </p>
            </div>

            <div className="rescue-steps">
              <article>
                <span>01</span>
                <div>
                  <h3>Cover completely</h3>
                  <p>
                    Calmly approach from behind if possible and cover the entire
                    bird with a towel, blanket, or lightweight jacket.
                  </p>
                </div>
              </article>
              <article>
                <span>02</span>
                <div>
                  <h3>Contain safely</h3>
                  <p>
                    Place the bird in a ventilated cardboard box lined with a
                    towel. Never use a wire cage. Keep it quiet, warm, and dark.
                  </p>
                </div>
              </article>
              <article>
                <span>03</span>
                <div>
                  <h3>Call and transport</h3>
                  <p>
                    Note where the bird was found and call REGI. Never transport
                    a bird in a trunk or open pickup bed.
                  </p>
                </div>
              </article>
              <Link
                className="text-link"
                href="/rescue"
              >
                Read the complete rescue guide <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="support-section section">
          <div className="shell support-grid">
            <div>
              <p className="eyebrow eyebrow-light">Powered by people like you</p>
              <h2>Your support gives wild birds another chance.</h2>
            </div>
            <div className="support-copy">
              <p>
                REGI receives no state or federal operating support. Donations
                from people and businesses fund food, medicine, safe housing,
                transportation, and the expert care each patient needs.
              </p>
              <div className="support-actions">
                <Link
                  className="button button-cream"
                  href="/support"
                >
                  Make a donation <span aria-hidden="true">↗</span>
                </Link>
                <Link
                  className="text-link text-link-light"
                  href="/support#volunteer"
                >
                  Volunteer your time <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section section">
          <div className="shell faq-grid">
            <div>
              <p className="eyebrow">Good to know</p>
              <h2>Before you visit or call.</h2>
            </div>
            <div className="faq-list">
              <details>
                <summary>Can I visit the rehabilitation clinic?</summary>
                <p>
                  The clinic and patient enclosures are not open to the public.
                  Seasonal Raptor Tours offer a guided way to visit and meet
                  REGI&apos;s avian ambassadors.
                </p>
              </details>
              <details>
                <summary>How do I get an update on a patient?</summary>
                <p>
                  Email updates@raptoreducationgroup.org with the species, where
                  it was found, and the date it was brought in.
                </p>
              </details>
              <details>
                <summary>Can REGI bring birds to my school or event?</summary>
                <p>
                  Yes. Education programs feature four to six ambassadors and
                  can be adapted for formal or informal groups ages five and up.
                  Call 715-623-2563 to begin planning.
                </p>
              </details>
            </div>
          </div>
        </section>
    </main>
  );
}
