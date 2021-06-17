$(document).ready(function(){
    //Reloj con plugin momment. Se actualiza el reloj cada 1 segundo
    setInterval(function(){
        var reloj=moment().format("hh:mm:ss");
        console.log(reloj);
        $("#reloj").html(reloj);
    },1000); //setInverval actualizar la pantalla y ejecutar cada 1 segundo un trozo de instruccion
});