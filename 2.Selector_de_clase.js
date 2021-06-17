$(document).ready(function(){
    console.log("Jquery y web cargados")

    // Selector ID. El signo $ permite llamar el selector en jquery  
    // estilos en formato clave valor. 
    // El identificador es unico de una etiqueta
    // la clase puede abarcar muchas etiquetas para darle propiedades comunes
    var rojo=$("#rojo").css("background","red")
                    .css("color","white");
    console.log(rojo);
    var rojo=$("#amarillo").css("background","yellow")
                    .css("color","white");
    var rojo=$("#verde").css("background","green")
                    .css("color","white");
    
    // Selector de clase: elige los elementos del DOM con base a una clase
    // La clase se extrae el css style.css . En caso de no querer asi se ahce manual
    // var  mi_clase=$('.zebra');
    // añadir un estilo mas a la clase 
    var  mi_clase=$('.zebra').css("padding","7px");
    console.log(mi_clase);
    // un elemento concreto 
    // console.log(mi_clase[0]);
    // seleccionar elemento concreto con metodo eq tambien
    // console.log(mi_clase.eq(1));
    // Asignar estilos manualmente 
    // var  mi_clase=$('.zebra');
    // mi_clase.css("border","5px dashed black");
    
    // funcion para cambiar las propiedades de una clase y asignar las propiedades de otra clase 
    $('.sin_borde').click(function(){
        console.log("Click presionado");
        $(this).addClass('zebra');
    })
});   