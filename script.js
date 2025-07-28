document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
});
function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
}
