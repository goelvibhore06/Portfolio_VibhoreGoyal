import { site } from "../data/site.js";

export function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function withBase(path = "/") {
  if (/^(https?:)?\/\//.test(path) || path.startsWith("mailto:") || path.startsWith("tel:") || path.startsWith("#")) {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") {
    return `${site.basePath || ""}/`;
  }

  return `${site.basePath}${normalized}`;
}

export function absoluteUrl(path = "/") {
  if (/^(https?:)?\/\//.test(path)) {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  const basePath = site.basePath && !site.url.endsWith(site.basePath) ? site.basePath : "";
  return `${site.url}${basePath}${normalized}`;
}

export function listItems(items = [], className = "") {
  const classAttr = className ? ` class="${escapeHtml(className)}"` : "";
  return items.map((item) => `<li${classAttr}>${escapeHtml(item)}</li>`).join("");
}

export function pageTitle(title) {
  if (!title || title === site.name) {
    return `${site.name} | ${site.role}`;
  }

  return `${title} | ${site.name}`;
}

export function projectPath(project) {
  return `/projects/${project.slug}/`;
}

export function mailAddress() {
  return site.links.email.replace("mailto:", "");
}

export function phoneNumber() {
  return site.links.phone.replace("tel:", "").replace("+91", "+91 ");
}
