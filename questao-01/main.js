let input = document.querySelector("#input")
let button = document.querySelector("#send-button")
let title = document.querySelector("#sorted-numbers-title")
let output = document.querySelector("#sorted-numbers")
let numbers = [];
let sorted = [];

button.addEventListener("click", handleClick)

function handleClick(){
    getNumber();
    sortNumbers();
    displaySortedNumbers()
}

function getNumber(){
    let number = parseInt(input.value);
    numbers.push(number); 
}

function sortNumbers() {
    sorted = numbers.sort((a, b) => a - b);
    console.log(sorted);
}

function displaySortedNumbers(){
    output.innerHTML = sorted;
}





