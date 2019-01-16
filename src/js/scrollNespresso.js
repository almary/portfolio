// Scroll header - Nespresso color
window.onscroll = () => {
  const nav = document.querySelector(".header--nespresso");
  if (window.scrollY <= 100) nav.className = "header header--nespresso";
  else nav.className = "header header--nespresso isScrolled";
};
//
