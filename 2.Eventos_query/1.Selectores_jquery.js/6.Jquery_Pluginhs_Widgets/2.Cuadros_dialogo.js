$(document).ready(function(){
    console.log("jquery cargado");
    // cuadro de dialogo sobre un div
    // Selecciona el boton con id: lanzar_popup y al ser seleccionado lanza el cuadro de dialogo
    $("#lanzar_popup").click(function(){
        $("#popup").dialog();  
    })
})