"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
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

export function AdoptionBirdChooser({ storeHref }: { storeHref: string }) {
  const hash = useSyncExternalStore(subscribeToHash, getHash, getServerHash);
  const linkedSlug = hash.startsWith("choose-") ? hash.slice(7) : "";
  const [chosenSlug, setChosenSlug] = useState("");
  const chooserRef = useRef<HTMLDivElement>(null);
  const selectedBird =
    ambassadors.find((bird) => bird.slug === chosenSlug) ??
    ambassadors.find((bird) => bird.slug === linkedSlug) ??
    ambassadors[0];

  useEffect(() => {
    if (!linkedSlug || !ambassadors.some((bird) => bird.slug === linkedSlug)) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.requestAnimationFrame(() => {
      chooserRef.current?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  }, [linkedSlug]);

  return (
    <div className="adoption-product-experience" id="adoption-chooser" ref={chooserRef}>
      <div className="adoption-product-visuals" aria-live="polite">
        <figure className="adoption-selected-bird">
          <Image
            key={selectedBird.slug}
            src={selectedBird.image}
            alt={`${selectedBird.name}, ${selectedBird.species} Avian Ambassador`}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 38vw"
          />
          <figcaption>
            <span>Your ambassador</span>
            <strong>{selectedBird.name}</strong>
            <small>{selectedBird.species}</small>
          </figcaption>
        </figure>
        <figure className="adoption-packet-preview">
          <div>
            <Image
              src="/images/shop/symbolic-adoption.webp"
              alt="REGI symbolic adoption packet with certificate, bird portrait, and biography"
              fill
              sizes="(max-width: 900px) 55vw, 18vw"
            />
          </div>
          <figcaption>Certificate · Portrait · Biography</figcaption>
        </figure>
      </div>

      <div className="adoption-selection-panel">
        <p className="eyebrow">Choose your ambassador</p>
        <h2>Who would you like to support?</h2>
        <p>
          Pick a bird to see their portrait here. Your mailed adoption packet
          will feature the ambassador you confirm during secure checkout.
        </p>

        <label htmlFor="adoption-bird-select">
          <span>Avian Ambassador</span>
          <select
            id="adoption-bird-select"
            value={selectedBird.slug}
            onChange={(event) => setChosenSlug(event.target.value)}
          >
            {ambassadors.map((bird) => (
              <option key={bird.slug} value={bird.slug}>
                {bird.name} — {bird.species}
              </option>
            ))}
          </select>
        </label>

        <div className="adoption-selected-summary">
          <span>Currently viewing</span>
          <p>
            <strong>{selectedBird.name}</strong> · {selectedBird.species}
          </p>
          <Link href={`/ambassadors#bird-${selectedBird.slug}`}>
            Read {selectedBird.name}&apos;s story →
          </Link>
        </div>

        <div className="adoption-checkout-actions">
          <a className="button" href={storeHref}>
            Continue to secure adoption <span>↗</span>
          </a>
          <p>
            REGI&apos;s existing online store securely handles the final bird
            selection, payment, shipping, and receipt.
          </p>
        </div>
      </div>
    </div>
  );
}
