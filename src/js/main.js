const menuButton = document.querySelector("#menu-button");
const mobileMenu = document.querySelector("#mobile-menu");
const openIcon = document.querySelector("#menu-open-icon");
const closeIcon = document.querySelector("#menu-close-icon");

if (menuButton && mobileMenu) {
  function setMenuOpen(isOpen) {
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );

    mobileMenu.classList.toggle("hidden", !isOpen);
    openIcon?.classList.toggle("hidden", isOpen);
    closeIcon?.classList.toggle("hidden", !isOpen);
  }

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) setMenuOpen(false);
  });
}
