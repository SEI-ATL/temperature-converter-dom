//Simone Schneeberg and Jaxon Narramore Hw 4
//Functions

console.log('page loaded');

//convert temperature and set display
function convertAndDisplay(input, signifier) {
    let convertedTemp = null;
    if (isNaN(input)) {
        document.querySelector('.display').innerText = 'Invalid Input'
        document.querySelector('.display').style.background = 'yellow';

    } else { //convert to C
        if (signifier === 'F') {
            convertedTemp = (input - 32) * (5 / 9);
            document.querySelector('.display').innerText = Math.floor(convertedTemp) + ' ºC';
        }
        //convert to F
        if (signifier === 'C') {
            convertedTemp = (input * (9 / 5)) + 32;
            document.querySelector('.display').innerText = Math.floor(convertedTemp) + ' ºF';
        }
        //change background color
        if ((signifier === 'F' && input <= 32) || (signifier === 'C' && input <= 0)) {
            document.querySelector('.display').style.background = 'blue';
        } //blue for freezing
        else if ((signifier === 'F' && input >= 212) || (signifier === 'C' && input >= 100)) {
            document.querySelector('.display').style.background = 'red';
        } //red for boiling
        else { document.querySelector('.display').style.background = 'white'; }
    }
}

//clear display
function clearDisp() {
    document.querySelector('.display').innerText = '';
    document.querySelector('.display').style.background = 'white';
}

//clear textbox
function clearTextbox() {
    document.querySelector('#tempInput').value = null;
}

//switch/check units
function checkedUnit() {
    let unit = null;
    document.querySelectorAll('input[name="units"]').forEach(function(e) {
        if (e.checked) {
            unit = e.value;
        }
    });
    return unit;
}


//Actions

/*
//convert user input on submit
document.querySelector('#submit').addEventListener('click', function() {
    tempInput = document.querySelector('#tempInput').value;
    unit = document.querySelector('.selected').id;
    convertAndDisplay(tempInput, unit);
});
*/

//convert user input on enter
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let tempInput = document.querySelector('#tempInput').value;
    let unit = checkedUnit();
    convertAndDisplay(tempInput, unit);
});



//clear user input
document.querySelector('#clear').addEventListener('click', function() {
    clearDisp();
    clearTextbox();
});

/*
//switch units 
document.querySelectorAll('.unit').forEach(function(e) {
    e.addEventListener('click', function(e) {
        document.querySelector('.selected').classList.toggle('selected'); //removes from last one
        e.target.classList.toggle('selected'); //add to selected unit
    });
});
*/