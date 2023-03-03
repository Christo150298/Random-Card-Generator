/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let icons = ["♦", "♥", "♠", "♣"];

  document.querySelector(".card").innerHTML = `<div id='card' > 
  <div id="icono1">${icons[0]}</div>
  <div id="valor">${values[0]}</div>
  <div id="icono2">${icons[0]}</div>
  </div>`;

  const createCard = () => {
    const randomCard = () => {
      const RamdomIcon = Math.floor(Math.random() * icons.length);
      const RandomValue = Math.floor(Math.random() * values.length);
      const icon = icons[RamdomIcon];
      const value = values[RandomValue];
      card.innerHTML = `
      <div id="icono1">${icon}</div>
      <div id="valor">${value}</div>
      <div id="icono2">${icon}</div>
      </div>`;
      if (icon === "♥") {
        card.innerHTML = `<div class='card-hearts red'> 
        <div id="icono1" >${icon}</div>
        <div id="valor" >${value}</div>
        <div id="icono2" >${icon}</div></div>`;
      } else if (icon === "♦") {
        card.innerHTML = `<div class='card-Diamonds red'> 
      <div id="icono1" >${icon}</div>
      <div id="valor" >${value}</div>
      <div id="icono2" >${icon}</div></div>`;
      } else if (icon === "♠") {
        card.innerHTML = `<div class='card-spades'> 
        <div id="icono1" >${icon}</div>
        <div id="valor" >${value}</div>
        <div id="icono2" >${icon}</div></div>`;
      } else {
        card.innerHTML = `<div class='card-clubs'> 
        <div id="icono1" >${icon}</div>
        <div id="valor" >${value}</div>
        <div id="icono2" >${icon}</div></div>`;
      }
    };
    randomCard();
  };

  createCard();
  const button = document.querySelector("#button");
  button.addEventListener("click", createCard);

  setInterval(createCard, 2000);
};
