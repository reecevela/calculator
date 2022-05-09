const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');
const displayLabel = document.querySelector('.display-label');
const numericButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operation');

let initialVal = "";
let newVal = "";
let operation = null;
let displayVal = 1000;

numericButtons.forEach(button => {
  button.addEventListener('click', () => {
    let val = button.firstChild.textContent;
    val == "." ? handleButton(-1) : handleButton(+val);
    //pass -1 instead of "." to get past "typeof val" in handler
    //+val turns it into an int
  }, false);
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    let val = button.firstChild.textContent;
    handleButton(val);// val (without the +) passes a string
  }, false);
});


function handleButton(val) {

  console.log(initialVal, operation, newVal);

  switch (typeof val) {
    case 'number':
      if (val == -1) {val = '.'}; // convert decimals

      if (!operation) { // check if operation's been set yet
        if (val == '.' && initialVal.indexOf('.') !== -1) {
          return; //escape early if there's already a decimal point
        }
        initialVal = "" + initialVal + val; //convert to string and display it
        display(initialVal);
      } else {
        if (val == '.' && newVal.indexOf('.') !== -1) {
          return;
        }
        newVal = "" + newVal + val;
        display(newVal);
      }
      break;
    case 'string':
      operation = val;
      break;
    default:
      console.log('idk???');
      break;
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