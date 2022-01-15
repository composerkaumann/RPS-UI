"use strict";

let userGame;
let compGame;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey || event.altKey || event.metaKey) {
    return;
  }
  if (
    (!!document.getElementById("playBtn") && event.key === "n") ||
    event.key === "N"
  ) {
    playButtons();
  }
  if (
    (!!document.getElementById("button1") && event.key === "r") ||
    event.key === "R"
  ) {
    singleRPSgame(0);
  }
  if (
    (!!document.getElementById("button1") && event.key === "p") ||
    event.key === "P"
  ) {
    singleRPSgame(1);
  }
  if (
    (!!document.getElementById("button1") && event.key === "s") ||
    event.key === "S"
  ) {
    singleRPSgame(2);
  }
});

function removeChildNodes(nodeID) {
  const myNode = document.getElementById(nodeID);
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
}

/**
function blinkIt() {
  const blinks = document.getElementsByClassName("think");
  for (let i = 0, l = blinks.length; i < l; i++) {
    const blink = blinks[i];
    const visiblity = blink.style.visibility;
    blink.style.visibility = visiblity == "visible" ? "hidden" : "visible";
  }
}
setInterval(blinkIt, 333);
**/

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
  document.getElementById("playBtn").textContent = "[N]ew tournament";
}

initScreen();

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

async function computerPlay() {
  const cs = (x, y) =>
    (x +
      ((y - x + 1) * crypto.getRandomValues(new Uint32Array(1))[0]) / 2 ** 32) |
    0;
  const computerChoice = cs(0, 2);
  // comp.classList.remove("think");
  switch (computerChoice) {
    case 0:
      document.getElementById("comp").innerHTML =
        "<h2>Computer found rock.</h2>";
      break;
    case 1:
      document.getElementById("comp").innerHTML =
        "<h2>Computer found paper.</h2>";
      break;
    case 2:
      document.getElementById("comp").innerHTML =
        "<h2>Computer found scissors.</h2>";
      break;
  }
  return computerChoice;
}

async function afterRound() {
  document.getElementById(
    "standing"
  ).textContent = `HUMAN ${userGame} : ${compGame} COMPUTER`;
  buttonsWrap.appendChild(buttonPlay);
  document.getElementById("playBtn").textContent = "[N]ext round";
}

async function singleRPSgame(u) {
  const userChoice = u === 0 ? "rock" : u === 1 ? "paper" : "scissors";
  document.getElementById("comp").textContent = "";
  document.getElementById("announce").textContent = "";
  removeChildNodes("buttonsWrap");
  document.getElementById(
    "instrH2"
  ).textContent = `A random human selected ${userChoice}.`;
  const c = await computerPlay();
  const compChoice = c === 0 ? "rock" : c === 1 ? "paper" : "scissors";
  const verb = (u === 2 && c === 1) || (c === 2 && u === 1) ? "beat" : "beats";
  await sleep(500);
  if (u === c) {
    document.getElementById(
      "announce"
    ).textContent = `Draw! You both have ${userChoice}.`;
  } else if (u == c + 1 || u == c - 2) {
    ++userGame;
    document.getElementById(
      "announce"
    ).textContent = `Human won this round, ${userChoice} ${verb} ${compChoice}.`;
  } else {
    ++compGame;
    document.getElementById(
      "announce"
    ).textContent = `Computer won this round, ${compChoice} ${verb} ${userChoice}.`;
  }
  if (userGame === 5 || compGame === 5) {
    const winner = userGame > compGame ? "Human" : "Computer";
    document.getElementById(
      "standing"
    ).textContent = `HUMAN ${userGame} : ${compGame} COMPUTER`;
    await sleep(1000);
    alert(
      `The tournament has ended.\n\n${winner} won.\n\nSCORE\nHuman ` +
        userGame +
        " : " +
        compGame +
        " Computer"
    );
    initScreen();
  } else {
    afterRound();
  }
}
