
const passLenElement = document.querySelector('.pass-length')
const slider = document.querySelector('.slider')
const copiedMessage = document.querySelector('#copied-message')
const generatePassword = document.querySelector('#generate-password')
const uppercaseLetter = document.querySelector('#uppercase')
const lowercaseLetter = document.querySelector('#lowercase')
const numbers = document.querySelector('#number')
const symbols = document.querySelector('#symbols')
const displayPassword = document.querySelector('#password')
const copyImage = document.querySelector("#image")
const indicatorElement = document.querySelector('#indicator')

var passworLength = 10;
var Password = "";

setPassLength(passworLength);


function setPassLength(passworLength){
    passLenElement.textContent = passworLength;
    slider.value = passworLength;
}

async function copy(Password){
    
    try {
        await navigator.clipboard.writeText(Password);
        copiedMessage.textContent = 'Copied'
        copiedMessage.setAttribute('style',"background-color:#06ff06")
        setTimeout(function(){ 
            copiedMessage.textContent = ''
            copiedMessage.setAttribute('style',"background-color:transparent")
        } , 2000)
    }
    catch(e){
        copiedMessage.textContent = 'Failed'
        copiedMessage.setAttribute('style',"background-color:#FF0000")
        setTimeout(function(){
             copiedMessage.textContent = ''
             copiedMessage.setAttribute('style',"background-color:transparent")
            } , 2000)
    }
}



function generateRandomNum(min,max){
     return Math.floor(Math.random() *(max - min) + min);
}

function randomUppercaseLetter(){
    return String.fromCharCode(generateRandomNum(65,91))
}

function randomLowercaseLetter(){
    return String.fromCharCode(generateRandomNum(97,122))
}

function randomNumber(){
    return generateRandomNum(0,9)
}

function randomSymbol(){
    let symbols = "!@#$%^&*()_+{}?><"
    return symbols[generateRandomNum(0,symbols.length)]
}


generatePassword.addEventListener('click', function(){
        Password = ""
        let count = []
        if(uppercaseLetter.checked) Password += randomUppercaseLetter(), count.push(1);
        if(lowercaseLetter.checked)  Password += randomLowercaseLetter(),count.push(2);
        if(numbers.checked) Password += randomNumber(), count.push(3);
        if(symbols.checked) Password += randomSymbol(), count.push(4);
        

        for (let i = 0; i < passworLength - count.length; i++){
            let idx = generateRandomNum(0,count.length);
            
            if (count[idx] == 1){
                Password += randomUppercaseLetter()
            }
            else if (count[idx] == 2){
                Password += randomLowercaseLetter()
            }
            else if (count[idx] == 3){
                Password += randomNumber()
            }
            else if (count[idx] == 4){
                Password += randomSymbol()
            }
        }

        displayPassword.value = Password
        indicator(count)
})

slider.addEventListener('input', function(){
    passworLength = slider.value
    setPassLength(passworLength)
})

function indicator(count){

    if(passworLength >10 && count.length == 4){
        indicatorElement.setAttribute('style','background-color:#06ff06; box-shadow:0px 0px 12px 1px #06ff06;')
    }
    else if(passworLength > 5 && count.length >=2){
        indicatorElement.setAttribute('style','background-color:#ffff00; box-shadow:0px 0px 12px 1px #ffff00;')
    }
    else{
        indicatorElement.setAttribute('style','background-color:#ff0000 ;box-shadow:0px 0px 12px 1px #ff0000;')
    }
    
}

copyImage.addEventListener('click',function(){
    copy(Password)
})