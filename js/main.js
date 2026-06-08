/**
 * emmarthur.github.io - main JavaScript
 * Contact form validation and navbar active-state updates
 */

const navLinks = document.querySelectorAll(".navbar .nav-link");
const navBrand = document.querySelector(".navbar-brand");
const contactForm = document.querySelector("#contact-form");
const formFeedback = document.querySelector("#form-feedback");

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

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function showFieldError(fieldId, errorId, message) {
  const field = document.querySelector(fieldId);
  const error = document.querySelector(errorId);
  field.classList.add("is-invalid");
  error.textContent = message;
}

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
      "Please enter your full name.",
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
  formFeedback.textContent = `Thank you, ${name}. Your ${reason} message was received at ${email}. This demo form does not send email yet.`;

  contactForm.reset();
  clearFieldErrors();
}

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

window.addEventListener("hashchange", updateNavHighlight);

if (contactForm) {
  contactForm.addEventListener("submit", handleContactSubmit);
}

updateNavHighlight();
