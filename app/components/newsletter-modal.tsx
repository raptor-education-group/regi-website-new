"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { siteConfig } from "../lib/site-config";

const DISMISSED_KEY = "regi-newsletter-prompt-dismissed";
const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;

export function NewsletterModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const dialogRef = useRef<HTMLElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const openModal = useCallback((opener?: HTMLElement | null) => {
    openerRef.current = opener ??
      (document.activeElement instanceof HTMLElement ? document.activeElement : null);
    setOpen(true);
  }, []);

  const closeModal = useCallback((remember = false) => {
    if (remember) localStorage.setItem(DISMISSED_KEY, String(Date.now()));
    setOpen(false);
  }, []);

  useEffect(() => {
    function handleTrigger(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const trigger = target.closest<HTMLElement>("[data-newsletter-open]");
      if (!trigger) return;
      event.preventDefault();
      openModal(trigger);
    }

    function handleSignupRequest(event: Event) {
      const detail = (event as CustomEvent<{ email?: string; opener?: HTMLElement | null }>).detail;
      if (detail?.email) setEmail(detail.email);
      openModal(detail?.opener);
    }

    document.addEventListener("click", handleTrigger);
    document.addEventListener("regi:newsletter-open", handleSignupRequest);

    const dismissedAt = Number(localStorage.getItem(DISMISSED_KEY) || 0);
    const shouldPrompt = !dismissedAt || Date.now() - dismissedAt > THIRTY_DAYS;
    const timer = shouldPrompt
      ? window.setTimeout(() => {
          const latestDismissal = Number(localStorage.getItem(DISMISSED_KEY) || 0);
          const wasRecentlyDismissed = latestDismissal && Date.now() - latestDismissal <= THIRTY_DAYS;
          if (!wasRecentlyDismissed && !document.body.classList.contains("newsletter-modal-open")) {
            openModal(null);
          }
        }, 9000)
      : undefined;

    return () => {
      document.removeEventListener("click", handleTrigger);
      document.removeEventListener("regi:newsletter-open", handleSignupRequest);
      if (timer) window.clearTimeout(timer);
    };
  }, [openModal]);

  useEffect(() => {
    if (!open) return;

    document.body.classList.add("newsletter-modal-open");
    emailRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeModal(true);
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'input, button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("newsletter-modal-open");
      window.removeEventListener("keydown", handleKeyDown);
      openerRef.current?.focus();
    };
  }, [closeModal, open]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent("Taking Flight Newsletter Signup");
    const body = encodeURIComponent(
      `Please add ${email} to the Taking Flight newsletter list.`,
    );
    localStorage.setItem(DISMISSED_KEY, String(Date.now()));
    window.location.href = `mailto:${siteConfig.education.email}?subject=${subject}&body=${body}`;
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="newsletter-modal-layer">
      <button
        className="newsletter-modal-backdrop"
        type="button"
        aria-label="Close newsletter signup"
        onClick={() => closeModal(true)}
      />
      <section
        className="newsletter-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="newsletter-modal-title"
        ref={dialogRef}
      >
        <button
          className="newsletter-modal-close"
          type="button"
          aria-label="Close newsletter signup"
          onClick={() => closeModal(true)}
        >
          <span aria-hidden="true">×</span>
        </button>
        <div className="newsletter-modal-mark" aria-hidden="true">
          <span>Taking</span>
          <strong>Flight</strong>
          <small>News from REGI</small>
        </div>
        <div className="newsletter-modal-copy">
          <p className="eyebrow">Stay close to the work</p>
          <h2 id="newsletter-modal-title">Wild stories, delivered gently.</h2>
          <p>
            Receive new patient stories, releases, education updates, events,
            and practical ways to help Wisconsin&apos;s native birds.
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="newsletter-email">Email address</label>
            <div>
              <input
                ref={emailRef}
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <button className="button" type="submit">Join the list</button>
            </div>
          </form>
          <small>
            Until REGI&apos;s automated mailing connection is enabled, this opens a
            pre-addressed email request. No address is stored by this website.
          </small>
          {siteConfig.external.newsletterSignup ? (
            <a className="text-link" href={siteConfig.external.newsletterSignup}>
              Use REGI&apos;s mailing-list form <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>
      </section>
    </div>
  );
}
