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
  if (window.scrollY <= 100) nav.className = "header header--nespresso";
  else nav.className = "header header--nespresso isScrolled";
};
//

// Scroll header - wiki color
window.onscroll = () => {
  var navWiki = document.querySelector(".header--wikipedia");
  if (window.scrollY <= 100) navWiki.className = "header header--wikipedia";
  else navWiki.className = "header header--wikipedia isScrolled";
};
//

// Scroll header - moschino color
window.onscroll = () => {
  const navMoschino = document.querySelector(".header--moschino");
  if (window.scrollY <= 100) navMoschino.className = "header header--moschino";
  else navMoschino.className = "header header--moschino isScrolled";
};
//