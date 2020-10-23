const input = document.querySelector('#input > input');
const output = document.querySelector('#output > input');

document.getElementById("submit").addEventListener("click", f2C);
document.getElementById("clear").addEventListener("click", clear);

function clear() {
     input.value = null;
     output.value= null;
}



function f2C() {
    const inputValue = input.value;
     output.value= ((inputValue -32)*(5/9));
     document.getElementById("input").style.color = "blue";
}

 // const outputValueC = ((inputValue -32)*(5/9));
    // const outputValueK = ((inputValue -32)*(5/9)+273.15);

    // output.value = outputValueC