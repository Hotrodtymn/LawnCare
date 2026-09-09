const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav__links");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("nav__links--open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("nav__links--open");
  });
});


const form = document.querySelector(".contact__form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value;

  alert(
    `Thanks ${name}! Your estimate request has been received.`
  );

  form.reset();
});