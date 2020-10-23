function convertToCelsius(Fahrenheit) {
    return (5/9) * (Fahrenheit - 32);
}

function convertToFahrenheit(Celsius) {
    return (9/5) * Celsius + 32;
}

let input = document.querySelector('#temperature')
let output = document.querySelector('#converted')
let selection = document.querySelector('#selection').value
let conversion = ''

document.querySelector('#submit').addEventListener('click', function(event) {
    if (selection === 'Celsius') {
        conversion = convertToCelsius(input);
    } else {
        conversion = convertToFahrenheit(input);
    }
    output.innerHTML = `<p>${conversion}</p>`;
    console.log('It ran.');
})