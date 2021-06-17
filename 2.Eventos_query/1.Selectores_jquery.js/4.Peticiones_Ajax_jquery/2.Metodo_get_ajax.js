$(document).ready(function(){
    console.log("Jquery cargado");
    // Metodo Get: hace la peticion a una aPi y recupera los datos 
    // Añado un json indicando la pagina de donde se sacan los datos, en este caso page=2
    $.get("https://reqres.in/api/users",{page:2},function(response){
        console.log(response);
        // foreach para recorrer la respuesta obtenida del objeto mediante una funcion de callback
        response.data.forEach((element,index)=>{
            var datos=$("#datos");
            // Añado al elemento id datos un elemento p con el nombre de un usuario recuperado
            // Datos sacados por ajax de una API rest. Los datos son guardasos en el objeto response 
            datos.append("<p>"+element.first_name+" "+element.last_name+"</p>");
        })
    });
})