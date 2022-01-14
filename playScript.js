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
  document.getElementById("comp").textContent = "";
  document.getElementById("announce").textContent = "";
  document.getElementById("standing").textContent = "";
  await sleep(500);
  document.getElementById("instrH2").textContent =
    'Press "New tournament" or key in [brackets] to start a 5-round tournament.';
  removeChildNodes("buttonsWrap");
  await sleep(500);
  buttonsWrap.appendChild(buttonPlay);
}

// This is starting line for action
initScreen();

// User input buttons for single game.
async function playButtons() {
  document.getElementById("comp").textContent = "";
  document.getElementById("announce").textContent = "";
  document.getElementById("instrH2").textContent =
    "Press a button or a key in [brackets] to choose your weapon.";
  removeChildNodes("buttonsWrap");
  await sleep(500);
  buttonsWrap.appendChild(button1);
  buttonsWrap.appendChild(button2);
  buttonsWrap.appendChild(button3);
}

// Random with crypto security between x and y.
async function computerPlay() {
  document.getElementById("comp").innerHTML =
    "<h2>Wait. A random computer is computing random.</h2>";
  await sleep(2500);
  const cs = (x, y) =>
    (x +
      ((y - x + 1) * crypto.getRandomValues(new Uint32Array(1))[0]) / 2 ** 32) |
    0;
  const computerChoice = cs(0, 2);
  switch (computerChoice) {
    case 0:
      document.getElementById("comp").innerHTML =
        "<h2>Random computer found rock.</h2>";
      break;
    case 1:
      document.getElementById("comp").innerHTML =
        "<h2>Random computer found paper.</h2>";
      break;
    case 2:
      document.getElementById("comp").innerHTML =
        "<h2>Random computer found scissors.</h2>";
      break;
  }
  return computerChoice;
}

async function afterRound() {
  document.getElementById(
    "standing"
  ).textContent = `USER ${userGame} : ${compGame} COMPUTER`;
  buttonsWrap.appendChild(buttonNext);
}

// The actual game that gets user choice, calls for computer game, evaluates.
async function singleRPSgame(u) {
  const userChoice = u === 0 ? "rock" : u === 1 ? "paper" : "scissors";
  document.getElementById("comp").textContent = "";
  document.getElementById("announce").textContent = "";
  removeChildNodes("buttonsWrap");
  document.getElementById(
    "instrH2"
  ).textContent = `You selected ${userChoice}.`;
  await sleep(500);
  const c = await computerPlay();
  const compChoice = c === 0 ? "rock" : c === 1 ? "paper" : "scissors";
  await sleep(500);
  if (u === c) {
    document.getElementById(
      "announce"
    ).textContent = `Draw! You both have ${userChoice}.`;
  } else if (u == c + 1 || u == c - 2) {
    ++userGame;
    document.getElementById(
      "announce"
    ).textContent = `User wins this round, ${userChoice} beats ${compChoice}`;
  } else {
    ++compGame;
    document.getElementById(
      "announce"
    ).textContent = `Computer wins this round, ${compChoice} beats ${userChoice}`;
  }
  if (userGame === 5 || compGame === 5) {
    document.getElementById(
      "standing"
    ).textContent = `USER ${userGame} : ${compGame} COMPUTER`;
    alert(
      "Tournament ended," + " user " + userGame + " : " + compGame + " computer"
    );
    initScreen();
  } else {
    afterRound();
  }
}
