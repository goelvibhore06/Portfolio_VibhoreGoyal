import { site } from "../data/site.js";
import { Layout } from "../components/Layout.js";
import { withBase } from "../lib/html.js";

export function NotFoundPage() {
  return Layout({
    title: "404",
    path: "/404.html",
    description: `Page not found on ${site.name}'s portfolio.`,
    children: `
      <section class="error-section section-shell">
        <p class="status-chip"><span aria-hidden="true"></span>[ ERROR: ROUTE_NOT_FOUND ]</p>
        <h1>404</h1>
        <p>This dossier entry moved or does not exist.</p>
        <a class="button button-primary" href="${withBase("/")}">RETURN HOME</a>
      </section>
    `
  });
}
