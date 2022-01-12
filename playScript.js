"use strict";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
switchButtons(0);

document.addEventListener("keydown", function (event) {
  //  macCmd = [17, 91, 93, 224];
  if (event.ctrlKey || event.altKey || event.metaKey) {
    return;
  }
  if (!!document.getElementById("playBtn") && event.key === "n") {
    switchButtons(1);
  }
  if (!document.getElementById("playBtn") && event.key === "r") {
    singleRPSgame(0);
  }
  if (!document.getElementById("playBtn") && event.key === "p") {
    singleRPSgame(1);
  }
  if (!document.getElementById("playBtn") && event.key === "s") {
    singleRPSgame(2);
  }
});
// Toggle Nex Game <> RPS buttons
async function switchButtons(toggle) {
  if (toggle === 1) {
    buttonsWrap.removeChild(buttonPlay);
    await sleep(200);
    buttonsWrap.appendChild(button1);
    buttonsWrap.appendChild(button2);
    buttonsWrap.appendChild(button3);
    document.getElementById("button1").addEventListener("click", function () {
      singleRPSgame(0);
    });
    document.getElementById("button2").addEventListener("click", function () {
      singleRPSgame(1);
    });
    document.getElementById("button3").addEventListener("click", function () {
      singleRPSgame(2);
    });
  } else if (toggle === 0) {
    removeChildNodes("buttonsWrap");
    await sleep(200);
    buttonsWrap.appendChild(buttonPlay);
    document.getElementById("playBtn").textContent = "(N)ew game";
    document.getElementById("playBtn").addEventListener("click", function () {
      switchButtons(1);
    });
  }
}

// Remove all chid nodes function
function removeChildNodes(n) {
  const myNode = document.getElementById(n);
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
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
      console.log();
      break;
    case 1:
      console.log();
      break;
    case 2:
      console.log();
      break;
  }
  return computerChoice;
}

function singleRPSgame(u) {
  const c = computerPlay();
  if (u === c) {
    gameUpTo5(0);
  } else if (u == c + 1 || u == c - 2) {
    gameUpTo5(1);
  } else {
    gameUpTo5(2);
  }
}

async function gameUpTo5(result) {
  //              await sleep(500);

  switch (result) {
    case 0:
      alert("Draw" + " " + userGame + " " + compGame);
      break;
    case 1:
      ++userGame;
      alert("user win" + " " + userGame + " " + compGame);
      break;
    case 2:
      ++compGame;
      alert("5 game computer win" + " " + userGame + " " + compGame);
      break;
  }
}

document.getElementById("score").textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
