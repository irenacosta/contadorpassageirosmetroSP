let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function incremento(){
    count += + 1
    countEl.textContent = count
}

function salvar(){
    let contaEntradas = count + " " + "-"
    saveEl.textContent += contaEntradas
    countEl.textContent = 0
    count = 0
}

let welcomeEl = document.getElementById("welcome-el")

let name1 = "Irena Costa"
let greetings = "Seja bem-vinda de volta, "

welcomeEl.innerText = greetings + name1 + "!"

welcomeEl.innerText += "👋"
