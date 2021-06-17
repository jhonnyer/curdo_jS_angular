$(document).ready(function(){

    // cargar datos del calendario para la fecha de nacimiento en el formulario 
    $("form input[name='date']").datepicker({
        //Puedo defirnir el formato de la fecha: ejemplo dd-mm-yy ese mismo formato va en el formulario
        // dateFormat:'dd-mm-yy' 
    });
    // validacion de formulario, carga de plugin 
    $.validate({
        lang:'es',
        // Mensaje de error
        errorMessagePosition:'top', //Mensaje de error en la parte superior
        scrollToTopOnError:true //mensaje en la parte superior de todos los errores en el formulario cuando se presiona el boton subtmit
    });
});