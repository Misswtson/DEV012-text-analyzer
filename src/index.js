import analyzer from './analyzer.js';

const inputElement = document.querySelector('[name="user-input"]');
const limpiarButton = document.getElementById("reset-button");
const wordCount = document.querySelector('li.result:nth-child(1)');
const charCount = document.querySelector('li.result:nth-child(2)');
const noSpaces = document.querySelector('li.result:nth-child(3)');
const wordLenght = document.querySelector('li.result:nth-child(4)');
const numCount = document.querySelector('li.result:nth-child(5)');
const sumCount = document.querySelector('li.result:nth-child(6)');



limpiarButton.addEventListener("click", function (){
    inputElement.value = "";
    wordCount.textContent = "Palabras: 0";
    charCount.textContent = "Caracteres: 0";
    noSpaces.textContent = "Espacios: 0";
    wordLenght.textContent = "Longitud: 0";
    numCount.textContent = "Números 0";
    sumCount.textContent = "Sumatoria: 0";
    console.log ("Se han limpiado los valores");
    alert("Se han limpiado los valores " + "!");
})

inputElement.addEventListener("input", function (){
    const text = inputElement.value
    wordCount.textContent = "Palabras: " + analyzer.getWordCount(text);
    charCount.textContent = "Caracteres: " + analyzer.getCharacterCount(text);
    noSpaces.textContent = "Espacios: " + analyzer.getCharacterCountExcludingSpaces(text);
    wordLenght.textContent = "Longitud: " + analyzer.getAverageWordLength(text); 
    numCount.textContent = "Números: " + analyzer.getNumberCount(text);
    sumCount.textContent = "Sumatoria: " + analyzer.getNumberSum(text);
    
    
})

wordCount.textContent = "Palabras: 0";
charCount.textContent = "Caracteres: 0";
noSpaces.textContent = "Espacios: 0";
wordLenght.textContent = "Longitud: 0";
numCount.textContent = "Números 0";
sumCount.textContent = "Sumatoria: 0";