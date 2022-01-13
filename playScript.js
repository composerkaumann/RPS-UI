"use strict";

// Global variables for keeping sore, visible to all functions (task: put inside a function)
let userGame;
let compGame;

// Timeout function for async functions (await sleep(ms))
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Key event listeners that work only when corresponding button ID is present.
document.addEventListener("keydown", function (event) {
  // Check, if ctrl || alt || Mac cmd key is pressed.
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

// Remove all chid nodes of a node - function
function removeChildNodes(n) {
  const myNode = document.getElementById(n);
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
}

// Startup sceen with "New game" button.
async function initScreen() {
  userGame = 0;
  compGame = 0;
  removeChildNodes("buttonsWrap");
  await sleep(500);
  buttonsWrap.appendChild(buttonPlay);
}

// This is starting line for action
initScreen();

// User input buttons for single game.
async function playButtons() {
  removeChildNodes("buttonsWrap");
  await sleep(500);
  buttonsWrap.appendChild(button1);
  buttonsWrap.appendChild(button2);
  buttonsWrap.appendChild(button3);
}

// Random with crypto security between x and y.
async function computerPlay() {
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
async function singleRPSgame(u) {
  console.log("user choice " + u);
  await sleep(500);
  const c = await computerPlay();
  await sleep(500);
  if (u === c) {
    console.log("DRAW: user " + userGame + " : " + compGame + " computer");
    return;
  } else if (u == c + 1 || u == c - 2) {
    ++userGame;
    console.log("USER WINS: user " + userGame + " : " + compGame + " computer");
  } else {
    ++compGame;
    console.log(
      "COMPUTER WINS: user " + userGame + " : " + compGame + " computer"
    );
  }
  if (userGame === 5 || compGame === 5) {
    console.log(
      "Tournament ended," + " user " + userGame + " : " + compGame + " computer"
    );
    await sleep(500);
    initScreen();
  } else {
    playButtons();
  }
}
