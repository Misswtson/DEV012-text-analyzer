//import analyzer from './analyzer.js';

function limpiarInput() {
    const inputElement = document.querySelector('[name="user-input"]');// Obtener el elemento de entrada por su ID
    inputElement.value = ""; // Establecer el valor del campo de entrada en una cadena vacía
}

const limpiarButton = document.getElementById("reset-button");
limpiarButton.addEventListener("click", limpiarInput);


/*
document.addEventListener ("DOMContentLoaded"),
funtion (){
    const resetButton = document.getElementById("resetbutton");
    resetbutton.addEventListener("click", Analizar);

});

function userinput(){
    const userinput =document.getElementsByName ("userinput").value;
}
*/