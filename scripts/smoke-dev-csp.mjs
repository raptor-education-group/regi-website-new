import { spawn } from "node:child_process";
import { once } from "node:events";
import { join } from "node:path";

async function getRunningDevelopmentResponse() {
  try {
    const response = await fetch("http://localhost:3000");
    return response.ok ? response : null;
  } catch {
    return null;
  }
}

let response = await getRunningDevelopmentResponse();
let server;
let output = "";

if (!response) {
  const port = 3016;
  const origin = `http://localhost:${port}`;
  const nextBin = join(process.cwd(), "node_modules", "next", "dist", "bin", "next");
  server = spawn(process.execPath, [nextBin, "dev", "-p", String(port)], {
    cwd: process.cwd(),
    stdio: ["ignore", "pipe", "pipe"],
    env: { ...process.env, NODE_ENV: "development" },
  });
  server.stdout.on("data", (chunk) => { output += chunk; });
  server.stderr.on("data", (chunk) => { output += chunk; });

  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      response = await fetch(origin);
      if (response.ok) break;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
}

try {
  if (!response?.ok) throw new Error(`Development server did not become ready.\n${output}`);
  const policy = response.headers.get("content-security-policy") || "";
  if (!policy.includes("'unsafe-eval'")) {
    throw new Error("Development CSP does not permit React/Turbopack eval debugging");
  }
  if (policy.includes("upgrade-insecure-requests")) {
    throw new Error("Development CSP should not upgrade localhost requests");
  }
  console.log("Development CSP permits eval debugging without weakening production.");
} finally {
  if (server) {
    server.kill("SIGTERM");
    if (server.exitCode === null) {
      await Promise.race([
        once(server, "exit"),
        new Promise((resolve) => setTimeout(resolve, 3000)),
      ]);
    }
  }
}
