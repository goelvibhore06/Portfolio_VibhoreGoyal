import { navigation, site } from "../data/site.js";
import { escapeHtml, withBase } from "../lib/html.js";

export function Header() {
  const navItems = navigation
    .map(
      (item) => `
        <a class="nav-link" href="${withBase(item.path)}">
          <span>${escapeHtml(item.number)}.</span>${escapeHtml(item.label)}
        </a>`
    )
    .join("");

  return `
    <header class="site-header" data-header>
      <a class="brand" href="${withBase("/")}" aria-label="${escapeHtml(site.name)} home">
        <span class="brand-mark" aria-hidden="true">${escapeHtml(site.monogram)}</span>
      </a>

      <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" data-menu-toggle>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>

      <nav class="site-nav" aria-label="Primary navigation" data-nav>
        ${navItems}
      </nav>
    </header>
  `;
}
