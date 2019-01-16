var menu = document.getElementById("headerMenu");
var works = document.getElementById("headerWorks");

// Menu
works.addEventListener("click", function() {
  menu.classList.toggle("isClicked");
});
//

// Scroll header - Nespresso color
window.onscroll = () => {
  const nav = document.querySelector(".header--nespresso");
  if (window.scrollY <= 90) nav.className = "header header--nespresso";
  else nav.className = "header header--nespresso isScrolled";
};
//
