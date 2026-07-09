import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { projects, site } from "../src/data/site.js";
import { absoluteUrl, escapeHtml } from "../src/lib/html.js";
import { HomePage } from "../src/pages/home.js";
import { NotFoundPage } from "../src/pages/not-found.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const publicDir = path.join(root, "public");

const pages = [
  { path: "/", html: HomePage() },
  { path: "/404.html", html: NotFoundPage() }
];

function outputPath(routePath) {
  if (routePath.endsWith(".html")) {
    return path.join(dist, routePath.replace(/^\//, ""));
  }

  return path.join(dist, routePath.replace(/^\//, ""), "index.html");
}

async function writePage(page) {
  const target = outputPath(page.path);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, page.html, "utf8");
}

function sitemap() {
  const now = new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${escapeHtml(absoluteUrl("/"))}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
}

function robots() {
  return `User-agent: *
Allow: /

Sitemap: ${absoluteUrl("/sitemap.xml")}
`;
}

function llmsText() {
  return `# ${site.name}

${site.description}

## Primary sections
- Work: ${absoluteUrl("/#work")}
- About: ${absoluteUrl("/#about")}
- Experience: ${absoluteUrl("/#experience")}
- Contact: ${absoluteUrl("/#contact")}

## Selected work
${projects.map((project) => `- ${project.title}: ${project.summary}`).join("\n")}
`;
}

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(publicDir, dist, { recursive: true });
await Promise.all(pages.map(writePage));
await writeFile(path.join(dist, "sitemap.xml"), sitemap(), "utf8");
await writeFile(path.join(dist, "robots.txt"), robots(), "utf8");
await writeFile(path.join(dist, "llms.txt"), llmsText(), "utf8");

console.log(`Built ${pages.length} pages into ${path.relative(root, dist)}/`);
