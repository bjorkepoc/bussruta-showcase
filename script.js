const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const year = document.querySelector("[data-year]");
const featureImage = document.querySelector("[data-feature-image]");
const featureTitle = document.querySelector("[data-feature-title]");
const featureCopy = document.querySelector("[data-feature-copy]");
const screenButtons = document.querySelectorAll("[data-screen]");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

screenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    screenButtons.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-selected", "false");
    });

    button.classList.add("is-active");
    button.setAttribute("aria-selected", "true");

    if (featureImage) {
      featureImage.src = button.dataset.screen || featureImage.src;
    }

    if (featureTitle) {
      featureTitle.textContent = button.dataset.title || "";
    }

    if (featureCopy) {
      featureCopy.textContent = button.dataset.copy || "";
    }
  });
});
