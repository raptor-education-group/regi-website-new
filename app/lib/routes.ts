import type { MetadataRoute } from "next";

export type PublicRoute = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
};

export const publicRoutes: PublicRoute[] = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/about", changeFrequency: "yearly", priority: 0.8 },
  { path: "/staff", changeFrequency: "monthly", priority: 0.7 },
  { path: "/board", changeFrequency: "monthly", priority: 0.6 },
  { path: "/careers", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.8 },
  { path: "/rescue", changeFrequency: "yearly", priority: 1 },
  { path: "/rescue/songbirds", changeFrequency: "yearly", priority: 0.9 },
  { path: "/rescue/baby-birds", changeFrequency: "yearly", priority: 0.9 },
  { path: "/education", changeFrequency: "monthly", priority: 0.8 },
  { path: "/visit", changeFrequency: "monthly", priority: 0.8 },
  { path: "/summer-camp", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ambassadors", changeFrequency: "monthly", priority: 0.8 },
  { path: "/protect-wildlife", changeFrequency: "yearly", priority: 0.7 },
  { path: "/make-a-difference", changeFrequency: "monthly", priority: 0.8 },
  { path: "/support", changeFrequency: "monthly", priority: 0.9 },
  { path: "/adopt-a-bird", changeFrequency: "monthly", priority: 0.8 },
  { path: "/shop", changeFrequency: "weekly", priority: 0.8 },
  { path: "/resources", changeFrequency: "monthly", priority: 0.7 },
  { path: "/resources/poison-bullets", changeFrequency: "yearly", priority: 0.7 },
  { path: "/newsletter", changeFrequency: "monthly", priority: 0.7 },
  { path: "/giving-tuesday", changeFrequency: "yearly", priority: 0.5 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/accessibility", changeFrequency: "yearly", priority: 0.3 },
  { path: "/site-map", changeFrequency: "yearly", priority: 0.4 },
];
