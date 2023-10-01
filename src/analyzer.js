const analyzer = {  
getWordCount: (text) => {
if (text === "" || (!text.match(/[a-zA-Z0-9]/))) {
return 0; 
} else {
const palabra = text.split(/\s+/);
return palabra.length;
}
}, 
getCharacterCount: (text) => {
if (text === "") {
return 0; 
} else {
return text.length;
}
},
getCharacterCountExcludingSpaces: (text) => {
let espacios = text.replace(/[^\w]/g, '');
return espacios.length; 
},
getAverageWordLength: (text) => { 
const palabras = text.split(/\s+/);
if (palabras && palabras.length > 0) {
let longitudPalabras = 0;
for (const palabra of palabras) {
longitudPalabras += palabra.length;
}
const longitud = longitudPalabras / palabras.length;
console.log(`Longitud media de palabras: ${palabras}`)
return parseFloat(longitud.toFixed(2));
}
},
getNumberCount: (text) => {
const numeros = text.match(/\b\d+(\.\d+)?\b/g)
if (numeros === null) {
return 0;
} else {
return numeros.length;
}
},
getNumberSum: (text) => {   
const sumaNumeros = text.match(/\b\d+(\.\d+)?\b/g);
let suma = 0;
if (sumaNumeros === null) {
return 0;
}
for (let i = 0; i < sumaNumeros.length; i++) {
suma += parseFloat(sumaNumeros[i]);
}
return suma;  
},
};

export default analyzer;
