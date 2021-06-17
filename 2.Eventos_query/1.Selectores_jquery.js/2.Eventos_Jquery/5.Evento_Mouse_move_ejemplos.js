'use strict'
$(document).ready(function(){
    // mouse hover: Permite capturar el evento cuando se presiona la tecla del mouse y se suelta 
    var nombre=$("#nombre"); 
    // selecciona el elementos con id datos 
    var datos=$("#datos");
    // Cuando esta en el focus del formulario resalta verde 
    nombre.focus(function(){
         $(this).css("border","2px solid green");
     });
    //  cuando sale resalta color gris #ccc 
     nombre.blur(function(){
        $(this).css("borde","1px solid #ccc");
        // Metodo val permite sacar los datos del formulario 
        var datos_form=$(this).val();
        // Metodo text permite asignar los datos abstraidos del formulario al elemento con id: datos 
        // metodo show muestra el elemento con id datos y sus atributos 
         datos.text(datos_form).show();
     })
     // Metodo mouseDown cambia el color cuando presiono el mouse sobre el elemento con id: datos
     datos.mousedown(function(){
         $(this).css("border-color","blue");
     });
     // Metodo mouseup cambie el color a rojo cuando suelto el mouse
     datos.mouseup(function(){
        $(this).css("border-color","red");
    });
    // Metodo Mousemove: captura o persigue el movimiento del raton 
    // En el console log se muestra las coordenadas el raton en la pantalla 
    // Utilizado para crear juegos 
    $(document).mousemove(function(){
        console.log("Posición en X"+event.clientX);
        console.log("Posición en Y"+event.clientY);
        // Ocultar el cursor del raton 
        $('body').css("cursor","none");
        // Selecciona el elemento id#sigueme, tambien optimiza el codigo 
        var sigueme=$("#sigueme");
        // left permite que el elemento creado sigueme persiga el movimiento del mouse, en este caso en la 
        // posicion X
        sigueme.css("left",event.clientX)
        // top permite que el elemento creado sigueme persiga el movimiento del mouse, en este caso en la 
        // posicion y
               .css("top",event.clientY);
    })
})