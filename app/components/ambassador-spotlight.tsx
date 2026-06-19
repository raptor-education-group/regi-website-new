"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ambassadors } from "../data/ambassadors";

const featuredSlugs = ["morrie", "jasper", "rosie", "leo", "fang"];
const featuredBirds = featuredSlugs.map(
  (slug) => ambassadors.find((bird) => bird.slug === slug)!,
);

export function AmbassadorSpotlight() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const bird = featuredBirds[active];

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % featuredBirds.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  function chooseBird(index: number) {
    setActive(index);
    setIsPaused(true);
  }

  function moveBird(direction: -1 | 1) {
    setActive(
      (current) =>
        (current + direction + featuredBirds.length) % featuredBirds.length,
    );
    setIsPaused(true);
  }

  return (
    <div className="ambassador-stage">
      <div className="ambassador-photo">
        <Image
          key={bird.image}
          src={bird.image}
          alt={`${bird.name}, ${bird.species} Avian Ambassador`}
          fill
          sizes="(max-width: 800px) 100vw, 55vw"
        />
        <div className="photo-index" aria-hidden="true">
          {String(active + 1).padStart(2, "0")} / {String(featuredBirds.length).padStart(2, "0")}
        </div>
        <div className="spotlight-controls" aria-label="Ambassador carousel controls">
          <button type="button" onClick={() => moveBird(-1)} aria-label="Previous ambassador">
            ←
          </button>
          <button type="button" onClick={() => setIsPaused((paused) => !paused)}>
            {isPaused ? "Play" : "Pause"}
          </button>
          <button type="button" onClick={() => moveBird(1)} aria-label="Next ambassador">
            →
          </button>
        </div>
      </div>

      <div className="ambassador-copy" aria-live={isPaused ? "polite" : "off"}>
        <p className="eyebrow eyebrow-light">Avian ambassador</p>
        <h3>{bird.name}</h3>
        <p className="species">{bird.species}</p>
        <p>{bird.fact}</p>

        <div className="bird-selectors" aria-label="Choose an avian ambassador">
          {featuredBirds.map((item, index) => (
            <button
              type="button"
              key={item.name}
              className={active === index ? "active" : ""}
              onClick={() => chooseBird(index)}
              aria-pressed={active === index}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.name}
            </button>
          ))}
        </div>

        <div className="ambassador-links">
          <Link className="text-link text-link-light" href={`/ambassadors#bird-${bird.slug}`}>
            Read {bird.name}&apos;s story <span aria-hidden="true">→</span>
          </Link>
          <Link className="text-link text-link-light" href="/ambassadors">
            Meet all 15 <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
