"use strict";

$(function() {

    //Cuando se haga clic sobre el elemento con id 'boton', se llamara
    //a la funcion pelicula
    $("#boton").click(function(){
        pelicula();
    });
    
});


//Funcion para obtener los datos de la pelicula o serie a buscar
function pelicula()
{
    //Definimos una variable con la apikey que me han dado
    let apiKey = "20cc1300";
    //Definimos una variable que contiene la url de la pagina
    let url = "https://www.omdbapi.com/";

    $.ajax({
        //Especificamos el tipo de peticion
        method: "GET",
        dataType: "json",
        //URL a la que se envia la solicitud Ajax
        url: url,
        //Datos que enviamos junto con la peticion
        data:{
            //Indicamos la apikey que se va a utilizar
            apikey:apiKey,
            //El titulo de la pelicula que se debe de buscar
            s:$("#titulo").val(),
            //El tipo, si es pelicula o serie
            type:$("#tipo").val(),
            //El anio de estreno
            y:$("#anio").val()
        }
    })
    //Una vez terminada la peticion, se entrara al metodo done
    //donde obtendremos los datos enviados por el servidor
    .done(function(data) {
        let datos = JSON.parse(JSON.stringify(data));
        console.log(datos);
        crearTabla(datos);
    })
    //Fail por si ha habido algun problema
    .fail(function(){
        alert("error");
    });
    
}

//Funcion que crea el tbody de la tabla
function crearTabla(data) {

    //llamamos a la funcion borrar para eliminar los campos existentes
    borrar();

    //Cambiamos la clase de tabla a visible
    $("#tabla")
    .removeClass("oculto")
    .addClass("visible");

    //Recorremos el array
    for(let i = 0; i < data.Search.length; i++)
    {   
        //Por cada vuelta, creamos un elemento tr para crear
        //una nueva fila en la tabla con los datos que obtenemos 
        $(document.createElement("tr"))
        .html(`
        <td>${data.Search[i].Title}</td>
        <td>${data.Search[i].Type}</td>
        <td>${data.Search[i].Year}</td>
        <td><img src="${data.Search[i].Poster}"/></td>`)
        //Indicamos que tr pertenece al primer elmento tbody
        .appendTo($("tbody")[0]);
        
    }
}

function borrar()
{
    $("#tabla > tbody").empty();
}

/*
//Funcion que crea las opciones del select 
function aniosS()
{   
    //Creamos un bucle para crear los diferentes anios que puedes
    //seleccionar en el select
    for(let i = 2000; i <= 2022; i++){
        //Creamos un elemento option
        $(document.createElement("option"))
            //Con attr establecemos (tambien sirve para acceder) el valor
            //de los atributos de un elemento de nuestra pagina
            .attr("value",i) //Tambien podemos poner simplemente .val(i)
            //Asignamos codigo HTML al nodo
            .html(i)
            //Inserta el elemento en el extremo del elemento con id anio
            .appendTo("#anio");
    }
}
*/