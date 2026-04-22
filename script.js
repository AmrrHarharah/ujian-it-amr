const mode = document.getElementById("mode");
const text1 = document.getElementById("text1");
const black = document.getElementById("black");
mode.addEventListener("click", function () {
  alert("tombol di klik");
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("black");
  black.classList.toggle("white");
});
