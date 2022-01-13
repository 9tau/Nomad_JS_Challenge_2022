const title = document.getElementById("title");

var colors = ["#1abc9c", "#3498db", "#9b59b6", "red"];

const superEventHandler = [

function handleMouseEnter() {

    title.style.color = colors[0];
    title.innerText = "The mouse is here!";

},

function handleMouseLeave() {

    title.style.color = colors[1];
    title.innerText = "The mouse is gone!";

},

function handleContextMenu() {

    title.style.color = colors[3];
    title.innerText = "That was a right click!";

},

function handleResize() {

    title.style.color = colors[2];
    title.innerText = "You just resized!";

}

];

title.addEventListener("mouseenter", superEventHandler[0]);
title.addEventListener("mouseleave", superEventHandler[1]);
window.addEventListener("contextmenu", superEventHandler[2]);
window.addEventListener("resize", superEventHandler[3]);

