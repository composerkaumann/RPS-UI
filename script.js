"use strict";

/* This is a test file
where I am testing various scripts. */

// wait(ms); for delay
function wait(ms) {
  let start = new Date().getTime();
  let end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function arithmetic() {
  clearArithm();
  const nr1 = +prompt("First number!", "");
  if (!isNaN(nr1)) {
    document.getElementById("1st").innerHTML = nr1;
  } else {
    alert("You may enter numbers only!");
    clearArithm();
    return;
  }
  const nr2 = +prompt("Second number!", "");
  if (!isNaN(nr2)) {
    document.getElementById("2nd").innerHTML = nr2;
  } else {
    alert("You may enter numbers only!");
    clearArithm();
    return;
  }
  const result = nr1 ** nr2;
  setTimeout(() => {
    document.getElementById("total").innerHTML = result;
  }, 667);
}

function clearArithm() {
  document.getElementById("total").innerHTML = "_";
  document.getElementById("1st").innerHTML = "_";
  document.getElementById("2nd").innerHTML = "_";
}

async function cap1st() {
  const string01 = prompt("Enter some txt", "");
  if (string01 === null || string01 == "") {
    document.getElementById("capFirstWrd").innerHTML = "_ _ _ _ _";
    return;
  } else {
    await sleep(1000);
    document.getElementById("capFirstWrd").innerHTML =
      string01[0].toUpperCase() + string01.slice(1).toLowerCase();
  }
}

async function testJoiningArr2Str() {
  const string02 = prompt("Enter some txt", "");
  if (string02 !== null && string02 !== "") {
    const string03 = string02.toLowerCase();
    const array02 = string03.split(" ");
    for (var i = 0; i < array02.length; i++) {
      array02[i] = array02[i].charAt(0).toUpperCase() + array02[i].slice(1);
    }
    const string04 = array02.join(" ");
    await sleep(1000);
    document.getElementById("capFirstAllWrds").innerHTML = string04;
    await sleep(1000);
    document.getElementById("capFirstAllWrds").innerHTML +=
      "<h5>type: " + typeof string04 + "</h5>";
  } else {
    document.getElementById("capFirstAllWrds").innerHTML = "_ _ _ _ _";
  }
}

function clearAll() {
  clearArithm();
  document.getElementById("capFirstWrd").innerHTML = "_ _ _ _ _";
  document.getElementById("capFirstAllWrds").innerHTML = "_ _ _ _ _";
  document.getElementById("RPSComputerChoice").innerHTML = "_ _ _ _ _";
  document.getElementById("RPSuserChoice").innerHTML = "_ _ _ _ _";
  document.getElementById("RPSsingleGame").innerHTML = "_ _ _ _ _";
  document.getElementById("RPSFiveGame").innerHTML = "_ _ _ _ _";
}
// Random with crypto security between x and y.
function computerPlay() {
  // document.getElementById("RPSsingleGame").innerHTML = "_ _ _ _ _";
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
  // document.getElementById("RPSuserChoice").innerHTML = "_ _ _ _ _";

  let askUser = true;
  let userChoice;
  while (askUser === true) {
    let input = prompt(`Enter "R" (rock), "P" (paper) or "S" (scissors)`, "");
    if (input === null || input == "") {
      document.getElementById("RPSuserChoice").innerHTML = "_ _ _ _ _";
      document.getElementById("RPSComputerChoice").innerHTML = "_ _ _ _ _";
      document.getElementById("RPSsingleGame").innerHTML = "_ _ _ _ _";
      askUser = false;
      return 3;
    } else if (input.toUpperCase() == "R") {
      askUser = false;
      userChoice = 0;
      console.log("user choice " + userChoice);
      document.getElementById("RPSuserChoice").innerHTML = "ROCK";
      return userChoice;
    } else if (input.toUpperCase() == "P") {
      askUser = false;
      userChoice = 1;
      console.log("user choice " + userChoice);
      document.getElementById("RPSuserChoice").innerHTML = "PAPER";
      return userChoice;
    } else if (input.toUpperCase() == "S") {
      askUser = false;
      userChoice = 2;
      console.log("user choice " + userChoice);
      document.getElementById("RPSuserChoice").innerHTML = "SCISSORS";
      return userChoice;
    } else {
      alert(`Enter "R", "P" or "S"`);
    }
  }
}
function singleRPSgame() {
  //  document.getElementById("RPSComputerChoice").innerHTML = "_ _ _ _ _";
  // document.getElementById("RPSsingleGame").innerHTML = "_ _ _ _ _";
  const u = userInput();
  if (u !== 3) {
    const c = computerPlay();
    if (u === c) {
      console.log("draw");
      document.getElementById("RPSsingleGame").innerHTML = "Draw";
      return 0;
    } else if (u == c + 1 || u == c - 2) {
      console.log("user wins");
      document.getElementById("RPSsingleGame").innerHTML = "User wins";
      return 1;
    } else {
      console.log("computer wins");
      document.getElementById("RPSsingleGame").innerHTML = "Computer wins";
      return 2;
    }
  } else {
    return 3;
  }
}

async function gameFiveRound() {
  clearAll();
  await sleep(500);
  let userGame = 0;
  let compGame = 0;
  let i = 0;
  let times = 5;
  let abort = false;
  for (; i < times && !abort; i++) {
    switch (singleRPSgame()) {
      case 0:
        alert("5 game draw" + " " + userGame + " " + compGame);
        document.getElementById(
          "RPSFiveGame"
        ).innerHTML = `User ${userGame} : Computer ${compGame}`;
        await sleep(2000);
        break;
      case 1:
        ++userGame;
        alert("5 game user win" + " " + userGame + " " + compGame);
        document.getElementById(
          "RPSFiveGame"
        ).innerHTML = `User ${userGame} : Computer ${compGame}`;
        await sleep(2000);
        break;
      case 2:
        ++compGame;
        alert("5 game computer win" + " " + userGame + " " + compGame);
        document.getElementById(
          "RPSFiveGame"
        ).innerHTML = `User ${userGame} : Computer ${compGame}`;
        await sleep(2000);
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
