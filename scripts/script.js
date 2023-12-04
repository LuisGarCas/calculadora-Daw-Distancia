/**
** Autor :Luis García 
**GitHub:https://github.com/LuisGarCas
*/
// Enlazamos la pantalla con el javascript

let display = document.getElementById("display")

// variable de scope global del valor actual de la pantalla

let currentInput = "0"

function clearDisplay() {
    currentInput = "0"
    display.value = currentInput
}
function appendToDisplay(value) {
    // Si el valor actual es 0, significa que no hemos pulsado nada.
    if (currentInput === "0") {
        currentInput = ""
    }
    currentInput += value

    display.value = currentInput

}

function insertPI() {
    currentInput = Math.PI.toString
    display.value = currentInput
}

function square() {
    try {
        currentInput = Math.pow(parseFloat(currentInput), 2)
        display.value = currentInput

    } catch (error) {
        display.value = "Error"
    }
}

function changeSign() {
    try {
        currentInput = -parseFloat(currentInput)
        display.value = currentInput
    } catch (error) {
        display.value = "Error"
    }
}

function division() {
    try{
        currentInput = Math.floor(parseFloat(currentInput))
        display.value= currentInput

    } catch (error) {
        display.value= "Error"
    }
}

