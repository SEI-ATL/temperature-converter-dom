// console.log('Hello, front end');


document.querySelector('.button').onclick = function() {
    // console.log('button was clicked');
    var input = document.querySelector('.input').value;
    let integer = Number(input);
    let output = (integer - 32) * (5/9);
    let final = Math.round(output);
    if ( final > 24) {
        document.querySelector('.output').style.backgroundColor = "red";
        document.querySelector(".output").innerHTML = `It is ${final} °C 🔥`;
    } else {
        document.querySelector('.output').style.backgroundColor = "lightblue";
        document.querySelector(".output").innerHTML = `It is ${final} °C ❄️`;
    }

    // document.querySelector(".output").innerHTML = `It is ${final} °C 🔥`;
    // console.log(input);
    // console.log(integer);
    // console.log(output);

}

document.querySelector('.clear').onclick = function() {
    // console.log('button was clicked');
    document.querySelector('.input').value = null;
    document.querySelector(".output").innerHTML = ``;
   

}



