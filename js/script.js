function unesi(){
    return false;
}

convert = () => {

    let unit = document.getElementsByName('unit');
    let temp = parseInt(document.getElementById('temp').value);
    console.log(unit);
    if (unit[0].checked){
        
        document.getElementById('newtemp').innerHTML = convertCtoF(temp) + 'C';
        color(temp);


    } else {
        document.getElementById('newtemp').innerHTML = convertFtoC(temp) + 'F';
        color(temp);

    }

}

clear = () => {
    document.getElementById("form").reset();
}

convertFtoC = (temp) => {
    let c = ((5/9) * (temp - 32)).toFixed(2);
    return `${c}°`;
}

convertCtoF = (temp) => {
    let f = ((temp * 9/5) + 32).toFixed(2);
    return `${f}°`;
}

color = (temp) => {

    if (temp > 50){
        document.getElementById('output').style.backgroundColor = "red";
        document.getElementById('output').style.backgroundImage = "url('https://i.imgur.com/6vfOazb.png')";
        document.getElementById('output').style.backgroundRepeat = "no-repeat"
    }
    else {
        document.getElementById('output').style.backgroundColor = "blue";
        document.getElementById('output').style.backgroundImage = "url('https://i.imgur.com/xXml6Ud.png')";
        document.getElementById('output').style.backgroundRepeat = "no-repeat"
    }

}

// set array of colors
// divide max input by length of color array

