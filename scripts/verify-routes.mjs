import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const routeSource = readFileSync(join(root, "app", "lib", "routes.ts"), "utf8");
const routes = [...routeSource.matchAll(/path:\s*"([^"]+)"/g)].map((match) => match[1]);

const failures = [];
const duplicates = routes.filter((route, index) => routes.indexOf(route) !== index);

for (const route of routes) {
  const pagePath = route === "/"
    ? join(root, "app", "page.tsx")
    : join(root, "app", ...route.slice(1).split("/"), "page.tsx");

  if (!existsSync(pagePath)) failures.push(`${route} has no page at ${pagePath}`);
}

if (duplicates.length) failures.push(`Duplicate public routes: ${[...new Set(duplicates)].join(", ")}`);

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Verified ${routes.length} public routes.`);
