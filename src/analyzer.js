const analyzer = {  
  getWordCount: (text) => {
  if (text === "" || (!text.match(/[a-zA-Z0-9]/))) {
   return 0; 
  } else {
    const palabras = text.split(/\s+/);
    return palabras.length;
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
    if (text === "" || (!text.match(/[a-zA-Z0-9]/))) {
      return 0; 
     } else {
      const espacios = text.trim().split(/\s+/);
      return espacios.length;
     }
    
  },
  getAverageWordLength: (text) => { 
   const palabrasEncontradas =  text.match(/\w+/g); 
 if (palabrasEncontradas && palabrasEncontradas.length > 0) {
    let sumaLongitudes = 0;
    // Utilizar un bucle for...of para sumar las longitudes de las palabras
    for (const palabra of palabrasEncontradas) {
        sumaLongitudes += palabra.length;
    }
    // Calcular la longitud media como un número de punto flotante (float)
    const longitudMedia = parseFloat(sumaLongitudes) / palabrasEncontradas.length;
    return parseFloat(longitudMedia.toFixed(2)); 
} else {
  return 0;
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
