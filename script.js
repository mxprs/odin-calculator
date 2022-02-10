
// ----------------------------------------------------- Logic -----------------------------------------------------//

function add (nbr1, nbr2) {
    return nbr1 + nbr2;
}

function substract (nbr1, nbr2) {
    return nbr1 - nbr2;
}

function multiply (nbr1, nbr2) {
    return nbr1 * nbr2;
}

function divide (nbr1, nbr2) {
    return nbr1 / nbr2;
}

function operate(operator, nbr1, nbr2) {
    switch (operator) {
        case "+":
            add(nbr1, nbr2);
        case "-":
            substract(nbr1, nbr2);
        case "x":
            multiply(nbr1, nbr2);
        case "÷":
            divide(nbr1, nbr2);
    }
}


// ------------------------------------------------ User Interface ------------------------------------------------//
const container = document.querySelector('#container');

// Calculator screen
const frameScreen = document.querySelector('.frame-screen');
const displayCalc = document.createElement('div');
displayCalc.classList = 'grid-screen';
frameScreen.appendChild(displayCalc);

// Calculator keys
let keysDimensionSize = 4;
const frameKeys = document.querySelector('.frame-keys');
const keyCalculator = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '÷', '0', 'C', '=', 'x'];
for (let index = 0; index < keysDimensionSize * keysDimensionSize; index++) {
    const newButton = document.createElement('div');
    const newPara = document.createElement('p');
    newButton.classList = 'grid-keys';
    newPara.textContent = keyCalculator[index];
    newButton.appendChild(newPara);
    frameKeys.appendChild(newButton);
}