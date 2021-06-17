/* Slider muestra funcionando bien  */
/* https://bxslider.com/ */
$(document).ready(function(){
    // SLIDER 
    $(function(){
        // Selecciono la clase bxslider y coloco atributos a la clase y la llamo con el .bxSlider 
        // si esta en la vista del index cargar el bxSlider. Ejecutar solo en el index
        if(window.location.href.indexOf("index")>-1){
            $('.bxslider').bxSlider({
                // los  valores son tomados de la pagina de slider utilizado 
              mode: 'fade',
              captions: true,
              slideWidth: 1200, /*Tamaño de la imagen*/
              responsive:true,
              pager:true,
            //   pager:false /*quita los puntos del slider para la navegacion del slider*/ 
            });
        }
      });
    // si esta en la vista del index cargar el plugin de momment. Ejecutar solo en el index
    if(window.location.href.indexOf("index")>-1){  
        // Posts 
        var posts=[
            {
                title:'Titulo 1',
                // date: new Date(), /*Manejo de fechas normal*/
                date:'Publicado el dia '+ moment().format("dddd")+' '+moment().date()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY") ,  // Do: dia en numero. dddd: dia el letras. Manejo de fechas con libreria moment js 
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis feugiat gravida. In lacinia ac nunc in porta. Curabitur turpis neque, venenatis quis erat at, sagittis sollicitudin nulla. Ut ipsum lorem, rhoncus eu nunc non, bibendum egestas dui. Quisque dignissim velit diam, eget viverra purus mollis nec. Curabitur et feugiat dolor, sed gravida risus. Sed lorem nisl, maximus non interdum nec, mattis ac orci. Fusce bibendum enim id ante tempor elementum. Quisque ac convallis sem. Fusce laoreet ultrices ullamcorper. Vestibulum iaculis feugiat sodales. Nunc mollis tincidunt eros, at auctor lectus.'
            },
            {
                title:'Titulo 2',
                date:'Publicado el dia '+ moment().format("dddd")+' '+moment().date()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY") ,  // Do: dia en numero. dddd: dia el letras. Manejo de fechas con libreria moment js 
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis feugiat gravida. In lacinia ac nunc in porta. Curabitur turpis neque, venenatis quis erat at, sagittis sollicitudin nulla. Ut ipsum lorem, rhoncus eu nunc non, bibendum egestas dui. Quisque dignissim velit diam, eget viverra purus mollis nec. Curabitur et feugiat dolor, sed gravida risus. Sed lorem nisl, maximus non interdum nec, mattis ac orci. Fusce bibendum enim id ante tempor elementum. Quisque ac convallis sem. Fusce laoreet ultrices ullamcorper. Vestibulum iaculis feugiat sodales. Nunc mollis tincidunt eros, at auctor lectus.'
            },
            {
                title:'Titulo 3',
                date:'Publicado el dia '+ moment().format("dddd")+' '+moment().date()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY") ,  // Do: dia en numero. dddd: dia el letras. Manejo de fechas con libreria moment js 
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis feugiat gravida. In lacinia ac nunc in porta. Curabitur turpis neque, venenatis quis erat at, sagittis sollicitudin nulla. Ut ipsum lorem, rhoncus eu nunc non, bibendum egestas dui. Quisque dignissim velit diam, eget viverra purus mollis nec. Curabitur et feugiat dolor, sed gravida risus. Sed lorem nisl, maximus non interdum nec, mattis ac orci. Fusce bibendum enim id ante tempor elementum. Quisque ac convallis sem. Fusce laoreet ultrices ullamcorper. Vestibulum iaculis feugiat sodales. Nunc mollis tincidunt eros, at auctor lectus.'
            },
            {
                title:'Titulo 4',
                date:'Publicado el dia '+ moment().format("dddd")+' '+moment().date()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY") ,  // Do: dia en numero. dddd: dia el letras. Manejo de fechas con libreria moment js 
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis feugiat gravida. In lacinia ac nunc in porta. Curabitur turpis neque, venenatis quis erat at, sagittis sollicitudin nulla. Ut ipsum lorem, rhoncus eu nunc non, bibendum egestas dui. Quisque dignissim velit diam, eget viverra purus mollis nec. Curabitur et feugiat dolor, sed gravida risus. Sed lorem nisl, maximus non interdum nec, mattis ac orci. Fusce bibendum enim id ante tempor elementum. Quisque ac convallis sem. Fusce laoreet ultrices ullamcorper. Vestibulum iaculis feugiat sodales. Nunc mollis tincidunt eros, at auctor lectus.'
            }
        ];
        console.log(posts);
            posts.forEach((item, index)=>{
            // Plantilla que permite añadir codigo html de un articulo sacado de un json 
            var post=`
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
            `;
            // Ver plantillas guardadas en el archivo json posts 
            console.log(post);
            // Añadir plantillas al codigo html en el id posts 
            $("#posts").append(post);
        });
    }
    // Selector de tema. Ejercicio plus verificar el color con el localstorage
    var theme=$("#theme");
    $("#to-green").click(function(){
        theme.attr("href","css/green.css");
    });
    $("#to-red").click(function(){
        theme.attr("href","css/red.css");
    });
    $("#to-blue").click(function(){
        theme.attr("href","css/blue.css");
    });
    // Scroll subir pagina a la parte superior 
    $('.subir').click(function(){
        e.preventDefault(); //permite que se ejecute la funcion y no rediriga a ningun sitio
        $('html, body').animate({
            scrollTo:0 //Subir a lo mas alto de la pagina
        },500) //tiempo de la animacion medio segundo
        return false;
    }); 
    //login Falso. Informacion guardada en el localstorage
    $("#login form").submit(function(){
        var form_name=$("#form_name").val();
        localStorage.setItem("form_name", form_name); //lo almacenamos en la variable sin parentesis llamada form_name
    });
    var form_name=localStorage.getItem("form_name"); //Recupera el valor del localStorage
    if(form_name != null && form_name != "undefined"){ //form_name es diferente a nulo y undifined, mostrar el nombre y esconder el form de login
        var about_parrafo=$("#about p");
        about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>"); //añado link de cerrar sesión
        $("#login").hide(); //ocultar formulario
        $("#logout").click(function(){ //si presiona el boton logout
            localStorage.clear(); //borra variables guardadas en la sesion del localstorage
            location.reload(); //Actualiza la ventana y hace un reload
        });
    }

    // Acordeon Pagina about. Ejecutar solo en la pagina about
    // if(window.location.href.indexOf("about")>-1){
    //     $("#acordeon").accordion();
    // }
})

