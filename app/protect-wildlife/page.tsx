import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Protect Wildlife at Home",
  alternates: { canonical: "/protect-wildlife" },
  openGraph: { title: "Protect Wildlife at Home" },
  twitter: { title: "Protect Wildlife at Home" },
  description:
    "Practical ways to create a safer backyard for native birds through habitat, clean water, responsible feeding, and collision prevention.",
};

const sanctuarySteps = [
  { title: "Let nature happen", text: "Landscape with native plants that provide seasonal food, shelter from predators, and cover from Wisconsin weather." },
  { title: "Offer clean water", text: "Place a shallow birdbath in shade when possible, scrub it regularly, and replace the water every two days." },
  { title: "Keep feeders clean", text: "Clean feeders and feeding areas at least weekly, discard wet or moldy seed, and wash your hands after filling or cleaning." },
  { title: "Build in shelter", text: "Place feeders near trees or shrubs and leave evergreens or a loose brush pile to provide year-round refuge." },
  { title: "Reduce window strikes", text: "Use exterior markers, screens, or closely spaced window treatments and place feeders very close to windows or well away from them." },
  { title: "Keep cats with you", text: "Keep companion cats indoors or use a leash or secure catio so both cats and native wildlife stay safer." },
];

export default function ProtectWildlifePage() {
  return (
    <main id="main-content">
      <section className="inner-hero wildlife-hero">
        <div className="inner-hero-copy">
          <p className="eyebrow">Conservation at home</p>
          <h1>Make your yard a safe sanctuary for birds.</h1>
          <p>Food, water, shelter, and a few thoughtful choices can turn an ordinary outdoor space into useful habitat.</p>
          <a className="button" href="#sanctuary-steps">Start with six steps <span>↓</span></a>
        </div>
        <div className="inner-hero-image">
          <Image src="/images/foster-owl.jpg" alt="Young great horned owls resting together" fill priority sizes="(max-width: 900px) 100vw, 53vw" />
        </div>
      </section>

      <section className="section sanctuary-section" id="sanctuary-steps">
        <div className="shell sanctuary-heading">
          <p className="eyebrow">A safer patch of the world</p>
          <h2>Healthy habitat is a daily practice.</h2>
        </div>
        <div className="shell sanctuary-grid">
          {sanctuarySteps.map((step, index) => (
            <article key={step.title}>
              <span>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section chemical-caution-section">
        <div className="shell chemical-caution-grid">
          <div><p className="eyebrow eyebrow-light">One more essential</p><h2>Birds and chemicals don&apos;t mix.</h2></div>
          <div>
            <p className="page-lead">Many pesticides, herbicides, rodenticides, and fungicides can harm birds directly—or remove the insects and prey their families depend on.</p>
            <p>Use the least-toxic approach available and keep chemicals away from places where birds feed, drink, bathe, nest, or rest.</p>
            <Link className="text-link text-link-light" href="/resources">Explore more conservation resources <span>→</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
