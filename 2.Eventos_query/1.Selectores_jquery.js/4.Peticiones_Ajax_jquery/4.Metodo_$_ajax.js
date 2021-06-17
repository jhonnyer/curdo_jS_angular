$(document).ready(function(){
    console.log("Jquery cargado");
    // FUNCION ENVIAR POST MEDIANTE METODO AJAX 
    // seleccionamos el evento id:formulario que permite recopilar los datos del formulario 
    var formulario=$("#formulario");
    // e es una variable que captura el evento del formulario 
    formulario.submit(function(e){
        // el siguiente comando permite que cuando se envie los datos del formulario no direccione a ninguna pagina del formulario con el metodo action 
        e.preventDefault();
        var usuario={
            // recopila con val los valores en el input cuyo nombre sea igual a "name" y "web"
            name:$('input[name="name"]').val(),
            web:$('input[name="web"]').val()
        };
        console.log(usuario);
    // Ajax es un metodo de un json que se le pueden pasar  distintos valores y parametros 
        $.ajax({
            type:'POST',
            // Estas propiedades no son necesarios siempre 
            url:$(this).attr("action"),
            // Datos a pasar variable usuario
            data:usuario,
            // Antes de que se envie, se ejecuta una accion 
            beforeSend:function(){
                console.log("Enviando usuario...");
            },
            // En caso de que se envien los parametros bien mostrar en consola los datos 
            success: function(response){
                console.log(response);
                var datos=$("#datos");
                alert("Usuario añadido correctamente");
                // Añado al elemento id datos un elemento p con el nombre de un usuario recuperado
                // Datos sacados por ajax de una API rest. Los datos son guardasos en el objeto response 
                datos.append("<p>"+response.name+" "+response.web+"</p>");
                // alert("Usuario añadido correctamente");
            },
            error: function(){
                console.log("A ocurrido un error");
            },
            // tiempo en ejecutarse la funcion 
            timeout:1000,
            // dataType:'json', //Formato en que seran enviados y recibidos los datos
            // contentType:'application/json' //formato en que viajaran los datos
        });
        return false;
    })
})