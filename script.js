function add(numOne, numTwo) {
    if (typeof numOne !== "number" || typeof numTwo !== "number") {
    return "invalid input";
    }
    console.log(numOne + numTwo);
}

function subtract(numOne, numTwo) {
    if (typeof numOne !== "number" || typeof numTwo !== "number") {
    return "invalid input";
    }
    console.log(numOne - numTwo);
}

function multiply(numOne, numTwo) {
    if (typeof numOne !== "number" || typeof numTwo !== "number") {
    return "invalid input";
    }
    console.log(numOne * numTwo);
}

function divide(numOne, numTwo) {
    if (typeof numOne !== "number" || typeof numTwo !== "number") {
    return "invalid input";
    }
    console.log(numOne / numTwo);
}

const numOne = Number(prompt("Enter the first number: "));
const numTwo = Number(prompt("Enter the second number: "));
const operation = prompt("Enter desired operation (add, subtract, multiply, or divide): ");

if(operation == "add") {
    add(numOne, numTwo);
} 
else if(operation == "subtract") {
    subtract(numOne, numTwo);
}
else if(operation == "multiply") {
    multiply(numOne, numTwo);
}
else if(operation == "divide") {
    divide(numOne, numTwo);
}
else {
    console.log("invalid input");
}