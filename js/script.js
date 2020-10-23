// Variable Declarations

const input = document.querySelector('input');
const output = document.querySelector('#output');
const submitButton = document.querySelector('#submit');
const resetButton = document.querySelector('#reset');
const celciusSelect = document.querySelector("#celcius");
const fahrenheightSelect = document.querySelector("#fahrenheit");

let temp = '';

// Conversion Functions
const celcToFahr = function() {
    return (((input.value - 32) * 5) / 9).toFixed(2);
}

const fahrToCelc = function() {
    return (((input.value * 9) / 5) + 32).toFixed(2);
}

//Button Events
submitButton.addEventListener('click', function() {
    if (input.value === '') {
        return;
    } else {
    output.innerHTML = fahrToCelc() + `&deg; C`;
    }
})

resetButton.addEventListener('click', function() {
    output.innerHTML = '';
    input.value = '';
    fahrenheightSelect.checked = false;
    celciusSelect.checked = true;

});

// Radio Button Functions

fahrenheightSelect.addEventListener('click', function(){
    if (input.value === '') {
        output.innerHTML = '';
    } else {
    output.innerHTML = celcToFahr() + `&deg; F`;
    }
});

celciusSelect.addEventListener('click', function(){
    if (input.value === '') {
        output.innerHTML = '';
    } else {
        output.innerHTML = fahrToCelc() + `&deg; C`;
    }
});
