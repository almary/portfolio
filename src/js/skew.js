let images = document.querySelectorAll("img");
let videos = document.querySelectorAll("video");
let text = document.querySelectorAll(".description__text");
let currentPixel = window.pageYOffset;

if (window.matchMedia("(min-width: 750px)").matches) {
  const looper = function() {
    const newPixel = window.pageYOffset;
    var diff = newPixel - currentPixel;
    var speed = diff * 0.02;
    for (let i = 0; i < images.length; i++) {
      images[i].style.transform = "skewY(" + speed + "deg)";
    }

    for (let i = 0; i < videos.length; i++) {
      videos[i].style.transform = "skewY(" + speed + "deg)";
    }

    for (let i = 0; i < text.length; i++) {
      text[i].style.transform = "skewY(" + speed + "deg)";
    }

    currentPixel = newPixel;

    requestAnimationFrame(looper);
  };

  looper();
}