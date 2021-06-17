'use strict'
$(document).ready(function(){
    console.log("Jquery cargado");
    // Evento Mouse y Hover 
    // Selecciona la clase caja 
    var caja=$("#caja");
    // cuando el mpuse pase por el emento caja se coloca rojo
    caja.mouseover(function(){
        $(this).css("background","red");
    });
    // cuando el mouse sale de la caja se coloca color verde 
    caja.mouseout(function(){
        $(this).css("background","green");
    })
})