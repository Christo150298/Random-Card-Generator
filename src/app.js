/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".card").classList.add("heart");
  setTimeout(() => {
    document.querySelector(".card").classList.remove("heart");
    document.querySelector(".card").classList.add("spade");
  }, 1000);
};
