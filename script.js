const count = document.querySelector(".counter-display");
const plus = document.querySelector(".plus-button");
const reset = document.querySelector(".button-qaytarish");
const minus = document.querySelector(".minus-button");

let number = 0;
if (plus && minus && reset && count) {
  plus.addEventListener("click", function () {
    number++;
    count.textContent = number;
    reset.disabled = false;
    minus.disabled = false;
  });
  minus.addEventListener("click", function () {
    number--;
    count.textContent = number;
    if (number === 0) {
      minus.disabled = true;
      reset.disabled = true;
    }
  });
  reset.addEventListener("click", function () {
    number = 0;
    count.textContent = number;
    minus.disabled = true;
    reset.disabled = true;
  });
}
const counter = document.querySelector("#counter");
const symbols = document.querySelector(".tt-symbol-counter");
if (counter && symbols) {
  counter.addEventListener("input", function () {
    symbols.textContent = counter.value.length;
  });
}
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
if (menuButton && navLinks) {
  menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
}
