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
const appendToDisplay = (number) => {

}
function insertPI(){
    currentInput = Math.PI.toString
    display.value = currentInput
}


