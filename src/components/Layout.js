import { site } from "../data/site.js";
import { absoluteUrl, escapeHtml, pageTitle, withBase } from "../lib/html.js";
import { Footer } from "./Footer.js";
import { Header } from "./Header.js";

export function Layout({
  title,
  description = site.description,
  path = "/",
  type = "website",
  children,
  jsonLd = []
}) {
  const fullTitle = pageTitle(title);
  const canonical = absoluteUrl(path);
  const image = absoluteUrl(site.socialImage);
  const assetVersion = encodeURIComponent(site.assetVersion);
  const structuredData = Array.isArray(jsonLd) ? jsonLd : [jsonLd];

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="${escapeHtml(site.themeColor)}">
    <meta name="color-scheme" content="dark">
    <meta name="format-detection" content="telephone=no">
    <meta name="referrer" content="strict-origin-when-cross-origin">
    <title>${escapeHtml(fullTitle)}</title>
    <meta name="description" content="${escapeHtml(description)}">
    <meta name="keywords" content="${escapeHtml(site.keywords.join(", "))}">
    <meta name="author" content="${escapeHtml(site.name)}">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${escapeHtml(canonical)}">
    <link rel="icon" href="${withBase("/icons/favicon.svg")}" type="image/svg+xml">
    <link rel="apple-touch-icon" href="${withBase("/icons/apple-touch-icon.svg")}">
    <link rel="manifest" href="${withBase("/site.webmanifest")}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;700&display=swap">
    <link rel="preload" href="${withBase(`/assets/styles.css?v=${assetVersion}`)}" as="style">
    <link rel="stylesheet" href="${withBase(`/assets/styles.css?v=${assetVersion}`)}">
    <meta property="og:site_name" content="${escapeHtml(site.name)}">
    <meta property="og:locale" content="${escapeHtml(site.locale)}">
    <meta property="og:type" content="${escapeHtml(type)}">
    <meta property="og:title" content="${escapeHtml(fullTitle)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:url" content="${escapeHtml(canonical)}">
    <meta property="og:image" content="${escapeHtml(image)}">
    <meta property="og:image:alt" content="${escapeHtml(`${site.name} portfolio preview`)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(fullTitle)}">
    <meta name="twitter:description" content="${escapeHtml(description)}">
    <meta name="twitter:image" content="${escapeHtml(image)}">
    <script>document.documentElement.classList.add("js");</script>
    ${structuredData
      .filter(Boolean)
      .map((item) => `<script type="application/ld+json">${JSON.stringify(item)}</script>`)
      .join("\n    ")}
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to content</a>
    <div class="scroll-progress" data-scroll-progress aria-hidden="true"></div>
    ${Header(path)}
    <main id="main">
      ${children}
    </main>
    ${Footer()}
    <script src="${withBase(`/assets/main.js?v=${assetVersion}`)}" defer></script>
  </body>
</html>`;
}
