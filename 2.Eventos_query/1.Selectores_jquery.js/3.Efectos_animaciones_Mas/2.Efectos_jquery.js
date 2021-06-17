$(document).ready(function(){
    console.log("Jquery cargado");
    // Por defecto el boton mostrar esta oculto cuando carga la pagina, esta cargando el elemento con id caja
    $("#mostrar").hide();
    // Cuando presione el boton mostrar se visualiza el elemento caja
    $("#mostrar").click(function(){
        // Muestra unicamente el boton ocultar. 'fast' permite que el efecto tenga un degrado rapido
        // Tambien estan degrado normal, slow lento y otras velocidades en ms
        $(this).hide();
        $("#ocultar").show();
        // muestra el emento caja 
        // $("#caja").show('normal');

        // muestra el emento caja con un fundido 
        // $("#caja").fadeIn('slow');
        
        // muestra el emento caja con el metodo fadeTo que tiene dos estados 1 para mostrar y 0 para ocultar 
        // el estado 1 maxima opacidad y 0 minima opacidad 
        $("#caja").fadeTo('slow',1);
        console.log("Cartel mostrado");
    });
    // Cuando presione el boton ocultar se desaparece de la vista el elemento caja
    $("#ocultar").click(function(){
        // Muestra unicamente el boton mostrar
        $(this).hide();
        $("#mostrar").show();
        // oculta el emento con id caja 
        // $("#caja").hide('fast');

        // oculta el emento con id caja con un fundido  
        // $("#caja").fadeOut('slow');

        // oculta el emento caja con el metodo fadeTo que tiene dos estados 1 para mostrar y 0 para ocultar 
        $("#caja").fadeTo('slow',0.2);
        console.log("Cartel ocultado");
        // Otros metodos slideUp y slideDown 
    });

    // Optimizacion de codigo boton todo en uno, mostrar y ocultar
    // Capturamos el id todoenuno
    // $("#todoenuno").click(function(){
    //     // El metodo toggle cuando da un clic abre el elemento caja, y el otro click la oculta 
    //     $("#caja").toggle('slow');
    // })

    // $("#todoenuno").click(function(){
    //     // El metodo fadeToggle cuando da un clic abre el elemento caja, y el otro click la oculta con efecto fade
    //     $("#caja").fadeToggle('slow');
    // })

    $("#todoenuno").click(function(){
        // El metodo slideToggle cuando da un clic abre el elemento caja, y el otro click la oculta con efecto slide
        $("#caja").slideToggle('normal');
    })
});