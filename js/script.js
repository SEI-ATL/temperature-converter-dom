
function farToCel(){ 
    const inputVal = document.querySelector('#txtbox').value;
        if (inputVal > 1 || inputVal < 999){
            var newVal = (inputVal - 32) / 1.8;
    document.getElementById('screen').innerHTML = Math.floor(newVal) + '°';
    } else {
        document.getElementById('screen').innerHTML = 'PLEASE ENTER A NUMBER';
    }
}

function celToFar(){ 
    const inputVal = document.querySelector('#txtbox').value;
        if (inputVal > 1 || inputVal < 999){
            var newVal = inputVal * 9 / 5 + 32;
    document.getElementById('screen').innerHTML = Math.floor(newVal) + '°';
    } else {
        document.getElementById('screen').innerHTML = 'PLEASE ENTER A NUMBER';
    }
}

function farFormula(){
    document.getElementById('celRadio').checked = false; // This function unclick the other radio button
    const radioOnCLick = document.querySelector('#sumbit + onclick')
    radioOnCLick.innerText = farToCel();
}

function celFormula() {
    document.getElementById('farRadio').checked = false; // This function unclick the other radio button
    const radioOnCLick = document.querySelector('#sumbit + onclick')
    radioOnCLick.innerText = celToFar();
}


function resetBox(){
    const noVal = document.querySelector('#txtbox').value=' ';
}
