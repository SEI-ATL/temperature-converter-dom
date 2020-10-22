
let submitButton = document.querySelector('.submit');
let clearButton = document.querySelector('.clear');
let inputField = document.querySelector('#input');
let h2 = document.querySelector('h2');
let outputDiv = document.querySelector('.output');
let fButton = document.querySelector('.f');
let cButton = document.querySelector('.c');





submitButton.addEventListener('click', function() {
  let inputValue = inputField.value;
  let output;
  if (fButton.checked === true) {
    output = (inputValue - 32) * (5/9);
    output = output.toFixed(2);
    h2.innerHTML = output + '&deg;C';
    if (output > 0) {
      outputDiv.classList.add('hot');
    } else {
      outputDiv.classList.add('cold');
    }
  } else {
    output = (inputValue * 1.8) + 32;
    output = output.toFixed(2);
    h2.innerHTML = output + '&deg;F';
    if (output > 32) {
      outputDiv.classList.add('hot');
    } else {
      outputDiv.classList.add('cold');
    }
  }
});

clearButton.addEventListener('click', function() {
  inputField.value = '';
  h2.innerHTML = '';
  outputDiv.className = 'output';
});