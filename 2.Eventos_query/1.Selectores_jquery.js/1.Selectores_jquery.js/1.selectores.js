$(document).ready(function(){
    console.log("Jquery y web cargados")

    // Selector ID. El signo $ permite llamar el selector en jquery  
    // estilos en formato clave valor 
    var rojo=$("#rojo").css("background","red")
                    .css("color","white");
    console.log(rojo);
    var rojo=$("#amarillo").css("background","yellow")
                    .css("color","white");
    var rojo=$("#verde").css("background","green")
                    .css("color","white");
});   