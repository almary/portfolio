var index = 0;
var speed = 1000;
var totalSlides = 3;
var translateMover = 0;
var arrowRight = document.querySelectorAll(".project__arrow--right");
var arrowLeft = document.querySelectorAll(".project__arrow--left");
var mover = document.getElementById("mover");
var wikipediaSvg = document.querySelector(".wikipediaSvg");
var amazonSvgLine = document.querySelector(".amazonSvg--line");
var amazonSvgArrow = document.querySelector(".amazonSvg--arrow");
var amazonSvgA = document.querySelector(".amazonSvg--a");
var nespressoSvg = document.querySelector(".nespressoSvg");
var titleBackground = document.querySelectorAll(".project__title--background");
var details = document.querySelectorAll(".project__details");
var countNumber = document.querySelectorAll(".project__count--number");
var wikipediaBackground = document.querySelector(".wikipediaBackground");
var amazonBackgroundA = document.querySelector(".amazonBackground--a");
var amazonBackgroundArrow = document.querySelector(".amazonBackground--arrow");
var amazonBackgroundLine = document.querySelector(".amazonBackground--line");
var nespressoBackground = document.querySelector(".nespressoBackground");

var projectClickWikiepdia = document.getElementById("projectClickWikipedia");
var projectClickAmazon = document.getElementById("projectClickAmazon");
var projectClickNespresso = document.getElementById("projectClickNespresso");

var backgroundCopy = document.querySelectorAll(
  ".project__title--backgroundCopy"
);
var nameCopy = document.querySelectorAll(".project__title--nameCopy");
var backgrounds = document.querySelectorAll(".project__title--background");
var whiteSlide = document.querySelector(".whiteSlide");

// Slider

addListener();
function addListener() {

  // Arrows
  for (let i = 0; i < arrowRight.length; i++) {
    arrowRight[i].addEventListener("click", next);
  }
  for (let i = 0; i < arrowRight.length; i++) {
    arrowLeft[i].addEventListener("click", back);
  }

  //Scroll
  if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
    window.addEventListener("wheel", wheelDetection, { passive: true });
  } else {
    window.addEventListener("DOMMouseScroll", wheelDetectionFirefox, {
      passive: true
    });
  }
}

function wheelDetection(event) {
  if (event.deltaY > 50) {
    next();
  }
  if (event.deltaY < -50) {
    back();
  }
}

function wheelDetectionFirefox(event) {
  var y = event.detail;
  if (event.detail > 2) {
    next();
  }
  if (event.detail < -2) {
    back();
  }
}

function removeListener() {
  for (let i = 0; i < arrowRight.length; i++) {
    arrowRight[i].removeEventListener("click", next);
  }
  for (let i = 0; i < arrowRight.length; i++) {
    arrowLeft[i].removeEventListener("click", back);
  }

  // Scroll
  window.removeEventListener("wheel", wheelDetection);
  window.removeEventListener("DOMMouseScroll", wheelDetectionFirefox);
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
    leaveSvg(wikipediaBackground);

    addLeave();
    addDetails();

    // for (let i = 0; i < 3; i++) {
    //   addDetails(i);
    // }
  }

  if (index === 1) {
    leaveSvg(amazonSvgLine);
    leaveSvg(amazonSvgArrow);
    leaveSvg(amazonSvgA);
    leaveSvg(amazonBackgroundA);
    leaveSvg(amazonBackgroundArrow);
    leaveSvg(amazonBackgroundLine);

    addLeave();
    addDetails();

    // for (let i = 3; i < 6; i++) {
    //   addDetails(i);
    // }
  }

  if (index === 2) {
    leaveSvg(nespressoSvg);
    leaveSvg(nespressoBackground);

    addLeave();
    addDetails();

    // for (let i = 6; i < 9; i++) {
    //   addDetails(i);
    // }
  }
}

function enter() {
  if (index === 0) {
    enterSvg(wikipediaSvg);
    enterSvg(wikipediaBackground);

    removeLeave();
    removeDetails();

    // for (let i = 0; i < 3; i++) {
    //   removeDetails(i);
    // }
  }

  if (index === 1) {
    enterSvg(amazonSvgLine);
    enterSvg(amazonSvgArrow);
    enterSvg(amazonSvgA);
    enterSvg(amazonBackgroundA);
    enterSvg(amazonBackgroundArrow);
    enterSvg(amazonBackgroundLine);

    removeLeave();
    removeDetails();

    // for (let i = 3; i < 6; i++) {
    //   removeDetails(i);
    // }
  }

  if (index === 2) {
    enterSvg(nespressoSvg);
    enterSvg(nespressoBackground);

    removeLeave();
    removeDetails();

    // for (let i = 6; i < 9; i++) {
    //   removeDetails(i);
    // }
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

function addDetails() {
  details[index].classList.add("leave");
}

function removeDetails() {
  details[index].classList.remove("leave");
}

// Event listener projects click
//wikipedia
projectClickWikiepdia.addEventListener("click", function() {
  delayUrlLoad("wikipedia.html", speed);
  transition();
});

//amazon
projectClickAmazon.addEventListener("click", function() {
  delayUrlLoad("amazon.html", speed);
  transition();
});

//nespresso
projectClickNespresso.addEventListener("click", function() {
  delayUrlLoad("nespresso.html", speed);
  transition();
});

// Timeout on click
function delayUrlLoad(url, mils) {
  setTimeout(function() {
    window.location.href = url;
  }, mils);
}

// Transition click
function transition() {
  for (let i = 0; i < backgrounds.length; i++) {
    backgroundCopy[i].classList.add("isClicked");
    nameCopy[i].classList.add("isClicked");
    backgrounds[i].classList.add("isClicked");
    whiteSlide.classList.add("isClicked");
  }
}