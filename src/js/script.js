var index = 0;
var arrowRight = document.querySelectorAll(".project__arrow--right");
var arrowLeft = document.querySelectorAll(".project__arrow--left");
var mover = document.getElementById("mover");

for (let i = 0; i < arrowRight.length; i++) {
  arrowRight[i].addEventListener('click', next);
}

for (let i = 0; i < arrowRight.length; i++) {
  arrowLeft[i].addEventListener('click', back);
}

function next(){
 mover.style.transform = "translateY(-100vh)";
}

function back() {
  mover.style.transform = "translateY(0vh)";
}