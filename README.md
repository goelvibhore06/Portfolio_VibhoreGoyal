# ⚡ Vibhore Goyal — Kinetic Dossier Portfolio

A high-performance, GitHub-ready static portfolio website built . This repository compiles down to optimized, plain HTML/CSS/JS with zero runtime dependencies, featuring smooth motion design, rich interactivity, and an automated deployment pipeline via GitHub Actions.

🔗 **Live Demo:** [goelvibhore06.github.io/POrtfolio](https://goelvibhore06.github.io/Portfolio_VibhoreGoyal)

---

## ✨ Features & Interactivity

- **Interactive UI:** Smooth anchor navigation, a responsive mobile menu, scroll progress indicators, and reveal-on-scroll animations.
- **Micro-interactions:** Typewriter role animation, kinetic project card hover motions, and animated skill meters.
- **Production Ready:** Built-in SEO metadata, Open Graph tags, JSON-LD structured data, automatic sitemap generation, `robots.txt`, and an AI-friendly `llms.txt`.
- **Zero-Friction Forms:** Clean, mailto-backed contact form validation.

---

## 🚀 Quick Start & Commands

This project uses standard Node scripts to handle building, previewing, and auditing the production-ready static assets.

| Command | Description |
| :--- | :--- |
| `npm run dev` | Spins up a local development server with hot-reloading. |
| `npm run build` | Compiles and minifies the static site into the `dist/` directory. |
| `npm run check` | Audits the generated HTML to ensure no local asset links are broken. |

---

## ⚙️ Configuration & Content Customization

To personalize the copy, links, or styles, modify the following directories:

### 1. Update Content Data
Almost all text, project details, and external links are centralized in a single data file:
📂 `src/data/site.js`
> **Edit this file to update:** Profile data, social handles (GitHub/LinkedIn), typewriter animation roles, projects, skill categories/percentages, credentials, and timeline milestones.

### 2. Styling & Motion
Visual layout and animations are managed via standard CSS:
📂 `public/assets/styles.css`

### 3. Core Interactivity
Event listeners, scroll tracking, and dynamic element animations are handled here:
📂 `public/assets/main.js`

---

## 📦 GitHub Pages Deployment

The repository includes a pre-configured GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys your site to GitHub Pages whenever you push changes to the `main` branch.

### How to activate it:
1. Push this codebase to your GitHub repository.
2. Navigate to your repository on GitHub and click **Settings** ⚙️.
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment -> Source**, select **GitHub Actions**.

### Manual Production Builds
The build script automatically detects paths for project repositories. If you ever need to manually force a production build locally with a custom sub-path, run:

```bash
SITE_URL="[https://goelvibhore06.github.io/Portfolio_VibhoreGoyal(https://goelvibhore06.github.io/Portfolio_VibhoreGoyal)" BASE_PATH="/Portfolio_VibhoreGoyal" npm run build
