'use strict'
$(document).ready(function(){
    console.log("Jquery cargado");
    // Selecciona la clase caja 
    var caja=$("#caja");
    // cuando pasa el mouse sobre la caja cambia a rojo 
    function cambiaRojo(){
        $(this).css("background","red");
    };
    // cuando el mouse sale de la caja se coloca color verde 
    function cambiaVerde(){
        $(this).css("background","green");
    };
    // Metodo Hover: Tiene dos funciones de callback. 
    // En este caso, a ambas funciones se le ha asignado las funciones cambiaRojo y cambiaVerde cuando sale de la caja
    caja.hover(cambiaRojo,cambiaVerde);
    // EVENTO CLICK
    caja.click(function(){
        $(this).css("background","blue")
               .css("color","white")
    });
    // EVENTO DOBLECLICK
    caja.dblclick(function(){
        $(this).css("background","pink")
               .css("color","yellow")
    });
})