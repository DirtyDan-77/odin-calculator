function add(numOne, numTwo) {
    if (typeof numOne !== "number" || typeof numTwo !== "number") {
    return "invalid input";
    }
    return numOne + numTwo;
}

function subtract(numOne, numTwo) {
    if (typeof numOne !== "number" || typeof numTwo !== "number") {
    return "invalid input";
    }
    return numOne - numTwo;
}

function multiply(numOne, numTwo) {
    if (typeof numOne !== "number" || typeof numTwo !== "number") {
    return "invalid input";
    }
    return numOne * numTwo;
}

function divide(numOne, numTwo) {
    if (typeof numOne !== "number" || typeof numTwo !== "number") {
    return "invalid input";
    }
    return numOne / numTwo;
}



function operate(numOne, numTwo, operation) {
    if(operation == "+") {
    display.textContent = add(numOne, numTwo);
} 
else if(operation == "-") {
    display.textContent = subtract(numOne, numTwo);
}
else if(operation == "*") {
    display.textContent = multiply(numOne, numTwo);
}
else if(operation == "/") {
    display.textContent = divide(numOne, numTwo);
}
else {
    display.textContent = "invalid input";
}
}



const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');

function perform() {
  const expression = display.textContent;
  const match = expression.match(/^(-?\d+)([+\-*/])(-?\d+)$/);

  if (!match) {
    display.textContent = "invalid input";
    return;
  }

  const numOne = Number(match[1]);
  const operator = match[2];
  const numTwo = Number(match[3]);

  operate(numOne, numTwo, operator);
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.textContent === "=") {
      perform();
    } else {
      display.textContent += button.textContent;
    }
  });
});



const clearButton = document.querySelector('.clear');

function clearDisplay() {
  display.textContent = '';
}

clearButton.addEventListener('click', clearDisplay);


