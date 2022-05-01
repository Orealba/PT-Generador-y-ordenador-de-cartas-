/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};

let cards = [
  { number: "A", color: "red", suit: "♥", order: 1 },
  { number: "2", color: "red", suit: "♥", order: 2 },
  { number: "3", color: "red", suit: "♥", order: 3 },
  { number: "4", color: "red", suit: "♥", order: 4 },
  { number: "5", color: "red", suit: "♥", order: 5 },
  { number: "6", color: "red", suit: "♥", order: 6 },
  { number: "7", color: "red", suit: "♥", order: 7 },
  { number: "8", color: "red", suit: "♥", order: 8 },
  { number: "9", color: "red", suit: "♥", order: 9 },
  { number: "10", color: "red", suit: "♥", order: 10 },
  { number: "J", color: "red", suit: "♥", order: 11 },
  { number: "Q", color: "red", suit: "♥", order: 12 },
  { number: "K", color: "red", suit: "♥", order: 13 },

  { number: "A", color: "red", suit: "♦", order: 1 },
  { number: "2", color: "red", suit: "♦", order: 2 },
  { number: "3", color: "red", suit: "♦", order: 3 },
  { number: "4", color: "red", suit: "♦", order: 4 },
  { number: "5", color: "red", suit: "♦", order: 5 },
  { number: "6", color: "red", suit: "♦", order: 6 },
  { number: "7", color: "red", suit: "♦", order: 7 },
  { number: "8", color: "red", suit: "♦", order: 8 },
  { number: "9", color: "red", suit: "♦", order: 9 },
  { number: "10", color: "red", suit: "♦", order: 10 },
  { number: "J", color: "red", suit: "♦", order: 11 },
  { number: "Q", color: "red", suit: "♦", order: 12 },
  { number: "K", color: "red", suit: "♦", order: 13 },

  { number: "A", color: "black", suit: "♣", order: 1 },
  { number: "2", color: "black", suit: "♣", order: 2 },
  { number: "3", color: "black", suit: "♣", order: 3 },
  { number: "4", color: "black", suit: "♣", order: 4 },
  { number: "5", color: "black", suit: "♣", order: 5 },
  { number: "6", color: "black", suit: "♣", order: 6 },
  { number: "7", color: "black", suit: "♣", order: 7 },
  { number: "8", color: "black", suit: "♣", order: 8 },
  { number: "9", color: "black", suit: "♣", order: 9 },
  { number: "10", color: "black", suit: "♣", order: 10 },
  { number: "J", color: "black", suit: "♣", order: 11 },
  { number: "Q", color: "black", suit: "♣", order: 12 },
  { number: "K", color: "black", suit: "♣", order: 13 },

  { number: "A", color: "black", suit: "♠", order: 1 },
  { number: "2", color: "black", suit: "♠", order: 2 },
  { number: "3", color: "black", suit: "♠", order: 3 },
  { number: "4", color: "black", suit: "♠", order: 4 },
  { number: "5", color: "black", suit: "♠", order: 5 },
  { number: "6", color: "black", suit: "♠", order: 6 },
  { number: "7", color: "black", suit: "♠", order: 7 },
  { number: "8", color: "black", suit: "♠", order: 8 },
  { number: "9", color: "black", suit: "♠", order: 9 },
  { number: "10", color: "black", suit: "♠", order: 10 },
  { number: "J", color: "black", suit: "♠", order: 11 },
  { number: "Q", color: "black", suit: "♠", order: 12 },
  { number: "K", color: "black", suit: "♠", order: 13 }
];
let resultadoFinal = [];
function selectCards(numberCard) {
  var cardResult = [];
  while (cardResult.length < numberCard) {
    let cardIndex = Math.floor(Math.random() * cards.length);
    let theCard = cards[cardIndex];
    if (!cardResult.filter(i => i === theCard).length) {
      cardResult.push(theCard);
    }
  }
  return cardResult;
}

const giveMeCard = document.getElementById("giveMeCard");
giveMeCard.addEventListener("click", () => {
  const input = document.getElementById("quantity").value;
  console.log(input);

  resultadoFinal = selectCards(input);
  console.log(resultadoFinal);
  document.getElementById("misCartas").innerHTML = "";
  for (var i = 0; i < resultadoFinal.length; i++) {
    console.log(resultadoFinal[i]);
    document
      .getElementById("misCartas")
      .insertAdjacentHTML(
        "beforeend",
        '<div id="card" class=' +
          resultadoFinal[i].color +
          ' ><h1 id="pokerIconos1">' +
          resultadoFinal[i].suit +
          '</h1><h1 id="pokerCards">' +
          resultadoFinal[i].number +
          '</h1><h1 id="pokerIconos2">' +
          resultadoFinal[i].suit +
          "</h1></div>"
      );
  }
});

const bubbleSort = arr => {
  let wall = arr.length - 1; //iniciamos el wall o muro al final del array
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      //comparar las posiciones adyacentes, si la correcta es más grande, tenemos que intercambiar
      if (arr[index].order > arr[index + 1].order) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    wall--; //disminuir la pared para optimizar
  }
  return arr;
};

const sortCards = document.getElementById("botonOrdenar");
sortCards.addEventListener("click", () => {
  let cartasOrdenadas = bubbleSort(resultadoFinal);
  document.getElementById("cartasOrdenadas").innerHTML = "";
  for (var i = 0; i < cartasOrdenadas.length; i++) {
    document
      .getElementById("cartasOrdenadas")
      .insertAdjacentHTML(
        "beforeend",
        '<div id="card" class=' +
          cartasOrdenadas[i].color +
          ' ><h1 id="pokerIconos1">' +
          cartasOrdenadas[i].suit +
          '</h1><h1 id="pokerCards">' +
          cartasOrdenadas[i].number +
          '</h1><h1 id="pokerIconos2">' +
          cartasOrdenadas[i].suit +
          "</h1></div>"
      );
  }
});
