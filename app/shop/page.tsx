import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { formatPrice, shopProducts } from "../data/shop-products";
import { getStoreUrl } from "../data/store-url";

export const metadata: Metadata = {
  title: "REGI Gift Shop",
  alternates: { canonical: "/shop" },
  openGraph: { title: "REGI Gift Shop" },
  twitter: { title: "REGI Gift Shop" },
  description:
    "Shop REGI apparel, accessories, and symbolic bird adoptions. Every purchase directly benefits birds in REGI's care.",
};

export default function ShopPage() {
  return (
    <main id="main-content">
      <section className="shop-hero">
        <div className="shell shop-hero-grid">
          <div><p className="eyebrow eyebrow-light">REGI gift shop</p><h1>Good things for people who love wild things.</h1></div>
          <div><p>Every shirt, hat, earring, and adoption directly supports birds in REGI&apos;s care. Browse here, then pay securely through REGI&apos;s established online store.</p><a className="button button-cream" href={getStoreUrl("/cart")}>View your secure cart <span>↗</span></a></div>
        </div>
      </section>

      <section className="section shop-section">
        <div className="shell shop-toolbar"><p>{shopProducts.length} ways to show your support</p><Link href="/adopt-a-bird">How symbolic adoption works →</Link></div>
        <div className="shell shop-grid">
          {shopProducts.map((product) => (
            <article className={`shop-card${product.featured ? " featured" : ""}`} key={product.slug}>
              <Link className="shop-card-image" href={`/shop/${product.slug}`}>
                <Image src={product.image} alt={product.name} fill sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw" />
                {product.featured ? <span>Featured</span> : null}
              </Link>
              <div>
                <p>{product.category}</p>
                <Link href={`/shop/${product.slug}`}><h2>{product.name}</h2></Link>
                <strong>{formatPrice(product.price)}</strong>
                <span className="shop-card-action">View item <span>→</span></span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="shop-help-section">
        <div className="shell shop-help-grid"><h2>Need help before checkout?</h2><div><p>The secure product page shows the options currently available. For sizing, fulfillment, or product questions, REGI&apos;s education team can help.</p><a className="text-link text-link-light" href="mailto:education@raptoreducationgroup.org?subject=REGI%20Gift%20Shop%20Question">Ask about an item <span>→</span></a></div></div>
      </section>
    </main>
  );
}
