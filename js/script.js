// Element selectors
const form = document.querySelector('form')
const tempValueInput = form.querySelector('input[name="temperature"]')
const isFahrenheitInput = form.querySelector('input[value="fahrenheit"]')
const isCelsiusInput = form.querySelector('input[value="celsius"]')
const submitButton = form.querySelector('input[type="submit"]')

const resultsParagraph = document.querySelector('.result')


// Variable declarations
const formData = {
  temp: '', isC: false
}


// Helper functions
const fToC = (temp) => (temp - 32) * 5 / 9
const cToF = (temp) => (temp * 9 / 5) + 32


// Main Logic
const processForm = (formData) => {
  let resultString = ''

  if (formData.isC) {
    resultString = `${cToF(formData.temp)}° Fahrenheit`
  } else {
    resultString = `${fToC(formData.temp)}° Celsius`
  }

  resultsParagraph.textContent = resultString
}


// Event Listeners
submitButton.addEventListener('click', (e) => {
  e.preventDefault()

  formData.temp = tempValueInput.value
  formData.isC = isCelsiusInput.checked

  processForm(formData)
})
