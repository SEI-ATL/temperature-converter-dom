

const submitButton = document.querySelector('#submit')

function convertFarenheitToCelsius(farenheitTemp) {
    return (farenheitTemp - 32) * (5 / 9)
}

function isChecked(idString) {
    return document.querySelector(idString).checked
}

submitButton.addEventListener('click', function(e) {
    const input = document.querySelector('#userInput')
    const value = parseFloat(input.value)

    // const newValue = convertFarenheitToCelsius(value)
    let newValue = null
    if (document.querySelector('#c-to-f').checked) {
        newValue = convertFarenheitToCelsius(value)
    } else if (document.querySelector('#f-to-c').checked) {
        newValue = convertFarenheitToCelsius(value)
    }


    function convertFarenheitToCelcius(farenheitTemp) {
        return (farenheitTemp - 32) * (5 / 9)
      }

      function convertCelciusToFarenheit(celciusTemp) {
        return (celciusTemp * (9 / 5)) + 32
      }  

    document.querySelector('.convertedResult').innerText = newValue   
})


// document.querySelector('#clear').addEventListener('click', function() {
//     document.querySelector('.convertedResult').value = ''
// })

function clearInput() {
    document.querySelector(newValue).value = ''
}