const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const progress = document.querySelector("[data-scroll-progress]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function setHeaderState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function setScrollProgress() {
  if (!progress) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? window.scrollY / max : 0;
  progress.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
}

function closeMenu() {
  if (!menuToggle || !nav) return;
  menuToggle.classList.remove("is-open");
  nav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  document.body.classList.remove("nav-open");
}

function wireNavigation() {
  if (!menuToggle || !nav) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.classList.toggle("is-open");
    nav.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    document.body.classList.toggle("nav-open", isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

function wireReveal() {
  const revealItems = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    document.querySelectorAll("[data-skill-bar]").forEach((bar) => bar.classList.add("is-filled"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        entry.target.querySelectorAll("[data-skill-bar]").forEach((bar) => bar.classList.add("is-filled"));
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -4% 0px", threshold: 0.08 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function wireTypewriter() {
  const target = document.querySelector("[data-role-typewriter]");
  if (!target || reduceMotion) return;

  const roles = (target.dataset.roles || "").split("|").filter(Boolean);
  if (roles.length < 2) return;

  let roleIndex = 0;
  let charIndex = roles[0].length;
  let deleting = true;

  function tick() {
    const current = roles[roleIndex];
    target.textContent = current.slice(0, charIndex);

    if (deleting) {
      charIndex -= 1;
      if (charIndex <= 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    } else {
      charIndex += 1;
      if (charIndex >= roles[roleIndex].length) {
        deleting = true;
        window.setTimeout(tick, 1350);
        return;
      }
    }

    window.setTimeout(tick, deleting ? 38 : 62);
  }

  window.setTimeout(tick, 1000);
}

function wireProjectMotion() {
  if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * -10;
      card.style.setProperty("--tilt-x", `${y.toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${x.toFixed(2)}deg`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    });
  });
}

function wireContactForms() {
  document.querySelectorAll("[data-contact-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const email = form.dataset.email;
      const note = form.querySelector("[data-form-note]");
      const name = formData.get("name") || "";
      const senderEmail = formData.get("email") || "";
      const message = formData.get("message") || "";

      const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`);

      if (note) note.textContent = "Opening your email draft...";
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });
  });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

setHeaderState();
setScrollProgress();
wireNavigation();
wireReveal();
wireTypewriter();
wireProjectMotion();
wireContactForms();

window.addEventListener(
  "scroll",
  () => {
    setHeaderState();
    setScrollProgress();
  },
  { passive: true }
);
