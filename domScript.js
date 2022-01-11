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
headerH1.setAttribute("class", "titleMain");
//Appending header main title to header DIV.
header.appendChild(headerH1);
// Appending the header container to the container DIV.
container.appendChild(header);
// Creating DIV for 3 buttons,
const buttonsWrap = document.createElement("div");
buttonsWrap.setAttribute("id", "buttonsWrap");
buttonsWrap.setAttribute("class", "buttonsWrap");
// Aooending buttons wrap to comtainer DIV.
container.appendChild(buttonsWrap);
// Creating a wrap DIV for results / score.
const score = document.createElement("div");
score.setAttribute("id", "score");
score.setAttribute("class", "score");
// Appending score DIV to the container DIV.
container.appendChild(score);
// Appending the main container to the body tag.
document.body.appendChild(container);
