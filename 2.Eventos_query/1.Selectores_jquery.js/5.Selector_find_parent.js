'use strict'
$(document).ready(function(){
    // Find - Parent Selectores 
    // Seleccionar enlaces a y parrafos p y añadir clase de margen-superior 
    // Esto permite no saturar muchas veces de accesos al DOM 
    $('p, a').addClass('margen-superior');
    // Buscar un elmento concreto de una clase especifica, dentro de un id en especifico, en este caso caja  
    // var busqueda=$("#caja").find('.resaltado');
    // Anidar la busqueda id y clase en una sola para buscar un elemento por atributo, en este caso title
    var busqueda=$("#caja .resaltado").parent().find('[title="Google"]');
    // Anidar la busqueda id y clase en una sola para buscar un elemento por atributo, en una posicion especifica
    // parent() permite salir de los niveles seleccionados de la busqueda: Ejemplo: devuelve la busqueda al body
    // var busqueda=$("#caja .resaltado").eq(0).parent().parent().parent().find('[title="Google"]');
    var busqueda=$("#caja .resaltado").eq(0).parent().find('[title="Google"]');

    // se situa en el id elemento2, el primer parent saca al UL, y el segundo sale al id caja
    //  y busca el elemento resaltado
    var busqueda=$("#elemento2").parent().parent().find('.resaltado');

    console.log(busqueda);
})