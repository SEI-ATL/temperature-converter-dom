function radioValue() { 
    let units = document.getElementsByName('unit');  
    for(i = 0; i < units.length; i++) { 
        if (units[i].checked) {
        return units[i].value;
        }
    } 
};

function convertToFah() {
    let num = document.getElementById('temp').value;
    let result = num * 9 / 5 + 32;
    console.log(result);
    document.getElementById('display').innerText = Math.floor(result) + ' ºC';
};

function convertToCel() {
    let num = document.getElementById('temp').value;
    let result = (num - 32) * 5 / 9;
    console.log(result);
    document.getElementById('display').innerText = Math.floor(result) + ' ºC';
};

document.querySelector('#submit').addEventListener('click', function(event) {
    unit = radioValue();
    console.log(document.getElementById('temp').value);
    console.log(unit);
    convert(unit);
    debugger;
});

function convert(unit) {
    if (unit === 'C') {
        convertToFah()
    }
    if (unit === 'F') {
        convertToCel()
    }
};