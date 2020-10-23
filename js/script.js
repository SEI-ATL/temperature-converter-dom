var temperatures = function(t) {
        var output, given, result, opposite;
        given = document.getElementById('temp').value;
        if (t === "C") {
            result = 1.8 * (+given) + 32;
            opposite = "F";
        } else {
            result = (given - 32) / 1.8;
            opposite = "C";
        }
        if (result % 1 !== 0) {
            console.log(result % 1);
            result = result.toFixed(2);
        }
        if (given || given === "0") {
            output = given + " \u00b0" + t + " is equal to " + result + " \u00b0" + opposite;
        } else {
            output = "Please enter a number";
        }
        document.querySelector('output').innerHTML = output;
    }
document.getElementById('ctof').addEventListener('click', function(){temperatures('C');})
document.getElementById('ctof2').addEventListener('click', function(){temperatures('F');})

