function convertToCelsius(Fahrenheit) {
    return (5/9) * (Fahrenheit - 32);
}

function convertToFahrenheit(Celsius) {
    return (9/5) * Celsius + 32; 
}
//console.log(convertToCelsius(2));
//console.log(convertToFahrenheit(3));
document.querySelector('.sub').addEventListener('click',function(e){
    e.preventDefault()
    const temperature = document.querySelector('#temperature').value
    document.getElementById('output').innerHTML = convertToCelsius(temperature)
})

