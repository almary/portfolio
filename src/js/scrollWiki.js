// Scroll header - wiki color
window.onscroll = () => {
  var navWiki = document.querySelector(".header--wikipedia");
  if (window.scrollY <= 100) navWiki.className = "header header--wikipedia";
  else navWiki.className = "header header--wikipedia isScrolled";
};
//

// // Parallax init
// let Rellax = require('rellax');
// let rellax = new Rellax('.rellax');