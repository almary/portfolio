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


// Progress Bar
var bar = document.querySelector(".progress");
console.log(bar)

document.onscroll = function(){
  var pos = showPosition(document.body);
  bar.style.width = pos + "%";
  console.log(pos);
};

function showPosition(elm){
  var parent = elm.parentNode,
      pos = (elm.scrollTop || parent.scrollTop) / (parent.scrollHeight - parent.clientHeight ) * 100;

  return pos;
};