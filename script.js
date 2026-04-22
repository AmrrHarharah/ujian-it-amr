
const box1 = document.getElementById("box1");
const text1 = document.getElementById("text1");
const black = document.getElementById("black");
box1.addEventListener("click", function () {
  alert("tombol di klik");
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("black");
  black.classList.toggle("white");
});