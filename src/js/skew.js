// let images = document.querySelectorAll("img");
// let videos = document.querySelectorAll("video");
// let text = document.querySelectorAll(".description__text");
// let currentPixel = window.pageYOffset;

// if (window.matchMedia("(min-width: 750px)").matches) {
//   const looper = function() {
//     const newPixel = window.pageYOffset;
//     var diff = newPixel - currentPixel;
//     var speed = diff * 0.1;
//     for (let i = 0; i < images.length; i++) {
//       images[i].style.transform = "skewY(" + speed + "deg)";
//     }

//     for (let i = 0; i < videos.length; i++) {
//       videos[i].style.transform = "skewY(" + speed + "deg)";
//     }

//     for (let i = 0; i < text.length; i++) {
//       text[i].style.transform = "skewY(" + speed + "deg)";
//     }

//     currentPixel = newPixel;

//     requestAnimationFrame(looper);
//   };

//   looper();
// }

var scrollContainer = document.querySelector('.scroll-container')
var scrollContent = document.querySelector('.scroll-content')

function resize () {
  document.body.style.height = scrollContent.offsetHeight + 'px'
}

var scrollY = 0

function tick () {
  requestAnimationFrame(tick)
  var diff = (scrollY - document.documentElement.scrollTop)
  scrollY -= (scrollY - document.documentElement.scrollTop) * 0.15
  scrollContent.style.transform = 'translate3d(0, ' + -scrollY + 'px, 0) skew(0, '+diff*.009+'deg)'
}

tick()

resize()

window.addEventListener('resize', resize)