import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Education Programs",
  description:
    "Bring REGI wildlife educators and avian ambassadors to your classroom, club, workplace, or community event.",
};

const outcomes = [
  {
    number: "01",
    title: "Meet live raptors",
    text: "Students meet four to six non-releasable avian ambassadors and observe details that photographs simply cannot show.",
  },
  {
    number: "02",
    title: "Think like a scientist",
    text: "They compare beaks, talons, wings, hearing, camouflage, and other adaptations to understand how each species survives.",
  },
  {
    number: "03",
    title: "Ask real questions",
    text: "Questions are welcome throughout the program, with dedicated time to follow students' curiosity wherever it leads.",
  },
  {
    number: "04",
    title: "Become a steward",
    text: "Every encounter closes with practical ways young people can protect birds, habitats, and the wild places around them.",
  },
];

export default function EducationPage() {
  return (
    <main id="main-content">
      <section className="inner-hero education-hero">
        <div className="inner-hero-copy">
          <p className="eyebrow">Education programs</p>
          <h1>Bring wild learning into the room.</h1>
          <p>
            Invite a REGI wildlife educator and avian ambassadors to turn your
            classroom, club, or community event into a close encounter with
            Wisconsin&apos;s remarkable birds.
          </p>
          <a className="button" href="#programs">
            Explore the programs <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="inner-hero-image">
          <Image
            src="/images/education-fonzie.jpg"
            alt="A REGI educator introducing students to Fonzie, a great horned owl"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 53vw"
          />
          <div className="image-caption">
            <span>Learning, eye to eye</span>
            <strong>Fonzie · Great Horned Owl</strong>
          </div>
        </div>
      </section>

      <section className="fact-ribbon" aria-label="Program facts">
        <div className="shell fact-ribbon-grid">
          <p><strong>4–6</strong><span>avian ambassadors</span></p>
          <p><strong>5+</strong><span>recommended ages</span></p>
          <p><strong>60</strong><span>minutes for core programs</span></p>
          <p><strong>Any</strong><span>curriculum or group</span></p>
        </div>
      </section>

      <section className="section page-intro-section">
        <div className="shell page-intro-grid">
          <div>
            <p className="eyebrow">What students experience</p>
            <h2>Wonder is where the lesson begins.</h2>
          </div>
          <div>
            <p className="page-lead">
              A live owl has a way of changing the room. Students lean in,
              notice more, ask better questions, and connect classroom ideas to
              a living animal standing just feet away.
            </p>
            <p>
              Programs can be adapted for formal or non-formal learning,
              specific grade levels, scout badges, environmental units, and
              accessibility needs. REGI recommends programs for ages five and
              up.
            </p>
          </div>
        </div>
        <div className="shell outcome-grid">
          {outcomes.map((outcome) => (
            <article key={outcome.number}>
              <span>{outcome.number}</span>
              <h3>{outcome.title}</h3>
              <p>{outcome.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section program-detail-section" id="programs">
        <div className="shell">
          <div className="section-heading split-heading page-split-heading">
            <div>
              <p className="eyebrow eyebrow-light">Choose your encounter</p>
              <h2>Three ways to bring REGI closer.</h2>
            </div>
            <p>
              Each experience is led by a wildlife educator, features live
              ambassadors, and makes room for questions and conversation.
            </p>
          </div>
          <div className="program-option-grid">
            <article>
              <span className="option-number">01</span>
              <p className="eyebrow eyebrow-light">About 60 minutes</p>
              <h3>Winged Wonders</h3>
              <p>
                Meet an owl face to face—and perhaps a hawk or falcon too.
                Students discover what makes a raptor, hear each bird&apos;s story,
                and learn how to keep these species part of our ecosystem.
              </p>
              <ul>
                <li>Broad introduction to Wisconsin raptors</li>
                <li>Excellent for first-time groups</li>
                <li>Adaptable across subjects and grade levels</li>
              </ul>
            </article>
            <article>
              <span className="option-number">02</span>
              <p className="eyebrow eyebrow-light">About 60 minutes</p>
              <h3>Night Moves</h3>
              <p>
                Enter the world of owls. Explore silent flight, extraordinary
                hearing, low-light vision, and the features that make these
                secretive nighttime hunters so effective.
              </p>
              <ul>
                <li>Focused owl adaptations</li>
                <li>Ideal for nocturnal animal or senses units</li>
                <li>Observation-led questions and discussion</li>
              </ul>
            </article>
            <article>
              <span className="option-number">03</span>
              <p className="eyebrow eyebrow-light">One to three hours</p>
              <h3>Booth Events</h3>
              <p>
                Add a memorable wildlife encounter to a festival, conference,
                family day, or community celebration with REGI educators and
                selected avian ambassadors.
              </p>
              <ul>
                <li>Flexible, come-and-go format</li>
                <li>Works for mixed-age audiences</li>
                <li>Great for public and corporate events</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section story-gallery-section">
        <div className="shell gallery-heading">
          <p className="eyebrow">See curiosity take flight</p>
          <h2>Not just a presentation. An experience they remember.</h2>
        </div>
        <div className="shell education-gallery">
          <figure className="gallery-wide">
            <Image
              src="/images/education-group.jpg"
              alt="Students gathered around a REGI educator and avian ambassador"
              fill
              sizes="(max-width: 800px) 100vw, 62vw"
            />
            <figcaption>Questions are encouraged from the first feather to the last.</figcaption>
          </figure>
          <figure>
            <Image
              src="/images/camp-activity.jpg"
              alt="Children participating in a hands-on nature activity at REGI"
              fill
              sizes="(max-width: 800px) 100vw, 32vw"
            />
            <figcaption>Hands-on nature learning keeps young minds moving.</figcaption>
          </figure>
          <figure>
            <Image
              src="/images/foster-owl.jpg"
              alt="Young great horned owls with an adult foster owl at REGI"
              fill
              sizes="(max-width: 800px) 100vw, 32vw"
            />
            <figcaption>Real stories connect animal behavior to compassionate care.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section planning-section">
        <div className="shell planning-grid">
          <div>
            <p className="eyebrow">Plan your program</p>
            <h2>Tell us what your learners need.</h2>
          </div>
          <div className="planning-details">
            <div><span>Audience</span><strong>Schools, scouts, clubs, churches, workplaces &amp; events</strong></div>
            <div><span>Timing</span><strong>Programs cannot begin before 9:00 a.m.</strong></div>
            <div><span>Contact</span><strong>Education office · 715-623-2563</strong></div>
            <p>
              Share your group size, ages, location, preferred dates, and what
              you are studying. REGI&apos;s education team will help shape the
              right experience.
            </p>
            <div className="planning-actions">
              <a className="button" href="tel:+17156232563">Call education</a>
              <a className="text-link" href="mailto:education@raptoreducationgroup.org?subject=Education%20Program%20Inquiry">
                Start an inquiry <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
