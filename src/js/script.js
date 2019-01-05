var index = 0;
var totalSlides = 2;
var translateMover = 0;
var arrowRight = document.querySelectorAll(".project__arrow--right");
var arrowLeft = document.querySelectorAll(".project__arrow--left");
var mover = document.getElementById("mover");
var wikipediaSvg = document.getElementById("wikipediaSvg");
var bearMouth = document.getElementById("bear--mouth");
var bearHead = document.getElementById("bear--head");

addListener();
function addListener() {
  console.log('add');
  for (let i = 0; i < arrowRight.length; i++) {
    arrowRight[i].addEventListener("click", next);
  }
  for (let i = 0; i < arrowRight.length; i++) {
    arrowLeft[i].addEventListener("click", back);
  }
}

function removeListener() {
  console.log("remove");
  for (let i = 0; i < arrowRight.length; i++) {
    arrowRight[i].removeEventListener("click", next);
  }
  for (let i = 0; i < arrowRight.length; i++) {
    arrowLeft[i].removeEventListener("click", back);
  }
}

function next() {
  leave();
  setTimeout(function() {
    if (index < totalSlides - 1) {
      translateMover = translateMover - 100;
      mover.style.transform = "translateY(" + translateMover + "vh)";
      index++;
    } else {
      translateMover = 0;
      mover.style.transform = "translateY(" + translateMover + "vh)";
      index = 0;
    }
    addListener();
  }, 2000);
}

function back() {
  leave();
  setTimeout(function() {
  if (index > 0) {
    translateMover = translateMover + 100;
    mover.style.transform = "translateY(" + translateMover + "vh)";
    index--;
  } else {
    translateMover = (totalSlides - 1) * -100;
    mover.style.transform = "translateY(" + translateMover + "vh)";
    index = 1;
  }
  addListener();
}, 2000);
}

function leave() {
  removeListener();
  if (index === 0) {
    wikipediaSvg.classList.add("leave");
  }
  if (index === 1) {
    bearMouth.classList.add("leave");
    bearHead.classList.add("leave");
  }
}
