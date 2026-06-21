"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const staggerSelectors = [
  ".action-grid",
  ".image-stat-grid",
  ".process-grid",
  ".program-list",
  ".rescue-steps",
  ".faq-list",
  ".fact-ribbon-grid",
  ".outcome-grid",
  ".program-option-grid",
  ".education-gallery",
  ".planning-details",
  ".visit-tour-details",
  ".visit-experience-grid",
  ".camp-page-session-grid",
  ".camp-experience-images",
  ".mission-grid",
  ".credentials-grid",
  ".giving-grid",
  ".adoption-includes-grid",
  ".adoption-portrait-grid",
  ".ambassador-directory",
  ".shop-grid",
  ".related-products-grid",
  ".resource-download-list",
  ".resource-list",
  ".difference-pathway-grid",
  ".staff-grid",
  ".board-grid",
  ".shop-trust-strip > div",
].join(",");

const mediaSelectors = [
  "main figure:not(.adoption-selected-bird):not(.adoption-packet-preview)",
  ".founders-image",
  ".program-image",
  ".ambassador-photo",
  ".volunteer-image",
  ".rehab-story-image",
  ".giving-shop-image",
  ".lead-article-image",
  ".ambassador-education-image",
  ".adoption-hero-image",
].join(",");

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const main = document.querySelector<HTMLElement>("main");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!main) return;

    let routeArrivalTimer: number | undefined;

    if (!reduceMotion && !("startViewTransition" in document)) {
      main.classList.add("route-arriving");
      routeArrivalTimer = window.setTimeout(() => {
        main.classList.remove("route-arriving");
      }, 280);
    }

    if (reduceMotion || !("IntersectionObserver" in window)) {
      return () => {
        if (routeArrivalTimer !== undefined) window.clearTimeout(routeArrivalTimer);
        main.classList.remove("route-arriving");
      };
    }

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { rootMargin: "0px 0px -9% 0px", threshold: 0.08 },
    );

    const elementObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 },
    );

    const sections = Array.from(main.querySelectorAll<HTMLElement>(":scope > section"));
    sections.forEach((section, index) => {
      section.classList.add(index === 0 ? "motion-hero" : "motion-section");
      section.classList.add(`motion-direction-${index % 3}`);

      Array.from(section.children).forEach((child) => {
        if (child instanceof HTMLElement) child.classList.add("motion-layer");
      });

      sectionObserver.observe(section);
    });

    main.querySelectorAll<HTMLElement>(staggerSelectors).forEach((group) => {
      Array.from(group.children).forEach((child, index) => {
        if (!(child instanceof HTMLElement)) return;
        child.classList.add("motion-item");
        child.style.setProperty("--motion-delay", `${Math.min(index % 5, 4) * 70}ms`);
        elementObserver.observe(child);
      });
    });

    main.querySelectorAll<HTMLElement>(mediaSelectors).forEach((media) => {
      media.classList.add("motion-media");
      elementObserver.observe(media);
    });

    document.documentElement.classList.add("motion-enabled");

    return () => {
      if (routeArrivalTimer !== undefined) window.clearTimeout(routeArrivalTimer);
      sectionObserver.disconnect();
      elementObserver.disconnect();
      document.documentElement.classList.remove("motion-enabled");
      main.classList.remove("route-arriving");
      main
        .querySelectorAll<HTMLElement>(
          ".motion-hero, .motion-section, .motion-layer, .motion-item, .motion-media, .is-visible",
        )
        .forEach((element) => {
          element.classList.remove(
            "motion-hero",
            "motion-section",
            "motion-layer",
            "motion-item",
            "motion-media",
            "motion-direction-0",
            "motion-direction-1",
            "motion-direction-2",
            "is-visible",
          );
          element.style.removeProperty("--motion-delay");
        });
    };
  }, [pathname]);

  return null;
}
