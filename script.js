const clearButton = document.querySelector('.clear');
const displayLabel = document.querySelector('.display-label');
const oneButton = document.querySelector('.one');
const addButton = document.querySelector('.add');
const equalsButton = document.querySelector('.equals');
const numericButtons = document.querySelectorAll('.number');

let initialVal = "";
let newVal = null;
let operation = null;
let displayVal = 1000;

numericButtons.forEach(button => {
  button.addEventListener('click', () => {
    let val = button.firstChild.textContent;
    handleButton(val);
  }, false);
});


function handleButton(val) {
  if (val == ".") {
    //(str.indexOf('.') !== -1) can tell if a secimal is already in the string
    //fucntioanlity to be added later
    return;
  }

  if (!operation) {
    initialVal = "" + initialVal + val;
    display(initialVal);
  }
}


function display(val) {
  displayLabel.textContent = "" + val;
}

function add(a,b) {
  return a+b;
}

function subtract(a,b) {
  return a-b;
}

function multiply(a,b) {
  return a*b;
}

function divide(a,b) {
  return a/b;
}