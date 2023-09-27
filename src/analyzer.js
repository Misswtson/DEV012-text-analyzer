const analyzer = {  
  getWordCount: (text) => {
  if (text === "" || (!text.match(/[a-zA-Z0-7]/))) {
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
    if (text === "" || (!text.match(/[a-zA-Z0-7]/))) {
      return 0; 
     } else {
      const espacios = text.trim().split(/\s+/);
      return espacios.length;
     }
    
  },
  getAverageWordLength: (text) => { 
    
  },
  getNumberCount: (text) => {
    
  
  },
  getNumberSum: (text) => {   
   

  }
};

export default analyzer;
