import type { MetadataRoute } from "next";
import { absoluteUrl, allowIndexing, siteConfig } from "./lib/site-config";

export default function robots(): MetadataRoute.Robots {
  if (!allowIndexing) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
      sitemap: absoluteUrl("/sitemap.xml"),
      host: siteConfig.url,
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}
