const formDiv = document.getElementById('form')
const submitBtn = document.querySelector('#submit')
const clearBtn = document.querySelector('#clear')
let temp
const divRow = document.createElement('div')
divRow.classList.add('row')
const newDiv = document.createElement('div')
newDiv.classList.add('display-temp','standard')
let convertedTemp
let message

function convertTempToCel(tempInput) {
    let x = Number(tempInput)
    x = ((x-32)*(5/9))
    convertedTemp = x
    if (convertedTemp <= 0){
        newDiv.classList.remove('standard')
        newDiv.classList.remove('text-red')
        newDiv.classList.add('text-blue')
        message ="Put extra layers on, it's cold"
    } else if (convertedTemp >= 100){
        newDiv.classList.remove('standard')
        newDiv.classList.remove('text-blue')
        newDiv.classList.add('text-red')
        message ="Stay cool, you might melt!"
    }else if (convertedTemp > 0 && convertedTemp < 100){
        newDiv.classList.remove('text-blue')
        newDiv.classList.remove('text-red')
        message = "You'll be iight"
    }
        
    
    // if (document.getElementById('far').checked && document.getElementById('celConv').checked){
    //     x = ((x-32)*(5/9))
    //     convertedTemp = x
    // } else if (document.getElementById('kel').checked && document.getElementById('celConv').checked){
    //     x = (x-273.15)
    //     convertedTemp = x
    // } else if (document.getElementById('cel').checked && document.getElementById('celConv').checked){
    //     convertedTemp = x
    // }
    return convertedTemp
}

function convertTempToFar(tempInput) {
    let x = Number(tempInput)
    x = ((x * (9/5))+32)
    convertedTemp = x
    if (convertedTemp <= 32) {
        newDiv.classList.remove('standard')
        newDiv.classList.remove('text-red')
        newDiv.classList.add('text-blue')
        message ="Put extra layers on, it's cold"
    }else if (convertedTemp >= 212){
        newDiv.classList.remove('standard')
        newDiv.classList.remove('text-blue')
        newDiv.classList.add('text-red')
        message ="Stay cool, you might melt!"
    } else if (convertedTemp > 32 && convertedTemp < 212){
        newDiv.classList.remove('text-blue')
        newDiv.classList.remove('text-red')
        message = "You'll be iight"
    }
        
    // if (document.getElementById('far').checked && document.getElementById('farConv').checked){
    //     convertedTemp = x
    // } else if (document.getElementById('kel').checked && document.getElementById('farConv').checked){
    //     x = ((x -273.15)*(9/5)+32)
    //     convertedTemp = x
    // } else if (document.getElementById('cel').checked && document.getElementById('farConv').checked){
    //     x = ((x * (9/5))+32)
    //     convertedTemp = x
    // }
    return convertedTemp
}

// function converTempToKel(tempInput){
    // let x = Number(tempInput)
    // if (document.getElementById('far').checked && document.getElementById('kelConv').checked){
    //     x = ((x - 32)*(5/9)+273.15)
    //     convertedTemp = x 
    // } else if (document.getElementById('kel').checked && document.getElementById('kelConv').checked){
    //     convertedTemp = x
    // } else if (document.getElementById('cel').checked && document.getElementById('kelConv').checked){
    //     x = (x + 273.15)
    //     convertedTemp = x
    // }
    // return convertedTemp +'°K'
// }

// function radioChecked(){
//     let radios = document.getElementsByName('tempType')

//     for (let i = 0; i < radios.length; i++){
//         let whichIsChecked = null
//         if (radios[i].checked)
//             whichIsChecked = radios[i].id
//             console.log(whichIsChecked)
//             return whichIsChecked
//     }
// }


submitBtn.addEventListener('click', function(){
    temp = document.querySelector('#temp').value
    let degreeType
    // if (document.getElementById('kelConv').checked){
    //     converTempToKel()
    // } else if (document.getElementById('farConv').checked){
    //     convertTempToFar()
    // } else if (document.getElementById('celConv').checked){
    //     convertTempToCel()
    // }
    if (document.getElementById('far').checked){
        convertTempToCel(temp)
        degreeType = '°C'
    } else if (document.getElementById('cel').checked){
        convertTempToFar(temp)
        degreeType = '°F'
    }
    convertedTemp = convertedTemp.toFixed(2)
        
    console.log(convertedTemp)
    newDiv.innerText =  `${convertedTemp}${degreeType} ${message}`
})
formDiv.appendChild(newDiv)

clearBtn.addEventListener('click', function(){
    location.reload()
    return false
})
