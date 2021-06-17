$(document).ready(function(){
    console.log("Jquery cargado");
    var list_seleccionable=$(".list_seleccionable");
    // Permite organizar los elementos como se desee
    // NOTA: NO se puede utilizar en paralelo con el selectable 
    // list_seleccionable.sortable();
    // Actualizar una posiscion del elemento selecionado en la base de datos 
    list_seleccionable.sortable({
        update: function(event, ui){
            console.log("La posicion de la lista ha cambiado");
        }
    });
})