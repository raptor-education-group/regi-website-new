const DEFAULT_SITE_URL = "http://localhost:3000";
const siteMode = process.env.NEXT_PUBLIC_SITE_MODE || "development";

function cleanUrl(value: string | undefined, fallback = DEFAULT_SITE_URL) {
  return (value || fallback).replace(/\/$/, "");
}

export const siteConfig = {
  name: "Raptor Education Group, Inc.",
  shortName: "REGI",
  description:
    "Raptor Education Group, Inc. is an Antigo, Wisconsin nonprofit rehabilitating native birds and connecting people with wildlife through education.",
  url: cleanUrl(process.env.NEXT_PUBLIC_SITE_URL),
  mode: siteMode,
  clinic: {
    phone: "715-623-4015",
    phoneHref: "tel:+17156234015",
    hours: "8:00 a.m.–4:00 p.m. daily",
  },
  education: {
    phone: "715-623-2563",
    phoneHref: "tel:+17156232563",
    email: "education@raptoreducationgroup.org",
  },
  email: {
    board: "board@raptoreducationgroup.org",
    updates: "updates@raptoreducationgroup.org",
    volunteer: "volunteer@raptoreducationgroup.org",
  },
  address: {
    street: "N2160 W Rollwood Rd.",
    city: "Antigo",
    region: "WI",
    postalCode: "54409",
    country: "US",
  },
  social: {
    facebook: "https://www.facebook.com/RaptorEducationGroupInc",
    instagram: "https://www.instagram.com/raptoreducationgroup/",
  },
  external: {
    store: cleanUrl(
      process.env.NEXT_PUBLIC_STORE_URL,
      "https://www.raptoreducationgroup.org",
    ),
    tourBooking: process.env.NEXT_PUBLIC_TOUR_BOOKING_URL || "",
    campRegistration: process.env.NEXT_PUBLIC_CAMP_REGISTRATION_URL || "",
    campThemes: process.env.NEXT_PUBLIC_CAMP_THEMES_URL || "",
    newsletterSignup: process.env.NEXT_PUBLIC_NEWSLETTER_SIGNUP_URL || "",
  },
} as const;

if (
  siteConfig.mode === "production" &&
  new URL(siteConfig.external.store).hostname === new URL(siteConfig.url).hostname
) {
  throw new Error(
    "NEXT_PUBLIC_STORE_URL must point to the preserved Squarespace store before production cutover.",
  );
}

if (siteConfig.mode === "production" && !siteConfig.url.startsWith("https://")) {
  throw new Error("NEXT_PUBLIC_SITE_URL must use HTTPS in production.");
}

export const allowIndexing =
  siteConfig.mode === "production" &&
  process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}

export function mailto(email: string, subject?: string) {
  return `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
}

export const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Raptor Education Group N2160 W Rollwood Rd Antigo WI 54409");
