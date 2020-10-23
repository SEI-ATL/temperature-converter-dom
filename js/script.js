
document.addEventListener('DOMContentLoaded', function() {
    // var button = document.createElement("buton");
    // button.innerHTML = "Submit";
    
    // var body = document.getElementsByTagName("body")[0];
    // body.appendChild
    
    document.getElementById("subBtn").addEventListener("click", function(event) {
        event.preventDefault();
        const go = document.querySelector("#inputTemperature").value;
        document.getElementById("outputTemperature").innerHTML = Math.round(celsiusConverter(go));
        
    })


    
    function celsiusConverter(f) {
        return (5/9) * (f-32);
    
    }
    function fahrenConverter(c) {
        return (9/5) * (c+32);
    }
    
    


})

