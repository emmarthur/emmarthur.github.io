/**
 * emmarthur.github.io — main.js
 * I wrote this file for contact form validation, navbar active-state updates,
 * and smooth scroll from the hero button to the About section.
 */

// I cache DOM references once so I do not query the document on every event.
const navLinks = document.querySelectorAll(".navbar .nav-link");
const navBrand = document.querySelector(".navbar-brand");
const contactForm = document.querySelector("#contact-form");
const formFeedback = document.querySelector("#form-feedback");

/**
 * I highlight whichever nav link matches the current section hash.
 * I also set aria-current on the brand when the hash is #home (no separate Home link).
 */
function updateNavHighlight() {
  const currentHash = window.location.hash || "#home";

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === currentHash;
    link.classList.toggle("active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  if (navBrand) {
    const isHome = currentHash === "#home";
    navBrand.classList.toggle("active", isHome);
    if (isHome) {
      navBrand.setAttribute("aria-current", "page");
    } else {
      navBrand.removeAttribute("aria-current");
    }
  }
}

/** I use a simple regex to check for a basic email shape (name@domain.tld). */
function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/** I add Bootstrap is-invalid and fill the matching invalid-feedback div. */
function showFieldError(fieldId, errorId, message) {
  const field = document.querySelector(fieldId);
  const error = document.querySelector(errorId);
  field.classList.add("is-invalid");
  error.textContent = message;
}

/** I reset all field errors before each validation run. */
function clearFieldErrors() {
  contactForm.querySelectorAll(".form-control").forEach((field) => {
    field.classList.remove("is-invalid");
  });
  ["#name-error", "#email-error", "#message-error"].forEach((id) => {
    const error = document.querySelector(id);
    if (error) {
      error.textContent = "";
    }
  });
}

/**
 * I validate name, email, and message per my project rules.
 * Returns true only when all three fields pass.
 */
function validateContactForm() {
  clearFieldErrors();

  const name = document.querySelector("#contact-name").value.trim();
  const email = document.querySelector("#contact-email").value.trim();
  const message = document.querySelector("#contact-message").value.trim();
  let isValid = true;

  if (name.length < 2) {
    showFieldError(
      "#contact-name",
      "#name-error",
      "Please enter a full name (at least 2 characters).",
    );
    isValid = false;
  }

  if (!isValidEmail(email)) {
    showFieldError(
      "#contact-email",
      "#email-error",
      "Please enter a valid email address.",
    );
    isValid = false;
  }

  if (message.length < 10) {
    showFieldError(
      "#contact-message",
      "#message-error",
      "Please enter a message with at least 10 characters.",
    );
    isValid = false;
  }

  return isValid;
}

/**
 * I handle form submit: prevent reload, validate, then show success or errors.
 * I use FormData to read field values by their name attributes.
 */
function handleContactSubmit(event) {
  event.preventDefault();

  if (!validateContactForm()) {
    formFeedback.hidden = true;
    return;
  }

  const formData = new FormData(contactForm);
  const name = formData.get("fullname");
  const email = formData.get("email");
  const reason = formData.get("reason");

  formFeedback.hidden = false;
  formFeedback.classList.remove("alert-danger");
  formFeedback.classList.add("alert-success");
  formFeedback.textContent = `Thank you, ${name}. The ${reason} message was received at ${email}. This demo form does not send email yet.`;

  contactForm.reset();
  clearFieldErrors();
}

// I update nav highlight after each nav link click (hash may change on next tick).
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    window.setTimeout(updateNavHighlight, 0);
  });
});

if (navBrand) {
  navBrand.addEventListener("click", () => {
    window.setTimeout(updateNavHighlight, 0);
  });
}

// I sync nav highlight when the URL hash changes (e.g. back/forward or in-page links).
window.addEventListener("hashchange", updateNavHighlight);

if (contactForm) {
  contactForm.addEventListener("submit", handleContactSubmit);
}

/**
 * I scroll to #about from the hero button instead of using a duplicate anchor link.
 * This avoids WAVE redundant-link alerts (nav already has an About link).
 */
const heroAboutBtn = document.querySelector("#hero-about-btn");
if (heroAboutBtn) {
  heroAboutBtn.addEventListener("click", () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#about");
      updateNavHighlight();
    }
  });
}

// I set the correct active state on first load (default #home).
updateNavHighlight();
