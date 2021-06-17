'use strict'
$(document).ready(function(){
    // Selector de atributo: Selecciona las etiquetas o elementos de HTML que tengan asignados ciertos atributos
    // selecionar los elementos por atributos, utilizando los corchetes 
    // Atributo title 
    $('[title="Google"]').css('background','#ccc');
    $('[title="Facebook"]').css('background','blue');
});