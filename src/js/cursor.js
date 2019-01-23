var cursor = document.getElementById("cursor");

document.addEventListener("mousemove", mouseMove);

function mouseMove(e) {
  cursor.style.left = -50 + e.clientX + "px";
  cursor.style.top = -50 + e.clientY + "px";
}
