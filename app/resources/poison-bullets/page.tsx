import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lead Ammunition & Wildlife",
  alternates: { canonical: "/resources/poison-bullets" },
  openGraph: { title: "Lead Ammunition & Wildlife" },
  twitter: { title: "Lead Ammunition & Wildlife" },
  description:
    "Understand how lead ammunition fragments poison eagles and other scavengers—and how voluntary lead-free choices protect wildlife.",
};

export default function PoisonBulletsPage() {
  return (
    <main id="main-content">
      <article className="lead-article">
        <header className="lead-article-header">
          <div className="shell">
            <p className="eyebrow eyebrow-light">Lead-free conservation</p>
            <h1>What happens after the shot matters.</h1>
            <p>
              A conservation explainer inspired by Ted Williams&apos; “Poison
              Bullets,” originally published in the September 2023 Big Game
              issue of <em>Gray&apos;s Sporting Journal</em>.
            </p>
          </div>
        </header>
        <div className="shell lead-article-grid">
          <div className="lead-article-image">
            <div className="fill-image-frame">
              <Image src="/images/lead-free-loon.jpeg" alt="Radiograph showing ingested lead tackle inside a common loon" fill priority sizes="(max-width: 900px) 100vw, 42vw" />
            </div>
          </div>
          <div className="lead-article-copy">
            <p className="page-lead">Lead does not disappear when it enters the landscape. It breaks into fragments, moves through food webs, and can turn an otherwise healthy bird into a critical patient.</p>
            <h2>How raptors are exposed</h2>
            <p>Eagles, vultures, and other scavengers feed on gut piles, unrecovered game, and carcasses. Tiny fragments of lead ammunition can remain in that tissue, even when they are too small to see or remove.</p>
            <h2>Why a small dose is serious</h2>
            <p>Lead affects the nervous and digestive systems. Birds may become weak, uncoordinated, unable to fly, or unable to process food. Treatment is difficult, expensive, and not always successful.</p>
            <h2>A voluntary solution</h2>
            <p>Non-lead ammunition and fishing tackle prevent exposure at the source. Hunters and anglers can protect the wildlife that shares the landscape without stepping away from their traditions.</p>
            <div className="article-actions">
              <a className="button" href="https://www.sportingleadfree.org/the-why-overview">Explore Sporting Lead Free <span>↗</span></a>
              <Link className="text-link" href="/resources">Back to resources <span>→</span></Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
