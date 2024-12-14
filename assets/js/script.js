// JavaScript for Hamburger Menu
document.getElementById("hamburger").addEventListener("click", function () {
  const navLinks = document.getElementById("nav-links");
  const hamburgerIcon = document.getElementById("hamburger");

  // Toggle "active" class to show/hide the menu
  navLinks.classList.toggle("active");

  // Toggle the hamburger icon to an "X" when active
  hamburgerIcon.classList.toggle("open");
});

// Close the hamburger menu when you touch anywhere outside it
document.addEventListener("touchstart", function(event) {
  const navLinks = document.getElementById("nav-links");
  const hamburger = document.getElementById("hamburger");

  if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
    navLinks.classList.remove("active");
    hamburger.classList.remove("open");
  }
});
