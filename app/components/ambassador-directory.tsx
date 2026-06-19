"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useSyncExternalStore } from "react";
import { ambassadors } from "../data/ambassadors";

function subscribeToHash(callback: () => void) {
  window.addEventListener("hashchange", callback);
  window.addEventListener("popstate", callback);
  return () => {
    window.removeEventListener("hashchange", callback);
    window.removeEventListener("popstate", callback);
  };
}

function getHash() {
  return window.location.hash.slice(1);
}

function getServerHash() {
  return "";
}

export function AmbassadorDirectory() {
  const hash = useSyncExternalStore(subscribeToHash, getHash, getServerHash);
  const activeBird = ambassadors.find((bird) => hash === `bird-${bird.slug}`);
  const closeRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!activeBird) return;

    document.body.classList.add("ambassador-modal-open");
    closeRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        window.location.hash = "ambassador-directory";
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("ambassador-modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeBird]);

  return (
    <>
      <div className="shell ambassador-directory">
        {ambassadors.map((bird, index) => (
          <article id={`profile-${bird.slug}`} key={bird.name}>
            <a
              className="ambassador-card-link"
              href={`#bird-${bird.slug}`}
              aria-haspopup="dialog"
              aria-label={`Learn more about ${bird.name}, ${bird.species}`}
            >
              <div className="ambassador-card-image">
                <Image
                  src={bird.image}
                  alt={`${bird.name}, ${bird.species} Avian Ambassador`}
                  fill
                  sizes="(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 25vw"
                />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h2>{bird.name}</h2>
              <p>{bird.species}</p>
              <span className="ambassador-card-action">Read {bird.name}&apos;s story →</span>
            </a>
          </article>
        ))}
      </div>

      {activeBird ? (
        <div className="ambassador-modal-layer">
          <a
            className="ambassador-modal-backdrop"
            href="#ambassador-directory"
            aria-label="Close ambassador story"
          />
          <section
            className="ambassador-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`ambassador-modal-title-${activeBird.slug}`}
          >
            <a
              ref={closeRef}
              className="ambassador-modal-close"
              href="#ambassador-directory"
              aria-label={`Close ${activeBird.name}'s story`}
            >
              <span aria-hidden="true">×</span>
            </a>
            <div className="ambassador-modal-image">
              <Image
                src={activeBird.image}
                alt={`${activeBird.name}, ${activeBird.species} Avian Ambassador`}
                fill
                priority
                sizes="(max-width: 760px) 100vw, 46vw"
              />
            </div>
            <div className="ambassador-modal-copy">
              <p className="eyebrow">Meet the ambassador</p>
              <h2 id={`ambassador-modal-title-${activeBird.slug}`}>{activeBird.name}</h2>
              <p className="ambassador-modal-species">{activeBird.species}</p>
              <p className="ambassador-modal-story">{activeBird.story}</p>
              <aside>
                <strong>Did you know?</strong>
                <p>{activeBird.fact}</p>
              </aside>
              <div className="ambassador-modal-actions">
                <Link className="button" href={`/shop/symbolic-adoption#choose-${activeBird.slug}`}>
                  Adopt {activeBird.name} <span>→</span>
                </Link>
                <a
                  className="text-link"
                  href={`https://www.raptoreducationgroup.org${activeBird.sourcePath}`}
                >
                  Original REGI profile <span>↗</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
