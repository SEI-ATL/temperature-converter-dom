const convertFahrenheit = () => {
    const f = document.getElementById('f').value;
    let newC = (f - 32) * 5/9;
    console.log(newC);
    document.getElementById('c').value = newC;
}

const convertCelsius = () => {
    const cOne = document.getElementById('cOne').value;
    let newF = (cOne * 9/5) + 32;
    console.log(newF);
    document.getElementById('fOne').value = newF;
}

const reset = () => {
    document.getElementById('f').reset();
}