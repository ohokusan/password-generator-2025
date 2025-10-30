const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLengthEl = document.querySelector('input[type="number"]')
let btnEl = document.getElementById("btn-el")
let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")
let theme = "dark"

btnEl.addEventListener("click", function() {
    let passwordLength = parseInt(getPasswordLength())
    passwordLengthEl.value = ""
    password1El.textContent = generateRandomPassword(passwordLength)
    password2El.textContent = generateRandomPassword(passwordLength)
})

// password1El.addEventListener("click", function() {
//     if (password1El.textContent != "") {
//         navigator.clipboard.writeText(password1El.textContent);
//     }
// })

// Add theme toggle functionality
let btnThemeToogleEl = document.querySelector("[data-theme-toggle]");
btnThemeToogleEl.addEventListener("click", function() {
    if (theme === "dark") {
        theme = "light";
        document.querySelector("html").setAttribute("data-theme", theme);
    } else {
        theme = "dark";
        document.querySelector("html").setAttribute("data-theme", theme);
    }
})

function getPasswordLength() {
    if (passwordLengthEl.value === "" || (passwordLengthEl.value > 20 || passwordLengthEl.value < 5)) {
        return 15
    } else {
        return passwordLengthEl.value
    }
}

function generateRandomPassword(passwordLength) {
    let randomPassword = ""
    for (let i = 0; i <= passwordLength; i++) {
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}

function getRandomCharacter() {
    let randomCharactersIndex = Math.floor( Math.random() * characters.length)
    return characters[randomCharactersIndex]
}

