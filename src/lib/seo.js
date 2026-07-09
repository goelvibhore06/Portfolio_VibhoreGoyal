import { projects, site } from "../data/site.js";
import { absoluteUrl } from "./html.js";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: site.role,
    email: site.links.email.replace("mailto:", ""),
    telephone: site.links.phone.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi",
      addressCountry: "IN"
    },
    sameAs: [site.links.linkedin, site.links.github].filter(Boolean)
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${site.name} Portfolio`,
    url: site.url,
    description: site.description,
    inLanguage: "en"
  };
}

export function portfolioSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${site.name} Selected Work`,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/#${project.id}`),
      name: project.title,
      description: project.summary
    }))
  };
}
