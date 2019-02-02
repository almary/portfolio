var cursor = document.getElementById("cursor");
var lastPosition = 0;
var links = document.querySelectorAll("a");
var position;
var yPos;
var xPos;
var valeurBefore = 0;

window.addEventListener("scroll", scrollUpdate);

function scrollUpdate(e) {
  lastPosition = window.scrollY;
  cursor.style.top = -20 + lastPosition + position + "px";
}

document.addEventListener("mousemove", mouseMove);

function mouseMove(e) {
  position = e.clientY;
  cursor.style.left = -20 + e.clientX + "px";
  cursor.style.top = -20 + e.clientY + lastPosition + "px";
}

// Click animation
document.addEventListener("click", mouseClick);

function mouseClick() {
  cursor.classList.add("isClicked");
  setTimeout(() => {
    cursor.classList.remove("isClicked");
  }, 100);
}

// Hover animation
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseover", function() {
    cursor.classList.add("hover");
  });
}

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseout", function() {
    cursor.classList.remove("hover");
  });
}

// Deformation

// pas opti
// document.addEventListener("mousemove", test);

// function test(e) {
//   valeur = Math.atan2(e.clientY - yPos, e.clientX - xPos) * (180 / Math.PI);
//   // console.log(valeur);
//   // transformTest = window.getComputedStyle(cursor).getPropertyValue("transform");
//   cursor.style.transform = "rotate(" + valeur + "deg)" + "skew(150deg)";
//   valeurBefore = valeur;
//   xPos = e.clientX;
//   yPos = e.clientY;
// }

// this.$c.style.transform =
//         " rotate( calc( var(--rotation) * 1rad) )"
//         + " scaleX( calc( var(--vx)/2 + var(--vy)/2 + 1 ) )";
