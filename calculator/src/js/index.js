let numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    del = document.getElementById('ac'),
    result = document.getElementById('result'),
    display = document.getElementById('display'),
    minus = document.getElementById('c'),
    decimals = document.getElementById("decimal");


let element1 = "";
let element2 = "";

let isOperatorClick = false;
let operator = "";

minus.addEventListener('click', minusPlus);
result.addEventListener("click", calc);
del.addEventListener("click", clear);
decimals.addEventListener('click', decimal);

for (let i = 0; i < numbers.length; i++) {
numbers[i].addEventListener("click", numberPress);
};

for (let i = 0; i < operations.length; i++) {
operations[i].addEventListener("click", calculation);
};

function numberPress (event) {
display.value = "0";
let number = event.target.value;
if (!isOperatorClick) {
    element1 += number;
    display.value = element1;
}
if (isOperatorClick) {
    element2 += number;
    display.value = element2;
}
};

function calculation(event) {
operator = event.target.value;
isOperatorClick = true;
};

function calc (event) {
let result = "";
switch (operator) {
    case("+"):
        result = add(parseFloat(element1), parseFloat(element2));
        display.value = result.toString();
        break;
    case("-"):
        result = sub(parseFloat(element1), parseFloat(element2));
        display.value = result.toString();
        break;
    case("x"):
        result = mult(parseFloat(element1), parseFloat(element2));
        display.value = result.toString();
        break;
    case("/"):
        result = div(parseFloat(element1), parseFloat(element2));
        display.value = result.toString();
        break;
}
element1 = result;
element2 = "";
isOperatorClick = false;
};

function clear (event) {
element1 ="";
element2 ="";
display.value = "0";
isOperatorClick = false;
};

function decimal(event) {
if (isOperatorClick === false) {
  element1 += event.target.value;
  display.value = element1;
} else if (isOperatorClick === true) {
  element2 += event.target.value;
  display.value = element2;
}
}


