document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbarRight = document.querySelector(".navbar-right");

  menuToggle.addEventListener("click", function () {
      navbarRight.classList.toggle("active");
  });
});
