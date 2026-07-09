import { createReadStream, existsSync, statSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const startPort = Number(process.env.PORT || 4173);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8"
};

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const normalized = path.normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  return path.join(dist, normalized);
}

function resolveRequest(urlPath) {
  let target = safePath(urlPath);

  if (existsSync(target) && statSync(target).isDirectory()) {
    target = path.join(target, "index.html");
  }

  if (!existsSync(target)) {
    const htmlPath = `${target}.html`;
    if (existsSync(htmlPath)) {
      target = htmlPath;
    }
  }

  if (!existsSync(target)) {
    target = path.join(dist, "404.html");
  }

  return target;
}

function serve(port) {
  const server = createServer((request, response) => {
    const filePath = resolveRequest(request.url || "/");
    const extension = path.extname(filePath);
    response.writeHead(filePath.endsWith("404.html") && request.url !== "/404.html" ? 404 : 200, {
      "Content-Type": mimeTypes[extension] || "application/octet-stream",
      "Cache-Control": extension === ".html" ? "no-cache" : "public, max-age=3600"
    });
    createReadStream(filePath).pipe(response);
  });

  server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      serve(port + 1);
      return;
    }

    throw error;
  });

  server.listen(port, async () => {
    const files = await readdir(dist);
    if (!files.length) {
      console.warn("dist/ is empty. Run npm run build first.");
    }
    console.log(`Portfolio preview running at http://localhost:${port}`);
  });
}

serve(startPort);
