
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

function inRange(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}


// ------------------------------------------------ User Interface ------------------------------------------------//
const container = document.querySelector('#container');

// Calculator screen
const frameScreen = document.querySelector('.frame-screen');
const displayCalc = document.createElement('div');
const paraCalc = document.createElement('p');
let currentScreenText = '';
displayCalc.classList = 'grid-screen';
paraCalc.textContent = currentScreenText;
displayCalc.appendChild(paraCalc);
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

// OnClick - Keys - Display on screen when keys clicked
const keys = document.querySelectorAll('.grid-keys');
let newScreenContent = currentScreenText;
let value_a = 0;
let value_b = 0;
let operator = "";
let result = 0;
keys.forEach(element => element.addEventListener("click", (e) => {
    
    if (e.target.innerText == "C") {
        newScreenContent = "Result cleared.";
        paraCalc.textContent = newScreenContent;
        value_a = 0;
        value_b = 0;
        
    } else if (e.target.innerText == "=") {
        newScreenContent = "Result.";
        paraCalc.textContent = newScreenContent;
        //TODO: --------------- >> logic

    } else if (e.target.innerText == "+" || e.target.innerText == "-" || e.target.innerText == "÷" || e.target.innerText == "x") {
        operator = e.target.innerText;

    } else if (inRange(e.target.innerText, 0, 9)) {
        

        if (value_a == 0 && value_b == 0) {
            value_a = e.target.innerText;
        } else if (value_a != 0 && value_b == 0) {
            value_b = e.target.innerText;
        } else if (value_a != 0 && value_b != 0) {
            value_a = value_b;
            value_b = e.target.innerText;
        }
    }

    console.log(operator, value_a, value_b);
     
    
}));
