import type { NextConfig } from "next";
import { legacyRedirects } from "./app/lib/legacy-redirects";

const allowIndexing =
  process.env.NEXT_PUBLIC_SITE_MODE === "production" &&
  process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
const isDevelopment = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  async redirects() {
    return legacyRedirects;
  },
  async headers() {
    const securityHeaders = [
      {
        key: "Content-Security-Policy",
        value: [
          "default-src 'self'",
          "base-uri 'self'",
          "form-action 'self' https://visitor2.constantcontact.com",
          "frame-ancestors 'self'",
          "object-src 'none'",
          `script-src 'self' 'unsafe-inline' https://static.ctctcdn.com${isDevelopment ? " 'unsafe-eval'" : ""}`,
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: blob: https://static.ctctcdn.com",
          "font-src 'self' data:",
          `connect-src 'self' https://vitals.vercel-insights.com https://visitor2.constantcontact.com https://api.cc.email${isDevelopment ? " ws: wss:" : ""}`,
          ...(isDevelopment ? [] : ["upgrade-insecure-requests"]),
        ].join("; "),
      },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
      ...(allowIndexing ? [] : [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }]),
    ];

    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
