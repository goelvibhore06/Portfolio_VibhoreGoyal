# Vibhore Goyal Portfolio

GitHub-ready static version of the Base44 "Kinetic Dossier" portfolio for Vibhore Goyal.

It builds into plain HTML/CSS/JS, includes the Base44 visual assets locally, and can be deployed with GitHub Pages without depending on Base44 editor previews.

## What Is Included

- One-page dossier layout with hero, selected work, about, skills, timeline, credentials, and contact sections
- Local hero, project, and profile images copied from the Base44 portfolio
- Smooth anchor navigation and mobile menu
- Typewriter role animation
- Scroll progress indicator
- Reveal-on-scroll animations
- Animated skill meters
- Project card hover motion
- Mailto-backed contact form
- SEO metadata, Open Graph tags, JSON-LD, sitemap, robots, and `llms.txt`
- GitHub Actions workflow for Pages deployment

## Commands

```bash
npm run build
npm run dev
npm run check
```

`npm run build` writes the finished static site to `dist/`.

`npm run dev` builds the site and starts a local preview server.

`npm run check` scans generated HTML for broken local asset links.

## Edit Content

Most content is in:

```text
src/data/site.js
```

Update this file for:

- Profile, role, status, email, phone, GitHub, and LinkedIn links
- Hero role animation labels
- Selected projects and source links
- About copy and contact facts
- Skill groups and percentages
- Experience timeline
- Credentials and certification details

Visual styling lives in:

```text
public/assets/styles.css
```

Interactivity lives in:

```text
public/assets/main.js
```

## GitHub Pages

The workflow at `.github/workflows/deploy.yml` deploys automatically from `main`.

1. Push this folder to GitHub.
2. Open repository Settings -> Pages.
3. Set Source to GitHub Actions.
4. Push to `main` or run the workflow manually.

The workflow sets the correct `BASE_PATH` for both username repos and project repos.

For a manual local build with a project path:

```bash
SITE_URL="https://goelvibhore06.github.io/POrtfolio" BASE_PATH="/POrtfolio" npm run build
```

For a username repo named `goelvibhore06.github.io`, keep `BASE_PATH` empty.
