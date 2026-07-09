import {
  about,
  contactCards,
  contactFacts,
  credentials,
  featuredCertification,
  heroRoles,
  projects,
  site,
  skillGroups,
  timeline,
  workflowTools
} from "../data/site.js";
import { Layout } from "../components/Layout.js";
import { escapeHtml, withBase } from "../lib/html.js";
import { personSchema, portfolioSchema, websiteSchema } from "../lib/seo.js";

function tags(items = []) {
  return items.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("");
}

function bullets(items = []) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function sectionLabel(number, label) {
  return `
    <div class="section-label reveal">
      <span>${escapeHtml(number)}</span>
      <p>${escapeHtml(label)}</p>
    </div>
  `;
}

function HeroSection() {
  return `
    <section class="hero-section" aria-labelledby="hero-title">
      <img class="hero-bg" src="${withBase("/assets/base44-hero-server.png")}" alt="Dark server hardware background" fetchpriority="high">
      <div class="hero-overlay" aria-hidden="true"></div>
      <div class="scanline" aria-hidden="true"></div>
      <div class="hero-inner">
        <div class="hero-copy">
          <p class="status-chip reveal"><span aria-hidden="true"></span>[ STATUS: ${escapeHtml(site.status.toUpperCase())} ]</p>
          <h1 id="hero-title" class="hero-title reveal">
            <span>VIBHORE</span>
            <span>GOYAL</span>
          </h1>
          <p class="typed-role reveal">
            <span data-role-typewriter data-roles="${escapeHtml(heroRoles.join("|"))}">${escapeHtml(heroRoles[1])}</span><span aria-hidden="true">_</span>
          </p>
          <div class="hero-divider reveal" aria-hidden="true"></div>
          <p class="hero-summary reveal">
            Software Engineering student at Delhi Technological University (2024-2028) - CGPA 8.843.
            Building high-performance systems from RAG security pipelines to ML prediction engines.
            4 star CodeChef (1818) - Expert on LeetCode - SDE Intern @ GSeven.
          </p>
          <div class="hero-actions reveal">
            <a class="button button-primary" href="#work">VIEW WORK</a>
            <a class="button button-secondary" href="${escapeHtml(site.links.email)}">CONTACT</a>
          </div>
        </div>
        <a class="scroll-cue" href="#work" aria-label="Scroll to selected work">
          <span>SCROLL</span>
          <i aria-hidden="true"></i>
        </a>
      </div>
    </section>
  `;
}

function WorkSection() {
  return `
    <section class="section-shell work-section" id="work" aria-labelledby="work-title">
      ${sectionLabel("02.", "Selected Work")}
      <div class="section-heading reveal">
        <p>The Dossier</p>
        <h2 id="work-title">Systems that turn messy inputs into useful decisions.</h2>
      </div>
      <div class="project-stack">
        ${projects
          .map(
            (project) => `
              <article class="project-card reveal" id="${escapeHtml(project.id)}">
                <div class="project-media">
                  <img src="${withBase(project.image)}" alt="${escapeHtml(project.alt)}" loading="lazy">
                </div>
                <div class="project-content">
                  <div class="project-meta">
                    <span>${escapeHtml(project.category)}</span>
                    <strong>${escapeHtml(project.number)}</strong>
                  </div>
                  <h3>${escapeHtml(project.title)}</h3>
                  <p>${escapeHtml(project.summary)}</p>
                  <ul class="project-points">${bullets(project.bullets)}</ul>
                  <div class="tag-cloud">${tags(project.tags)}</div>
                  <a class="source-link" href="${escapeHtml(project.source)}" target="_blank" rel="noopener noreferrer">SOURCE</a>
                </div>
              </article>`
          )
          .join("")}
      </div>
      <a class="repo-link reveal" href="${escapeHtml(site.links.github)}" target="_blank" rel="noopener noreferrer">
        View all repositories on GitHub <span aria-hidden="true">-></span>
      </a>
    </section>
  `;
}

function AboutSection() {
  return `
    <section class="section-shell about-section" id="about" aria-labelledby="about-title">
      ${sectionLabel("03.", "Technical Pedigree")}
      <div class="about-grid">
        <div class="portrait-panel reveal">
          <img src="${withBase(about.profileImage)}" alt="Vibhore Goyal - Software Engineer" loading="lazy">
        </div>
        <div class="about-copy">
          <p class="panel-kicker reveal">ABOUT</p>
          <h2 id="about-title" class="reveal">Vibhore Goyal</h2>
          <p class="role-line reveal">${escapeHtml(about.kicker)}</p>
          ${about.paragraphs.map((paragraph) => `<p class="reveal">${escapeHtml(paragraph)}</p>`).join("")}
          <div class="facts-grid reveal">
            ${contactFacts
              .map(
                (fact) => `
                  <div class="fact">
                    <span>${escapeHtml(fact.label)}</span>
                    ${
                      fact.href
                        ? `<a href="${escapeHtml(fact.href)}"${fact.href.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : ""}>${escapeHtml(fact.value)}</a>`
                        : `<strong>${escapeHtml(fact.value)}</strong>`
                    }
                  </div>`
              )
              .join("")}
          </div>
        </div>
      </div>
      <div class="skills-grid">
        ${skillGroups
          .map(
            (group) => `
              <article class="skill-panel reveal">
                <div class="skill-heading">
                  <span>${escapeHtml(group.number)}.</span>
                  <h3>${escapeHtml(group.title)}</h3>
                </div>
                ${group.skills
                  .map(
                    (skill) => `
                      <div class="skill-row">
                        <div>
                          <span>${escapeHtml(skill.name)}</span>
                          <strong>${escapeHtml(skill.level)}%</strong>
                        </div>
                        <i style="--level:${escapeHtml(skill.level)}%" data-skill-bar aria-hidden="true"></i>
                      </div>`
                  )
                  .join("")}
              </article>`
          )
          .join("")}
      </div>
      <div class="tools-panel reveal">
        <h3>Tools & Workflow</h3>
        <div class="tool-cloud">${tags(workflowTools)}</div>
      </div>
    </section>
  `;
}

function TimelineSection() {
  return `
    <section class="section-shell timeline-section" id="experience" aria-labelledby="timeline-title">
      ${sectionLabel("04.", "Timeline")}
      <div class="section-heading reveal">
        <p>Experience</p>
        <h2 id="timeline-title">Execution history across internships, leadership, and education.</h2>
      </div>
      <div class="timeline">
        ${timeline
          .map(
            (item) => `
              <article class="timeline-card reveal">
                <div class="timeline-stamp">
                  <span>${escapeHtml(item.period)}</span>
                  <small>${escapeHtml(item.location)}</small>
                </div>
                <div class="timeline-body">
                  <p class="timeline-type">${escapeHtml(item.type)}</p>
                  <h3>${escapeHtml(item.title)}</h3>
                  <p class="org">${escapeHtml(item.org)}</p>
                  <ul>${bullets(item.bullets)}</ul>
                  <div class="tag-cloud">${tags(item.tags)}</div>
                </div>
              </article>`
          )
          .join("")}
      </div>
    </section>
  `;
}

function CredentialsSection() {
  return `
    <section class="section-shell credentials-section" aria-labelledby="credentials-title">
      ${sectionLabel("05.", "Validated Expertise")}
      <div class="section-heading reveal">
        <p>Credentials</p>
        <h2 id="credentials-title">Competitive, academic, and professional validation.</h2>
      </div>
      <div class="credential-grid">
        ${credentials
          .map(
            (credential) => `
              <article class="credential-card reveal">
                <span>${escapeHtml(credential.number)}</span>
                <p>${escapeHtml(credential.issuer)}</p>
                <h3>${escapeHtml(credential.title)}</h3>
                <dl>
                  <div><dt>CODE:</dt><dd>${escapeHtml(credential.code)}</dd></div>
                  <div><dt>DATE:</dt><dd>${escapeHtml(credential.date)}</dd></div>
                  <div><dt>HOURS:</dt><dd>${escapeHtml(credential.hours)}</dd></div>
                </dl>
              </article>`
          )
          .join("")}
      </div>
      <article class="featured-cert reveal">
        <div class="cert-badge">${escapeHtml(featuredCertification.label)}</div>
        <div>
          <p>Featured Certification</p>
          <h3>${escapeHtml(featuredCertification.title)}</h3>
          <p>${escapeHtml(featuredCertification.summary)}</p>
          <div class="cert-details">
            ${featuredCertification.details
              .map(
                (detail) => `
                  <div>
                    <span>${escapeHtml(detail.label)}</span>
                    <strong>${escapeHtml(detail.value)}</strong>
                  </div>`
              )
              .join("")}
          </div>
        </div>
      </article>
    </section>
  `;
}

function ContactSection() {
  const emailAddress = site.links.email.replace("mailto:", "");

  return `
    <section class="section-shell contact-section" id="contact" aria-labelledby="contact-title">
      ${sectionLabel("06.", "Get In Touch")}
      <div class="contact-grid">
        <div>
          <p class="panel-kicker reveal">Let's Build</p>
          <h2 id="contact-title" class="reveal">Open to internship opportunities, collaborative projects, and conversations about building things that matter.</h2>
          <div class="connect-list reveal">
            ${contactCards
              .map(
                (card) => `
                  <a class="connect-card${card.href ? "" : " is-static"}" ${card.href ? `href="${escapeHtml(card.href)}"${card.href.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : ""}` : ""}>
                    <span>${escapeHtml(card.label)}</span>
                    <strong>${escapeHtml(card.value)}</strong>
                    ${card.href ? '<i aria-hidden="true">-></i>' : ""}
                  </a>`
              )
              .join("")}
          </div>
          <p class="availability reveal">OPEN TO: On-site - Hybrid - Remote</p>
        </div>
        <form class="contact-form reveal" data-contact-form data-email="${escapeHtml(emailAddress)}">
          <h3>Send a Message</h3>
          <label>
            <span>Name</span>
            <input name="name" type="text" placeholder="Your name" autocomplete="name" required>
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" placeholder="your@email.com" autocomplete="email" required>
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows="5" placeholder="What are you building?" required></textarea>
          </label>
          <button class="button button-primary" type="submit">SEND MESSAGE</button>
          <p class="form-note" data-form-note aria-live="polite"></p>
        </form>
      </div>
    </section>
  `;
}

export function HomePage() {
  return Layout({
    title: site.name,
    path: "/",
    description:
      "Portfolio of Vibhore Goyal, DTU software engineering student, backend developer, ML practitioner, and hackathon winner.",
    jsonLd: [personSchema(), websiteSchema(), portfolioSchema()],
    children: `
      ${HeroSection()}
      ${WorkSection()}
      ${AboutSection()}
      ${TimelineSection()}
      ${CredentialsSection()}
      ${ContactSection()}
    `
  });
}
