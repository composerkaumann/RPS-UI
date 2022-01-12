"use strict";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document.addEventListener("keydown", function (event) {
  if (!!document.getElementById("playBtn") && event.key === "p") {
    buttonsWrap.removeChild(buttonPlay);
    buttonsWrap.appendChild(button1);
    buttonsWrap.appendChild(button2);
    buttonsWrap.appendChild(button3);
  }
  if (!document.getElementById("playBtn") && event.key === "r") {
  }
  if (!document.getElementById("playBtn") && event.key === "p") {
  }
  if (!document.getElementById("playBtn") && event.key === "s") {
  }
});

// Random with crypto security between x and y.
function computerPlay() {
  const cs = (x, y) =>
    (x +
      ((y - x + 1) * crypto.getRandomValues(new Uint32Array(1))[0]) / 2 ** 32) |
    0;
  const computerChoice = cs(0, 2);
  console.log("computer choice " + computerChoice);
  switch (computerChoice) {
    case 0:
      document.getElementById("RPSComputerChoice").innerHTML = "ROCK";
      break;
    case 1:
      document.getElementById("RPSComputerChoice").innerHTML = "PAPER";
      break;
    case 2:
      document.getElementById("RPSComputerChoice").innerHTML = "SCISSORS";
      break;
  }
  return computerChoice;
}

function userInput() {
  let askUser = true;
  let userChoice;
  while (askUser === true) {
    let input = prompt(`Enter "R" (rock), "P" (paper) or "S" (scissors)`, "");
    if (input === null || input == "") {
      askUser = false;
      return 3;
    } else if (input.toUpperCase() == "R") {
      askUser = false;
      userChoice = 0;
      console.log("user choice " + userChoice);
      //         document.getElementById("RPSuserChoice").innerHTML = "ROCK";
      return userChoice;
    } else if (input.toUpperCase() == "P") {
      askUser = false;
      userChoice = 1;
      console.log("user choice " + userChoice);
      //         document.getElementById("RPSuserChoice").innerHTML = "PAPER";
      return userChoice;
    } else if (input.toUpperCase() == "S") {
      askUser = false;
      userChoice = 2;
      console.log("user choice " + userChoice);
      //         document.getElementById("RPSuserChoice").innerHTML = "SCISSORS";
      return userChoice;
    } else {
      alert(`Enter "R", "P" or "S"`);
    }
  }
}
function singleRPSgame() {
  const u = userInput();
  if (u !== 3) {
    const c = computerPlay();
    if (u === c) {
      console.log("draw");
      //          document.getElementById("RPSsingleGame").innerHTML = "Draw";
      return 0;
    } else if (u == c + 1 || u == c - 2) {
      console.log("user wins");
      //         document.getElementById("RPSsingleGame").innerHTML = "User wins";
      return 1;
    } else {
      console.log("computer wins");
      //          document.getElementById("RPSsingleGame").innerHTML = "Computer wins";
      return 2;
    }
  } else {
    return 3;
  }
}

async function gameFiveRound() {
  //              await sleep(500);
  let userGame = 0;
  let compGame = 0;
  let i = 0;
  let times = 5;
  let abort = false;
  for (; i < times && !abort; i++) {
    switch (singleRPSgame()) {
      case 0:
        alert("5 game draw" + " " + userGame + " " + compGame);
        //        document.getElementById("RPSFiveGame").innerHTML = `User ${userGame} : Computer ${compGame}`;
        //        await sleep(2000);
        break;
      case 1:
        ++userGame;
        alert("5 game user win" + " " + userGame + " " + compGame);
        //        document.getElementById("RPSFiveGame").innerHTML = `User ${userGame} : Computer ${compGame}`;
        //        await sleep(2000);
        break;
      case 2:
        ++compGame;
        alert("5 game computer win" + " " + userGame + " " + compGame);
        //        document.getElementById("RPSFiveGame").innerHTML = `User ${userGame} : Computer ${compGame}`;
        //        await sleep(2000);
        break;
      case 3:
        abort = true;
        break;
    }
  }
  if (i === times) {
    await sleep(1000);
    if (userGame === compGame) {
      alert("Draw");
    } else if (userGame > compGame) {
      alert("User wins");
    } else {
      alert("Computer wins");
    }
  } else {
    alert("Mission aborted");
  }
}

// document.getElementById("button1").textContent = "(R)ock";
// document.getElementById("button2").textContent = "(P)aper";
// document.getElementById("button3").textContent = "(S)cissors";

document.getElementById("score").textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
