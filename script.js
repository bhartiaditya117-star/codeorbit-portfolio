
// Toggle the mobile navigation menu.
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close the mobile menu after clicking a navigation link.
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Automatically display the current year in the footer.
document.getElementById("year").textContent = new Date().getFullYear();

// Prepare an email using the visitor's contact form details.
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("form-status");

  // Check that all fields contain text.
  if (!name || !email || !message) {
    status.textContent = "Please complete all fields.";
    return;
  }

  // Open the visitor's email application with the message prepared.
  const subject = encodeURIComponent("Portfolio contact from " + name);
  const body = encodeURIComponent(
    "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message
  );

  status.textContent = "Opening your email application...";
  window.location.href =
    "mailto:codeorbittech.in@gmail.com?subject=" + subject + "&body=" + body;
});
