$(document).ready(function(){
    console.log("Jquery cargado");
    var caja=$("#caja");
    $("#animar").click(function(){
        // MEtodo animate permite hacer animaciones sobre el codigo de html. La animacion va en formato json
        // Mueve el emento hacia la derecha de forma sencilla 
        // Todas las animaciones se realizan de modo secuencial de arriba hacia abajo del codigo
        caja.animate({
            marginLeft:'500px',
            fontSize:'40px',
            // tambien el tamaño del padding para que cubra el texto 
            height:'110px'
            },'normal')
            // Añadir mas animaciones 
            .animate({
                // BorderRadius lo coloca ovalado 
                borderRadius:'900px',
                marginTop:'80px'
            },'slow')
            .animate({
                // BorderRadius lo coloca ovalado 
                borderRadius:'0px',
                marginLeft:'0px'
            },'slow')
            .animate({
                // BorderRadius lo coloca ovalado 
                borderRadius:'100px',
                marginTop:'0px'
            },'slow')
            .animate({
                marginLeft:'500px',
                fontSize:'40px',
                // tambien el tamaño del padding para que cubra el texto 
                height:'110px'
                },'normal');
    });
});