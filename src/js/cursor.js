var cursor = document.getElementById("cursor");
var lastPosition = 0;
var links = document.querySelectorAll("a");

window.addEventListener('scroll', function(e) {
 lastPosition = window.scrollY;
});

document.addEventListener("mousemove", mouseMove);

function mouseMove(e) {
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