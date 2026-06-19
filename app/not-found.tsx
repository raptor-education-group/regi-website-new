import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page" id="main-content">
      <div className="shell not-found-grid">
        <div>
          <p className="eyebrow eyebrow-light">404 · Off the flight path</p>
          <h1>This page has flown the coop.</h1>
        </div>
        <div>
          <p>
            The page you were looking for may have moved, or the address may
            have a typo. The birds are still right where they belong.
          </p>
          <div className="not-found-actions">
            <Link className="button button-cream" href="/">
              Return home <span aria-hidden="true">→</span>
            </Link>
            <Link className="text-link text-link-light" href="/rescue">
              I found an injured bird <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
