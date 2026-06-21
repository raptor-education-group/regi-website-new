"use client";

import { FormEvent, useRef, useState } from "react";

export function NewsletterFooterForm() {
  const [email, setEmail] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.dispatchEvent(new CustomEvent("regi:newsletter-open", {
      detail: { email, opener: buttonRef.current },
    }));
  }

  return (
    <form className="footer-newsletter-form" onSubmit={handleSubmit}>
      <label htmlFor="footer-newsletter-email">Email address</label>
      <div>
        <input
          id="footer-newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <button ref={buttonRef} type="submit">Join <span aria-hidden="true">→</span></button>
      </div>
    </form>
  );
}
