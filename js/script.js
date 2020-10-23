document.getElementById('convert').addEventListener('click', function(){
    var x = document.getElementById('tempToBeConverted').value;
    var y = (x -32) * (5/9);
    var z = (y.toFixed(2));
    if (z > 24) {
        document.querySelector('#result').style.backgroundColor = 'red';
    } else {
        document.querySelector('#result').style.backgroundColor = 'blue';
    }
    document.querySelector('#result').innerHTML = `${z} °C`;
})


document.getElementById('clear').addEventListener('click', function(){
    document.querySelector('#tempToBeConverted').value = null;
    document.querySelector('#result').innerHTML = "";
}
)