"use strict";

// Global variables for keeping sore, visible to all functions
let userGame;
let compGame;

// Timeout function for async functions (await sleep(ms))
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Key event listeners that work only when corresponding button ID is present.
document.addEventListener("keydown", function (event) {
  //  macCmd = [17, 91, 93, 224];
  if (event.ctrlKey || event.altKey || event.metaKey) {
    return;
  }
  if (!!document.getElementById("playBtn") && event.key === "n") {
    playButtons();
  }
  if (!!document.getElementById("button1") && event.key === "r") {
    singleRPSgame(0);
  }
  if (!!document.getElementById("button1") && event.key === "p") {
    singleRPSgame(1);
  }
  if (!!document.getElementById("button1") && event.key === "s") {
    singleRPSgame(2);
  }
});

// Remove all chid nodes function
function removeChildNodes(n) {
  const myNode = document.getElementById(n);
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
}

// Startup sceen with "New game" button.
function initScreen() {
  userGame = 0;
  compGame = 0;
  removeChildNodes("buttonsWrap");
  buttonsWrap.appendChild(buttonPlay);
  document.getElementById("playBtn").textContent = "(N)ew game";
  document.getElementById("playBtn").addEventListener("click", function () {
    playButtons();
  });
}

// This is starting line for action
initScreen();

// User input function for single game.
function playButtons() {
  removeChildNodes("buttonsWrap");
  buttonsWrap.appendChild(button1);
  buttonsWrap.appendChild(button2);
  buttonsWrap.appendChild(button3);
}

function playButtons() {
  removeChildNodes("buttonsWrap");
  buttonsWrap.appendChild(button1);
  buttonsWrap.appendChild(button2);
  buttonsWrap.appendChild(button3);
}

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
      break;
    case 1:
      break;
    case 2:
      break;
  }
  return computerChoice;
}

// The actual game that gets user choice, calls for computer game, evaluates.
function singleRPSgame(u) {
  console.log("user choice " + u);
  const c = computerPlay();
  if (u === c) {
    console.log(userGame + " user : computer " + compGame);
    return;
  } else if (u == c + 1 || u == c - 2) {
    ++userGame;
    console.log(userGame + " user : computer " + compGame);
  } else {
    ++compGame;
    console.log(userGame + " user : computer " + compGame);
  }
  if (userGame === 5 || compGame === 5) {
    console.log("läbi");
    initScreen();
  } else {
    playButtons();
  }
}

document.getElementById("score").textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
