// const fahrenheit = document.querySelector('#input').value

// // document.querySelector('#here').value What I used to try to take the place of 0
// const celsius = 0

// function fahToCel() {
//     cel = ((fahrenheit - 32)/1.8)
//     return cel
// }


// function celToFah() {
//     fah = ((celsius*(9/5)) + 32)
//     return fah
// }


const output =document.querySelector('#submit').addEventListener('click', function() {
    const fahrenheit = document.querySelector('#input').value
    console.log(fahrenheit);
    let cel = ((fahrenheit - 32)/1.8)
    console.log(cel);
    return cel
    
})
console.log(output);

//on button click run function fahToCel grabbing info from input GOAL
//clear Button should set the output to 0 or null