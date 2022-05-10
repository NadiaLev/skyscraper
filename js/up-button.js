"use strict";
const upButton = document.querySelector(".up-button");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 1000) {
    upButton.classList.add("up-button--shown");
  } else {
    upButton.classList.remove("up-button--shown");
  }
});

upButton.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
