var cursor = document.getElementById("cursor");
var lastPosition = 0;

window.addEventListener('scroll', function(e) {
 lastPosition = window.scrollY;
});

document.addEventListener("mousemove", mouseMove);

function mouseMove(e) {
  cursor.style.left = -20 + e.clientX + "px";
  cursor.style.top = -20 + e.clientY + lastPosition + "px";
}

