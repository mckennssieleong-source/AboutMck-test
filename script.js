const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

// Open and close the mobile navigation.
menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  menuButton.setAttribute(
    "aria-label",
    isExpanded ? "Open navigation menu" : "Close navigation menu"
  );
  siteNav.classList.toggle("is-open", !isExpanded);
});

// Close the menu after choosing a section.
siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    siteNav.classList.remove("is-open");
  });
});

// Keep the footer year up to date.
document.querySelector("#year").textContent = new Date().getFullYear();

// Validate the form, then open a pre-filled email in the visitor's email app.
// Change this address to your own in the line below.
const contactForm = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");
const portfolioEmail = "mckennssie.leong@gmail.com";

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) return;

  const formData = new FormData(contactForm);
  const name = formData.get("name");
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(
    `From: ${name}\nEmail: ${senderEmail}\n\n${message}`
  );

  formNote.textContent = "Opening your email app with the message ready to send.";
  window.location.href = `mailto:${portfolioEmail}?subject=${subject}&body=${body}`;
});





