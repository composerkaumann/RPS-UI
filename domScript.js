"use strict";

// Creating the main container inside body with id and class.
const container = document.createElement("div");
container.setAttribute("id", "container");
container.setAttribute("class", "container");
// Creating the header div (+id, class).
const header = document.createElement("div");
header.setAttribute("id", "header");
header.setAttribute("class", "header");
//Creating a H1 element for title inside header DIV.
const headerH1 = document.createElement("h1");
headerH1.setAttribute("id", "titleMain");
headerH1.setAttribute("class", "title");
headerH1.textContent = "Rock-Paper-Scissors";
//Appending header main title to header DIV.
header.appendChild(headerH1);
// Appending the header container to the container DIV.
const headerH3 = document.createElement("h3");
headerH3.setAttribute("id", "titleSub");
headerH3.setAttribute("class", "title");
headerH3.textContent = "random human against random computer";

//Appending header main title to header DIV.
header.appendChild(headerH3);
// Appending the header container to the container DIV.
container.appendChild(header);
// Create div Between header and buttons
const instruct = document.createElement("div");
instruct.setAttribute("id", "instruct");
instruct.setAttribute("class", "instruct");
const instructH2 = document.createElement("h2");
instructH2.setAttribute("id", "instrH2");
instructH2.setAttribute("class", "instrH2");

instruct.appendChild(instructH2);

container.appendChild(instruct);

// Creating a wrap DIV for computer.
const comp = document.createElement("div");
comp.setAttribute("id", "comp");
comp.setAttribute("class", "comp");
container.appendChild(comp);
//
const score = document.createElement("div");
score.setAttribute("id", "score");
score.setAttribute("class", "score");
//
const standing = document.createElement("h1");
standing.setAttribute("id", "standing");
standing.setAttribute("class", "standing");
score.appendChild(standing);
//
const scoreAnnounce = document.createElement("h3");
scoreAnnounce.setAttribute("id", "announce");
scoreAnnounce.setAttribute("class", "announce");
score.appendChild(scoreAnnounce);
//
const buttonNext = document.createElement("button");
buttonNext.setAttribute("id", "playBtn");
buttonNext.setAttribute("class", "nextBtn");
buttonNext.textContent = "[N]ext round";
buttonNext.addEventListener("click", function () {
  playButtons();
});
//
container.appendChild(score);
// Creating DIV for buttons,
const buttonsWrap = document.createElement("div");
buttonsWrap.setAttribute("id", "buttonsWrap");
buttonsWrap.setAttribute("class", "buttonsWrap");
//Creating PLAY button.
const buttonPlay = document.createElement("button");
buttonPlay.setAttribute("id", "playBtn");
buttonPlay.setAttribute("class", "playBtn");
buttonPlay.textContent = "[N]ew tournament";
buttonPlay.addEventListener("click", function () {
  playButtons();
});

// Creating 3 buttons.
const button1 = document.createElement("button");
button1.setAttribute("id", "button1");
button1.setAttribute("class", "button");
button1.textContent = "[R]ock";
button1.addEventListener("click", function () {
  singleRPSgame(0);
});
//
const button2 = document.createElement("button");
button2.setAttribute("id", "button2");
button2.setAttribute("class", "button");
button2.textContent = "[P]aper";
button2.addEventListener("click", function () {
  singleRPSgame(1);
});
//
const button3 = document.createElement("button");
button3.setAttribute("id", "button3");
button3.setAttribute("class", "button");
button3.textContent = "[S]cissors";
button3.addEventListener("click", function () {
  singleRPSgame(2);
});
// Aooending buttons wrap to comtainer DIV.
container.appendChild(buttonsWrap);
// Appending the main container to the body tag.
document.body.appendChild(container);
