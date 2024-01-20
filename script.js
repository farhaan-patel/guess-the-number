"use strict";

// 📃 72. Selecting and Manipulating Elements

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = 'You win🥳';
// document.querySelector(".number").textContent = 55;
// console.log( document.querySelector(".guess").value);
// document.querySelector(".guess").value = 55;
// console.log( document.querySelector(".guess").value);

// 📃 73. Handling Click Events

let scretNumber = Math.trunc(Math.random() * 20 + 1);
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
let highscore = 0;
let score = 20;
// document.querySelector(".number").textContent = scretNumber;
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    // document.querySelector(".message").textContent = "No Number 🚫";
    displayMessage("No Number 🚫");
  } else if (guess === scretNumber) {
    // document.querySelector(".message").textContent = "You win🥳";
    displayMessage("You win🥳");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = scretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== scretNumber) {
    if (score > 1) {
      //   document.querySelector(".message").textContent =
      //     guess > scretNumber ? "too Hight 📈" : "too low 📉";
      displayMessage(guess > scretNumber ? "too Hight 📈" : "too low 📉");
      score--;
      document.querySelector(".score").textContent = score;
      guess = Number((document.querySelector(".guess").value = ""));

    } else {
      displayMessage("You Lose 😖💣");
      //   document.querySelector(".message").textContent = "You Lose 😖💣";
      document.querySelector(".score").textContent = 0;
    }
  }
  //   else if (guess > scretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "too Hight 📈";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "You Lose 😖💣";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   } else if (guess < scretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "too low 📉";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "You Lose 😖💣";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
  else if (score < 1) {
    document.querySelector(".score").textContent = "you lose 😞";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  scretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  //   document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  guess = Number((document.querySelector(".guess").value = ""));
});
