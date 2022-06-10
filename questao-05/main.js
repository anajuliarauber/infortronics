// Faça um programa que receba um número e usando laços de repetição
// calcule e mostre a tabuada desse número. (1 ponto);

let input = document.querySelector("#input");
let button = document.querySelector("#send-button");
let output = document.querySelector("#output");

let number = 0;
let multiplicationTable = [];

button.addEventListener("click", handleClick);

function handleClick() {
    getNumber();
    calculateMultiplicationTable();
    displayAnswer()
}

function getNumber() {
    number = parseInt(input.value);
}

function calculateMultiplicationTable(){
    for (let i = 1; i <= 10; i++) {
        multiplicationTable.push(i * number)
        console.log(multiplicationTable)
    }
}

function displayAnswer(){
    output.innerHTML = `Tabuada do ${number} = ${multiplicationTable}`
}