// Mobile Navigation

const menuButton = document.querySelector("#menu-button");
const mobileMenu = document.querySelector("#mobile-menu");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isOpen));
    mobileMenu.classList.toggle("hidden");
  });

  // Close menu when a navigation link is clicked
  const mobileLinks = mobileMenu.querySelectorAll("a");

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}
