import type { MetadataRoute } from "next";
import { shopProducts } from "./data/shop-products";
import { absoluteUrl } from "./lib/site-config";
import { publicRoutes } from "./lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...publicRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...shopProducts.map((product) => ({
      url: absoluteUrl(`/shop/${product.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
