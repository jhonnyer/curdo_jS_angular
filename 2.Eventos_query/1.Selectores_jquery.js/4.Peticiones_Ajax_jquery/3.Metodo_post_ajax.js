$(document).ready(function(){
    console.log("Jquery cargado");
    // var usuario={
    //     name:"Victor Robles",
    //     web:"www.victor.com",
    // };

    // Metodo POST: permite hacer una peticion a una API para enviar informacion a una base de datos
    // el objeto json usuario se le pasa a la API, lo cual permite crear un usuario nuevo 
    // $.post("https://reqres.in/api/users",usuario,function(response){
    //     console.log(response);
    // });

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
        // this permite acceder a los datos del formulario 
        $.post($(this).attr("action"), usuario,function(response){
        console.log(response);
        var datos=$("#datos");
            // Añado al elemento id datos un elemento p con el nombre de un usuario recuperado
            // Datos sacados por ajax de una API rest. Los datos son guardasos en el objeto response 
            datos.append("<p>"+response.name+" "+response.web+"</p>");
        }).done(function(){
            alert("Usuario añadido correctamente");
        });
        // el siguiente comando permite que cuando se envie los datos del formulario no direccione a ninguna pagina del formulario con el metodo action 
        return false;
    })
})