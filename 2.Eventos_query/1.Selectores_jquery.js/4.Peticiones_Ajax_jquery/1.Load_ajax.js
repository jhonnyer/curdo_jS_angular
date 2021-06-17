$(document).ready(function(){
    console.log("Jquery cargado");
    // LOAD: permite hacer una peticion ajax forget e inscrusta el resultado dentro de un div o un elemento de la pagina 
    // seleccionamos el elemento id:datros e introducimos los datos de una aPI rest o una pagina remota
    $("#datos").load("https://reqres.in/")
})