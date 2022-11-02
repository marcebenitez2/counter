const body = document.querySelector("body");

const contador = document.getElementById("contador");

const buttonLow = document.getElementById("buttonLow");
const buttonUp = document.getElementById("buttonUp");

buttonLow.addEventListener("click", subtract);

buttonUp.addEventListener("click", add);

let count = 0

function add(){
   count++
   contador.textContent = count
}

function subtract(){
    count--
    contador.textContent = count
}