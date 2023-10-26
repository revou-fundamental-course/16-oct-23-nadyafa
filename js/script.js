// Image slide banner
var counter = 1;
setInterval(function () {
  document.getElementById("slide" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

// Color changing navbar
window.addEventListener("scroll", function () {
  var navbar = document.querySelector("header");
  navbar.classList.toggle("nav-bg-color", window.scrollY > 0);
});
