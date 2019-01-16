// Scroll header - moschino color
window.onscroll = () => {
  const navMoschino = document.querySelector(".header--moschino");
  if (window.scrollY <= 100) navMoschino.className = "header header--moschino";
  else navMoschino.className = "header header--moschino isScrolled";
};
//