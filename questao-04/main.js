let input = document.querySelector("#input");
let button = document.querySelector("#send-button");
let output = document.querySelector("#output");
let number = 0;
let dividers = [];
let perfect = "";

button.addEventListener("click", handleClick);

function handleClick() {
    getNumber();
    getDividers();
    checkIfPerfect();
    displayAnswer()
}

function getNumber() {
    number = parseInt(input.value);
}

function getDividers() {
    for (let i = 0; i < number; i++) {
        if (number % i === 0) {
            dividers.push(i);
        }
    }
}

function checkIfPerfect() {
    let multipliedDivisors = dividers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0)
    if (number == multipliedDivisors){
        perfect = `O número ${number} é perfeito`;
    }else perfect = `O número ${number} não é perfeito`;
}

function displayAnswer(){
    output.innerHTML = perfect
}