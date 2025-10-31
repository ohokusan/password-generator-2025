let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let passwordLengthEl = document.querySelector('input[type="number"]')
let btnEl = document.getElementById("btn-el")
let btnNumbersEl = document.getElementById("btn-numbers-el")
let btnSpeccharsEl = document.getElementById("btn-specchars-el")
let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")
let theme = "dark"

let filtersStatus = {
    numbers: false,
    specchars: true
}

const filters = {
    numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    specchars: ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
};

for (let key in filtersStatus) {
    if (filtersStatus[key]) {
        addFilters(filters[key])
    }
}

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

// Length filter for password
function getPasswordLength() {
    if (passwordLengthEl.value === "" || (passwordLengthEl.value > 20 || passwordLengthEl.value < 5)) {
        return 15
    } else {
        return passwordLengthEl.value
    }
}

// Filters for numbers and spec chars
btnNumbersEl.addEventListener("click", function() {
    if (btnNumbersEl.classList.contains("filter-active")) {
        removeFilters(filters["numbers"])
        btnNumbersEl.classList.remove("filter-active")
    } else {
        addFilters(filters["numbers"])
        btnNumbersEl.classList.add("filter-active")
    }
})

btnSpeccharsEl.addEventListener("click", function() {
    if (btnSpeccharsEl.classList.contains("filter-active")) {
        removeFilters(filters["specchars"])
        btnSpeccharsEl.classList.remove("filter-active")
    } else {
        addFilters(filters["specchars"])
        btnSpeccharsEl.classList.add("filter-active")
    }
})

function addFilters(filter) {
    characters.push(...filter)
}

function removeFilters(filter) {
    characters = characters.filter(function( el ) {
        return !filter.includes( el )
    })
}

// Password generation
function generateRandomPassword(passwordLength) {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}

function getRandomCharacter() {
    let randomCharactersIndex = Math.floor( Math.random() * characters.length)
    return characters[randomCharactersIndex]
}

