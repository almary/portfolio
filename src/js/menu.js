var menu = document.getElementById("headerMenu");
var works = document.getElementById("headerWorks");
var worksMover = document.getElementById("headerWorksMover");

// Menu
works.addEventListener("click", function() {
  menu.classList.toggle("isClicked");
  worksMover.classList.toggle("isClicked");
});
//
