import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://regi-website-new.vercel.app";

const routes = [
  "",
  "/about",
  "/adoption",
  "/ambassadors",
  "/camp",
  "/contact",
  "/education",
  "/make-a-difference",
  "/newsletter",
  "/rescue",
  "/shop",
  "/support",
  "/volunteer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}