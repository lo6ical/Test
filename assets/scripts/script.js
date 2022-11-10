let phase1 = document.querySelector(".animation-container");
let logo = document.querySelector(".logo-container");

logo.style.left = phase1.getBoundingClientRect().left + 15 + "px";
logo.style.top = phase1.getBoundingClientRect().top + "px";

let text = document.querySelector(".text");
let footer = document.querySelector(".footer");
let logoImg = document.querySelector(".logo_gold");

logo.addEventListener('animationend', function(event) {
    text.style.left = logoImg.getBoundingClientRect().left + "px";
    footer.style.left = logoImg.getBoundingClientRect().left + "px";
})