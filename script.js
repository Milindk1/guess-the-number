"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 13;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);
let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
console.log(displayMessage("Correct number!"));

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //no input
  if (!guess) {
    displayMessage("No number!");

    //player wins
  } else if (guess === number) {
    // document.querySelector(".message").textContent = "Correct number";
    displayMessage("Correct Number!");

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = number;
    if (document.querySelector(".highscore").textContent < score) {
      document.querySelector(".highscore").textContent = score;
    }

    //wrong guess
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? "Too high" : "Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Game over");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//reset button
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start Guessing");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
});
