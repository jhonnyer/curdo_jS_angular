$(document).ready(function(){
    console.log("Jquery cargado");
    var area=$("#area");
    var elemento_movido=$("#elemento_movido");
    // HAcer efecto de coger y soltar un elemento sobre otro
    elemento_movido.draggable(); //Permite mover el elemento
    //Permite abarcar el elemento movido 
    area.droppable({
        drop: function(){
            console.log("Has soltado algo dentro del area");
        }
    });
})