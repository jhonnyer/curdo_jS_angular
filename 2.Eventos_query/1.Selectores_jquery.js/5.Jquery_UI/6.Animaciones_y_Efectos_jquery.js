$(document).ready(function(){
    console.log("Jquery cargado");
    var mostrar=$("#mostrar");
    var caja_efectos=$(".caja_efectos");
    mostrar.click(function(){
        // toggle permite hacer efectos y animaciones de jquery
        // caja_efectos.toggle("fade")

        // Tambien como metodo 
        // caja_efectos.fadeToggle();

        // Efecto explode
        // caja_efectos.effect("explode");
        // caja_efectos.toggle("explode");

        // Efecto blind
        // caja_efectos.toggle("blind");

         // Efecto slide
        //  caja_efectos.toggle("slide");

          // Efecto drop
        // caja_efectos.toggle("drop");

         // Efecto fold
        //  caja_efectos.toggle("fold");

          // Efecto puff
        // caja_efectos.toggle("puff");

         // Efecto scale
        // caja_efectos.toggle("scale");

        // Efecto shake
        // caja_efectos.toggle("shake");
        // colocar opciones o atributos a los efectos de tamaño (archivo json), velocidad, entre otros 
        // caja_efectos.toggle("shake",500);
        caja_efectos.toggle("shake",{heigth:200},"fast");
    })
})