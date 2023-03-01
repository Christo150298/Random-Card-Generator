/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  function randomCard() {
    const values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
    const cards = [];
    for (let a = 0; s < suits.length; s++) {
      for (let b = 0; v < values.length; v++) {
        const value = values[b];
        const suit = suits[a];
        cards.push({ value, suit });
      }
    }
    return cards;
  }
  document.querySelector(".card").classList.add("heart");
  setTimeout(() => {
    document.querySelector(".card").classList.remove("heart");
    document.querySelector(".card").classList.add("spade");
  }, 1000);
};
