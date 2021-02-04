import toggleAnswer, { toggleBookmark } from "./toggle";

const buttons = document.querySelectorAll(".button");
buttons.forEach(toggleAnswer);

const bookmarks = document.querySelectorAll(".bookmark");
bookmarks.forEach(toggleBookmark);

//Touchstart

const submit = document.querySelector("#submit");

submit.addEventListener("touchstart", function () {}, true);
