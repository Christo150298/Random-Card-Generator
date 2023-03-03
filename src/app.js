/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let randomCard = () => {
  let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let randomIndex = Math.floor(Math.random() * values.length);
  console.log(values[randomIndex]);
  return randomIndex;
};
let aleatorio = () => {
  const selector = document.querySelector("#number");
  selector.innerHTML = randomCard();
};

window.onload = () => {
  setInterval(aleatorio, 2500);
};
