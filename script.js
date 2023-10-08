document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector(".navbar ul ");
  const navLinks = document.querySelectorAll(".navbar ul li a");

  // Toggle navbar saat tombol menu diklik
  menuToggle.addEventListener("click", function() {
    navList.classList.toggle("active");
  });

  // Sembunyikan navbar saat salah satu link di dalamnya diklik
  navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      navList.classList.remove("active");
    });
  });
});
