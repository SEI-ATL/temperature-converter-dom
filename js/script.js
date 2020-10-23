function radioValue() { 
    let units = document.getElementsByName('unit');  
    for(i = 0; i < units.length; i++) { 
        if (units[i].checked) {
        console.log(units[i])
        return units[i];
        }
    } 
} 

function convertToFah() {
    let num = document.getElementById('temp').value();
    let result = num * 9 / 5 + 32;
    console.log(result);
    document.getElementById('display').innerText = Math.floor(result) + ' ºC';
}

function convertToCel() {
    let num = document.getElementById('temp').submit();
    let results = (num - 32) * 5 / 9;
    console.log(results);
    document.getElementById('display').innerText = Math.floor(result) + ' ºC';
}

document.querySelector('#submit').addEventListener('click', function() {
    unit = radioValue();
    convert(unit);
});

function convert(unit) {
    if (unit === 'F') {
        convertToFah()
    }
    if (unit === 'C') {
        convertToCel()
    }
}