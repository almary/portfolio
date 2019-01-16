var index = 0;
var speed = 1000;
var totalSlides = 3;
var translateMover = 0;
var arrowRight = document.querySelectorAll(".project__arrow--right");
var arrowLeft = document.querySelectorAll(".project__arrow--left");
var mover = document.getElementById("mover");
var wikipediaSvg = document.getElementById("wikipediaSvg");
var bearMouth = document.getElementById("bear--mouth");
var bearHead = document.getElementById("bear--head");
var nespressoSvg = document.getElementById("nespressoSvg");
var titleBackground = document.querySelectorAll(".project__title--background");
var detailsContent = document.querySelectorAll(".details--content");
var countNumber = document.querySelectorAll(".project__count--number");


// Slider

addListener();
function addListener() {
  console.log("add");

  // Arrows
  for (let i = 0; i < arrowRight.length; i++) {
    arrowRight[i].addEventListener("click", next);
  }
  for (let i = 0; i < arrowRight.length; i++) {
    arrowLeft[i].addEventListener("click", back);
  }

  //Scroll
  window.addEventListener("wheel", wheelDetection);
}

function wheelDetection(event) {
  var y = event.deltaY;
  if (event.deltaY > 50) {
    console.log("scroll down");
    next();
  }
  if (event.deltaY < -50) {
    console.log("scroll up");
    back();
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

  // Scroll
  window.removeEventListener("wheel", wheelDetection);
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
    enter();
    setTimeout(function() {
      addListener();
    }, speed);
  }, speed);
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
      index = totalSlides - 1;
    }
    enter();
    setTimeout(function() {
      addListener();
    }, speed);
  }, speed);
}

function leave() {
  removeListener();

  if (index === 0) {
    wikipediaSvg.classList.remove("enter");
    wikipediaSvg.classList.add("leave");

    titleBackground[index].classList.add("leave");

    detailsContent[0].classList.add("leave");
    detailsContent[1].classList.add("leave"); //si mal codé
    detailsContent[2].classList.add("leave");

    countNumber[index].classList.add("leave");
  }

  if (index === 1) {
    bearMouth.classList.remove("enter");
    bearHead.classList.remove("enter");
    bearMouth.classList.add("leave");
    bearHead.classList.add("leave");

    titleBackground[index].classList.add("leave");

    detailsContent[3].classList.add("leave");
    detailsContent[4].classList.add("leave"); //si mal codé
    detailsContent[5].classList.add("leave");

    countNumber[index].classList.add("leave");
  }

  if (index === 2) {
    nespressoSvg.classList.remove("enter");
    nespressoSvg.classList.add("leave");

    titleBackground[index].classList.add("leave");

    detailsContent[6].classList.add("leave");
    detailsContent[7].classList.add("leave"); //si mal codé
    detailsContent[8].classList.add("leave");

    countNumber[index].classList.add("leave");
  }
}

function enter() {
  if (index === 0) {
    wikipediaSvg.classList.remove("leave");
    wikipediaSvg.classList.add("enter");

    titleBackground[index].classList.remove("leave");

    detailsContent[0].classList.remove("leave");
    detailsContent[1].classList.remove("leave"); //si mal codé
    detailsContent[2].classList.remove("leave");

    countNumber[index].classList.remove("leave");
  }

  if (index === 1) {
  bearMouth.classList.remove("leave");
  bearHead.classList.remove("leave");
  bearMouth.classList.add("enter");
  bearHead.classList.add("enter");

  titleBackground[index].classList.remove("leave");

  detailsContent[3].classList.remove("leave");
  detailsContent[4].classList.remove("leave"); //si mal codé
  detailsContent[5].classList.remove("leave");

  countNumber[index].classList.remove("leave");
  }

  if (index === 2) {
    nespressoSvg.classList.remove("leave");
    nespressoSvg.classList.add("enter");

    titleBackground[index].classList.remove("leave");

    detailsContent[6].classList.remove("leave");
    detailsContent[7].classList.remove("leave"); //si mal codé
    detailsContent[8].classList.remove("leave");

    countNumber[index].classList.remove("leave");
  }
}