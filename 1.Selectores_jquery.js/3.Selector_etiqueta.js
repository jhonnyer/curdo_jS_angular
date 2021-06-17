'use strict'
$(document).ready(function(){
    // Selector de etiqueta
    // vamos a seleccionar los parrafos. La clave valor cursos,pointer permite que cuando el mouse
    // pase por el elemento aparece un cursor de una mano  para seleccionar 
    var parrafos=$('p').css("cursor","pointer");
    parrafos.click(function() {
        // this selecciona el elemento, en este caso el elemento p  
        // En este caso se le quita la clase zebra con removeClass
        // hasClass permite verificar si un elemento tiene una clase disponible 
        var thise=$(this); //esto otimiza el codigo. This es una palabra reservada por ese coloco thise
        // Si no tiene la clase grande se la añade 
        if(!thise.hasClass('grande')){
            // quitar una clase de un elemento si se quiere 
            // $(this).removeClass("zebra");
            // si no tiene la clase, añade una nueva clase del CSS llamada grande a los elementos p seleccionados
            // quitar quitar la clase grande del elemento seleccionado 
            thise.addClass("grande");
        }else{
            // Si la clase grande ya la tiene, le quita la clase grande del elemento seleccionado 
            thise.removeClass("grande")
        }
    })
});   