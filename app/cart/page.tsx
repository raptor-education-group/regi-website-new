import type { Metadata } from "next";
import Link from "next/link";
import { getStoreUrl } from "../data/store-url";

export const metadata: Metadata = {
  title: "Your Cart",
  robots: { index: false, follow: false },
  description: "Continue to REGI's secure online store to review your cart and complete checkout.",
};

export default function CartPage() {
  return (
    <main id="main-content">
      <section className="cart-hero"><div className="shell"><p className="eyebrow eyebrow-light">REGI gift shop</p><h1>Your cart</h1><Link className="text-link text-link-light" href="/shop">Keep shopping <span>→</span></Link></div></section>
      <section className="section cart-section">
        <div className="shell secure-cart-handoff">
          <div>
            <p className="eyebrow">Secure REGI checkout</p>
            <h2>Your order is handled by the store REGI already trusts.</h2>
          </div>
          <div>
            <p className="page-lead">Continue to REGI&apos;s existing online store to review your selections, calculate shipping, and pay securely.</p>
            <p>No email request is necessary. Your paid order enters REGI&apos;s established fulfillment workflow immediately.</p>
            <a className="button" href={getStoreUrl("/cart")}>Open secure cart <span>↗</span></a>
          </div>
        </div>
      </section>
    </main>
  );
}
