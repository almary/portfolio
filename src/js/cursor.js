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
  cursor.style.top = -13 + lastPosition + position + "px";
}

document.addEventListener("mousemove", mouseMove);

function mouseMove(e) {
  position = e.clientY;
  cursor.style.left = -13 + e.clientX + "px";
  cursor.style.top = -13 + e.clientY + lastPosition + "px";
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