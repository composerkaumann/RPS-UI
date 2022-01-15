"use strict";

const container = document.createElement("div");
container.setAttribute("id", "container");

const header = document.createElement("div");
header.setAttribute("class", "header");

const headerH1 = document.createElement("h1");
headerH1.textContent = "Rock-Paper-Scissors";

header.appendChild(headerH1);

const headerH3 = document.createElement("h3");
headerH3.textContent = "random human against random computer";

header.appendChild(headerH3);

container.appendChild(header);

const instruct = document.createElement("div");
instruct.setAttribute("class", "instruct");
const instructH2 = document.createElement("h2");
instructH2.setAttribute("id", "instrH2");

instruct.appendChild(instructH2);

container.appendChild(instruct);

const comp = document.createElement("div");
comp.setAttribute("id", "comp");
comp.setAttribute("class", "comp");
container.appendChild(comp);

const score = document.createElement("div");
score.setAttribute("class", "score");

const standing = document.createElement("h1");
standing.setAttribute("id", "standing");
score.appendChild(standing);

const scoreAnnounce = document.createElement("h3");
scoreAnnounce.setAttribute("id", "announce");
score.appendChild(scoreAnnounce);

container.appendChild(score);

const buttonsWrap = document.createElement("div");
buttonsWrap.setAttribute("id", "buttonsWrap");
buttonsWrap.setAttribute("class", "buttonsWrap");

const buttonPlay = document.createElement("button");
buttonPlay.setAttribute("id", "playBtn");
buttonPlay.addEventListener("mousedown", function () {
  playButtons();
});

const button1 = document.createElement("button");
button1.setAttribute("id", "button1");
button1.textContent = "[R]ock";
button1.addEventListener("mousedown", function () {
  singleRPSgame(0);
});

const button2 = document.createElement("button");
button2.textContent = "[P]aper";
button2.addEventListener("mousedown", function () {
  singleRPSgame(1);
});

const button3 = document.createElement("button");
button3.textContent = "[S]cissors";
button3.addEventListener("mousedown", function () {
  singleRPSgame(2);
});

container.appendChild(buttonsWrap);

document.body.appendChild(container);
