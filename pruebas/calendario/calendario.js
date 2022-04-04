"use strict";

let meses = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"]
let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
let dia = new Date();

//Obtenemos el mes y el anio actual
let mesActual = dia.getMonth();
let anioActual = dia.getFullYear();

//Por si elige otra fecha, obtenemos el select
let anioS = $("#anio").val();
let mesS = $("#mes").val();

$(function() {

    //Indicamos que el texto que aparecera en el elemento con id mesAnio,
    //sera el mes y anio en el que nos encontremos
    $("#mesAnio").text(meses[mesActual] + " " + anioActual);

    //Llamamos a las funciones listaAnios y listaMeses para crear las opciones
    //de los selects
    listaAnios();
    listaMeses();

    //llamamos a la funcion calendario que nos muestra los dias del 
    //mes seleccionado
    calendario(mesActual, anioActual);
});



function listaMeses()
{
    
    for(let i in meses)
    {
        $(document.createElement("option"))
        .val(meses[i])
        .html(meses[i])
        .appendTo("#mes");
    }
}

function listaAnios()
{   
    //Creamos un bucle para crear los diferentes anios que puedes
    //seleccionar en el select
    for(let i = 1992; i <= 2122; i++){
        //Creamos un elemento option
        $(document.createElement("option"))
            //Con attr establecemos (tambien sirve para acceder) el valor
            //de los atributos de un elemento de nuestra pagina
            .val(i) //Tambien podemos poner simplemente .val(i)
            //Asignamos codigo HTML al nodo
            .html(i)
            //Inserta el elemento en el extremo del elemento con id anio
            .appendTo("#anio");
    }
}


function calendario(mes, anio)
{
    //Obtenemos el primer dia del mes
    let diaPrimero = new Date(anio, mes);

    //Obtenemos el ultimo dia del mes
    //Ponemos + 1,0 porque en esta funcion (solo en esta) se cuentan 
    //los meses del 1 al 12
    let diaUltimo = new Date(anio, mes + 1, 0);

    crearCasillas(diaPrimero, diaUltimo);
}

function crearCasillas(diaPrimero, diaUltimo)
{


}




function clearCasillas()
{
    $("tbody")[0]
    .text = ""
    .html = "";
}
