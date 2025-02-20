document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const menuToggle = document.querySelector(".menu-toggle");
    const navbarRight = document.querySelector(".navbar-right");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
  
    // Toggle Hamburger Menu
    if (menuToggle && navbarRight) {
        menuToggle.addEventListener("click", function () {
            navbarRight.classList.toggle("active");
  
            // Change the icon when menu is toggled
            if (navbarRight.classList.contains("active")) {
                menuToggle.innerText = "✖"; // Change to 'X' when open
            } else {
                menuToggle.innerText = "☰"; // Change back to hamburger icon
            }
        });
    }
  
    // Check if Dark Mode Toggle exists
    if (darkModeToggle) {
        // Check local storage for saved theme
        if (localStorage.getItem("darkMode") === "enabled") {
            body.classList.add("dark-mode");
            darkModeToggle.innerText = "☀️"; // Change icon to sun
        }
  
        // Toggle Dark Mode
        darkModeToggle.addEventListener("click", function () {
            body.classList.toggle("dark-mode");
  
            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
                darkModeToggle.innerText = "☀️"; // Change icon to sun
            } else {
                localStorage.setItem("darkMode", "disabled");
                darkModeToggle.innerText = "🌙"; // Change icon to moon
            }
        });
    }
  });
  