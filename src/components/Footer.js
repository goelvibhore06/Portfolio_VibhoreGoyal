import { site } from "../data/site.js";
import { escapeHtml, withBase } from "../lib/html.js";

export function Footer() {
  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <a class="footer-mark" href="${withBase("/")}" aria-label="${escapeHtml(site.name)} home">
          ${escapeHtml(site.monogram)}
        </a>
        <p>${escapeHtml(site.name.toUpperCase().replace(" ", "_"))} // KINETIC_DOSSIER_v1.0</p>
        <p>© <span data-year></span> ALL_RIGHTS_RESERVED</p>
        <p>${escapeHtml(site.location.toUpperCase().replace(", ", "_"))} // 28.70°N 77.10°E</p>
      </div>
    </footer>
  `;
}
