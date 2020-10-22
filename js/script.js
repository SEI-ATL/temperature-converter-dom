// function tempConvert(val) 
//     val = parseFloat(val);


    
// 

const output = document.querySelector('#submitButton').addEventListener('click', function(e){
    e.preventDefault()
    const far = document.querySelector('#input').value
    let cel = ((far - 32) / 1.8)
    console.log(cel);
    document.querySelector('#return').innerHTML = cel;
 })

console.log(output);


const clearField = document.querySelector('#clearButton').addEventListener('click', function(){
    document.querySelector('#input').value = '';
    document.querySelector('#return').innerHTML = '';
})

// var x = document.getElementById('#return').innerHTML 












// function cToF(celsius) 
// {
//   var cTemp = celsius;
//   var cToFahr = cTemp * 9 / 5 + 32;
//   var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//     console.log(message);
// }

// function fToC(fahrenheit) 
// {
//   var fTemp = fahrenheit;
//   var fToCel = (fTemp - 32) * 5 / 9;
//   var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
//     console.log(message);
// } 
// cToF(60);
// fToC(45);
