import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdoptionBirdChooser } from "../../components/adoption-bird-chooser";
import { formatPrice, getShopProduct, shopProducts } from "../../data/shop-products";
import { getStoreUrl } from "../../data/store-url";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return shopProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getShopProduct((await params).slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/shop/${product.slug}` },
    openGraph: { title: product.name, description: product.description },
    twitter: { title: product.name, description: product.description },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = getShopProduct((await params).slug);
  if (!product) notFound();

  const related = shopProducts.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3);
  const storeHref = getStoreUrl(product.storePath);
  const isAdoption = product.slug === "symbolic-adoption";

  return (
    <main id="main-content">
      <nav className="shop-breadcrumb"><div className="shell"><Link href="/shop">Gift shop</Link><span>→</span><p>{product.name}</p><a href={getStoreUrl("/cart")}>Secure cart</a></div></nav>
      {isAdoption ? (
        <section className="section product-section adoption-product-section">
          <div className="shell adoption-product-header">
            <div>
              <p className="eyebrow">{product.category}</p>
              <h1>{product.name}</h1>
            </div>
            <div>
              <strong className="product-price">{formatPrice(product.price)}</strong>
              <p className="page-lead">{product.description}</p>
              <p>{product.details}</p>
            </div>
          </div>
          <div className="shell">
            <AdoptionBirdChooser storeHref={storeHref} />
          </div>
        </section>
      ) : (
        <section className="section product-section">
          <div className="shell product-grid">
            <div className="product-image">
              <div className="fill-image-frame">
                <Image src={product.image} alt={product.name} fill priority sizes="(max-width: 900px) 100vw, 52vw" />
              </div>
              <span className="product-image-note">Every purchase supports REGI&apos;s birds</span>
            </div>
            <div className="product-copy">
              <p className="eyebrow">{product.category}</p>
              <h1>{product.name}</h1>
              <strong className="product-price">{formatPrice(product.price)}</strong>
              <p className="page-lead">{product.description}</p>
              <p>{product.details}</p>
              <div className="secure-purchase-actions">
                <a className="button" href={storeHref}>
                  Choose options &amp; buy <span>↗</span>
                </a>
                <p>
                  Secure checkout, live options, shipping, and receipts are
                  handled through REGI&apos;s existing online store.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
      <section className="shop-trust-strip" aria-label="Purchase details">
        <div className="shell">
          <p><strong>Direct impact</strong><span>Proceeds support REGI&apos;s rehabilitation and education work.</span></p>
          <p><strong>Secure checkout</strong><span>Payment and receipts stay with REGI&apos;s established store.</span></p>
          <p><strong>Fulfilled by REGI</strong><span>Current options and shipping are confirmed at checkout.</span></p>
        </div>
      </section>
      {related.length ? <section className="section related-products-section"><div className="shell related-products-heading"><p className="eyebrow">Keep looking</p><h2>You might also like…</h2></div><div className="shell related-products-grid">{related.map((item)=><Link href={`/shop/${item.slug}`} key={item.slug}><div><Image src={item.image} alt="" fill sizes="(max-width: 650px) 100vw, 33vw" /></div><h3>{item.name}</h3><p>{formatPrice(item.price)}</p></Link>)}</div></section> : null}
    </main>
  );
}
