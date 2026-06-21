import { spawn } from "node:child_process";
import { once } from "node:events";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const port = 3015;
const origin = `http://localhost:${port}`;
const expectedSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const expectIndexing =
  process.env.NEXT_PUBLIC_SITE_MODE === "production" &&
  process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
const nextBin = join(process.cwd(), "node_modules", "next", "dist", "bin", "next");
const routeSource = readFileSync(join(process.cwd(), "app", "lib", "routes.ts"), "utf8");
const publicRoutes = [...routeSource.matchAll(/path:\s*"([^"]+)"/g)].map((match) => match[1]);
const server = spawn(process.execPath, [nextBin, "start", "-p", String(port)], {
  cwd: process.cwd(),
  stdio: ["ignore", "pipe", "pipe"],
});

let output = "";
server.stdout.on("data", (chunk) => { output += chunk; });
server.stderr.on("data", (chunk) => { output += chunk; });

async function waitForServer() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(origin);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Server did not become ready.\n${output}`);
}

async function expectPage(path) {
  const response = await fetch(`${origin}${path}`, { redirect: "manual" });
  if (response.status !== 200) throw new Error(`${path} returned ${response.status}`);
  const robotsHeader = response.headers.get("x-robots-tag");
  const contentSecurityPolicy = response.headers.get("content-security-policy");
  if (!contentSecurityPolicy) {
    throw new Error(`${path} is missing the Content-Security-Policy header`);
  }
  if (contentSecurityPolicy.includes("'unsafe-eval'")) {
    throw new Error(`${path} allows unsafe-eval in the production build`);
  }
  if (response.headers.get("x-content-type-options") !== "nosniff") {
    throw new Error(`${path} is missing the nosniff header`);
  }
  if (!expectIndexing && robotsHeader !== "noindex, nofollow, noarchive") {
    throw new Error(`${path} is missing the staging X-Robots-Tag header`);
  }
  if (expectIndexing && robotsHeader) {
    throw new Error(`${path} unexpectedly blocks production indexing`);
  }
  return response.text();
}

try {
  await waitForServer();
  const paths = [
    ...publicRoutes,
    "/robots.txt",
    "/sitemap.xml",
    "/manifest.webmanifest",
    "/shop/symbolic-adoption",
  ];

  const contents = new Map();
  for (const path of paths) contents.set(path, await expectPage(path));

  const home = contents.get("/");
  if (!home.includes(expectedSiteUrl)) {
    throw new Error("Home metadata does not contain the expected site URL");
  }
  if (!expectIndexing && !home.includes("noindex")) {
    throw new Error("Home metadata does not contain the staging noindex directive");
  }
  if (expectIndexing && home.includes('name="robots" content="noindex')) {
    throw new Error("Home metadata unexpectedly blocks production indexing");
  }
  const robots = contents.get("/robots.txt");
  if (!expectIndexing && !robots.includes("Disallow: /")) {
    throw new Error("robots.txt does not block staging crawlers");
  }
  if (expectIndexing && !robots.includes("Allow: /")) {
    throw new Error("robots.txt does not allow production crawlers");
  }
  if (/\/adoption<\/loc>|\/camp<\/loc>|\/volunteer<\/loc>/.test(contents.get("/sitemap.xml"))) {
    throw new Error("Sitemap contains obsolete routes");
  }
  if (!contents.get("/rescue/songbirds").includes("Small bird. Small box.")) {
    throw new Error("Songbird transport guidance is missing");
  }
  if (!contents.get("/careers").includes("internship-application")) {
    throw new Error("Internship application form is missing");
  }
  if (!home.includes("data-newsletter-open")) {
    throw new Error("Persistent newsletter trigger is missing");
  }

  const redirects = [
    ["/what-to-do-if-you-find-a-baby-bird", "/rescue/baby-birds"],
    ["/aabjasper", "/ambassadors#bird-jasper"],
    ["/raptor-tours", "/visit#raptor-tours"],
  ];
  for (const [source, destination] of redirects) {
    const response = await fetch(`${origin}${source}`, { redirect: "manual" });
    if (response.status !== 308 || !response.headers.get("location")?.endsWith(destination)) {
      throw new Error(`${source} did not redirect to ${destination}`);
    }
  }

  console.log(`Runtime smoke checks passed for ${paths.length} routes and ${redirects.length} redirects.`);
} finally {
  server.kill("SIGTERM");
  if (server.exitCode === null) await Promise.race([once(server, "exit"), new Promise((resolve) => setTimeout(resolve, 3000))]);
}
