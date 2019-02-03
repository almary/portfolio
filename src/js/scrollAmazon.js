// Scroll header - amazon color
window.onscroll = () => {
  const navAmazon = document.querySelector(".header--amazon");
  if (window.scrollY <= 100) navMoschino.className = "header header--amazon";
  else navAmazon.className = "header header--amazon isScrolled";
};
//