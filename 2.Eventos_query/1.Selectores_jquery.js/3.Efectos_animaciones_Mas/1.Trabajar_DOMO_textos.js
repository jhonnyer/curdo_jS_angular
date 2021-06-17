$(document).ready(function(){
    console.log("Jquery cargado");
    // llama a la funcion reloadLinks que trae los elementos presentes en el menu 
        reloadLinks();
        // Seleccionar el evento add_button y cuando de click añadir el texto al elemento a 
        $('#add_button')
            // Eliminar el atributo disabled del codigo html que tenia deshabilitado el boton añadir 
            .removeAttr('disabled')
            .click(function(){
            //val: obtener el valor añadir en el input del formulario 
            var datos=$('#add_link').val();
            console.log(datos);
            // agregar el texto al menu ul con id:menu, mediante un href
            var menu=$('#menu');
            // Metodo html permite inscrustar elementos en el codigo html de la vista 
            // menu.html('<li><a href="'+datos+'"></a></li>');

            // Metodo APPEND añade un nuevo elemento en la lista en este caso 
            // menu.append('<li><a href="'+datos+'"></a></li>');
            
            // Metodo PREPEND añade al principio de lista 
            menu.prepend('<li><a href="'+datos+'"></a></li>');
            
            // Metodo BEFORE añade afuera de la lista 
            // menu.before('<li><a href="'+datos+'"></a></li>');
            
            // despues de añadir el texto colocamos el valor del dato del input en vacio 
            $('#add_link').val('');
            
            // Funcion afectada por el metodo append donde sera añadido o quitado un elemento de la lista 
            reloadLinks();
        });
    });

// Funcion que recopila los datos introducidos en el menu ul del elemento a
function reloadLinks(){
    console.log($('a').length);
    // Recorrer todos los elementos a con la funcion each 
    $('a').each(function(index){
        // Creamos una variable del this para no sobrecargar el acceso al DOM 
        var that=$(this);
        // this recorre los elementos del body definidos anteriormente del elemento a 
        console.log(that);
        // attr: obtener el elemento que hay dentro del elemento a, en este caso definido el href
        var enlace=$(this).attr("href");
        console.log(enlace);
        // cambiar las propiedades de un elemento, añadir atributos. en este caso metodo _blank
        // que abre el enlace en otra pagina 
        that.attr('target','_blank');
        // Remover cualquier atributo que se tenga en la web 
        that.removeAttr();
        // añado el texto del enlace en el ul como texto 
        that.text(enlace);
    });
}