'use strict'
$(document).ready(function(){
    // Evento FOCUS y BLUR: Permite hacer una accion cuando este adentro o afuera de un elemento
    var nombre=$("#nombre"); 
    // Cuando esta en el focus del formulario resalta verde 
    nombre.focus(function(){
         $(this).css("border","2px solid green");
     });
    //  cuando sale resalta color gris #ccc 
     nombre.blur(function(){
         $(this).css("borde","1px solid #ccc");
        // Metodo val permite sacar los datos del formulario 
        var datos=$(this).val();
        // Metodo text permite asignar los datos abstraidos del formulario al elemento con id: datos 
        // metodo show muestra el elemento con id datos y sus atributos 
         $("#datos").text(datos).show();
     })
})