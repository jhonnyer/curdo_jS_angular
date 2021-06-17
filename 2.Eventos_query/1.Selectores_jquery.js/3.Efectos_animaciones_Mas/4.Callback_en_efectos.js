$(document).ready(function(){
    console.log("Jquery cargado");
    // Utilizacion funcion de callback 
    $("#mostrar").click(function(){
        $("#caja").slideUp('slow',function(){
            console.log("Cartel mostrado");
        });
    });
    // Cuando presione el boton ocultar se desaparece de la vista el elemento caja
    $("#ocultar").click(function(){
        // oculta el emento caja con el metodo fadeTo que tiene dos estados 1 para mostrar y 0 para ocultar 
        $("#caja").slideDown('slow',function(){
            console.log("Cartel ocultado");
        });
    });
});