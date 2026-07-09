import { existsSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { site } from "../src/data/site.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const htmlFiles = [];
const failures = [];

function walk(directory) {
  for (const entry of readdirSync(directory)) {
    const fullPath = path.join(directory, entry);
    if (statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith(".html")) {
      htmlFiles.push(fullPath);
    }
  }
}

function stripBase(value) {
  if (site.basePath && value.startsWith(site.basePath)) {
    return value.slice(site.basePath.length) || "/";
  }

  return value;
}

function targetExists(value) {
  const cleaned = stripBase(value.split("#")[0].split("?")[0]);
  if (!cleaned || cleaned === "/") {
    return existsSync(path.join(dist, "index.html"));
  }

  const target = path.join(dist, cleaned.replace(/^\//, ""));
  if (existsSync(target)) {
    return true;
  }

  if (existsSync(path.join(target, "index.html"))) {
    return true;
  }

  return existsSync(`${target}.html`);
}

if (!existsSync(dist)) {
  console.error("dist/ does not exist. Run npm run build first.");
  process.exit(1);
}

walk(dist);

for (const file of htmlFiles) {
  const html = readdirSync(path.dirname(file)).includes(path.basename(file))
    ? await import("node:fs").then((fs) => fs.readFileSync(file, "utf8"))
    : "";
  const matches = [...html.matchAll(/\s(?:href|src)="([^"]+)"/g)];

  for (const [, rawValue] of matches) {
    if (
      rawValue.startsWith("http") ||
      rawValue.startsWith("mailto:") ||
      rawValue.startsWith("tel:") ||
      rawValue.startsWith("data:") ||
      rawValue.startsWith("#")
    ) {
      continue;
    }

    if (!targetExists(rawValue)) {
      failures.push(`${path.relative(root, file)} -> ${rawValue}`);
    }
  }
}

if (failures.length) {
  console.error("Broken local references found:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files. No broken local references found.`);
