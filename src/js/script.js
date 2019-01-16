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
    leaveSvg(wikipediaSvg);

    addLeave();

    for (let i = 0; i < 3; i++) {
      addDetails(i);
    }
  }

  if (index === 1) {
    leaveSvg(bearMouth);
    leaveSvg(bearHead);

    addLeave();

    for (let i = 3; i < 6; i++) {
      addDetails(i);
    }
  }

  if (index === 2) {
    leaveSvg(nespressoSvg);

    addLeave();

    for (let i = 6; i < 9; i++) {
      addDetails(i);
    }
  }
}

function enter() {
  if (index === 0) {
    enterSvg(wikipediaSvg);

    removeLeave();

    for (let i = 0; i < 3; i++) {
      removeDetails(i);
    }
  }

  if (index === 1) {
    enterSvg(bearMouth);
    enterSvg(bearHead);

    removeLeave();
    for (let i = 3; i < 6; i++) {
      removeDetails(i);
    }
  }

  if (index === 2) {
    enterSvg(nespressoSvg);

    removeLeave();
    for (let i = 6; i < 9; i++) {
      removeDetails(i);
    }
  }
}

function leaveSvg(name) {
  name.classList.remove("enter");
  name.classList.add("leave");
}

function enterSvg(name) {
  name.classList.remove("leave");
  name.classList.add("enter");
}

function addLeave() {
  titleBackground[index].classList.add("leave");
  countNumber[index].classList.add("leave");
}

function removeLeave() {
  titleBackground[index].classList.remove("leave");
  countNumber[index].classList.remove("leave");
}

function addDetails(i) {
  detailsContent[i].classList.add("leave");
}

function removeDetails(i) {
  detailsContent[i].classList.remove("leave");
}