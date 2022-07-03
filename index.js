"use strict";

const btns = document.getElementsByClassName("btn");
const block = document.querySelector(".wrapper")

const btnsHandler = ({ target }) => {
  block.style.flexDirection = target.dataset.flexDirection;
};
for (const button of btns) {
  button.addEventListener("click", btnsHandler);
}

