import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
document.addEventListener ("DOMContentLoaded",
funtion (){
    const resetbutton = document.getElementById ("resetbutton");
    resetbutton.addEventListener("click", Analizar);

});

funtion userinput(){
    const userinput =document.getElementsByName ("userinput").value;
}