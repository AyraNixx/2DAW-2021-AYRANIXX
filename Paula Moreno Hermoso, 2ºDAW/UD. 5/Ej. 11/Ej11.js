//Utilizamos la funcion getElementsByTagName() para que nos devuelva un array
//de nodos DOM que coincidad con el elemento a
let enlaces = document.getElementsByTagName("a");


//Creamos una funcion llamada numEnlaces que nos va devolver el numero de enlaces
//que existe en la página
function numEnlaces ()
{
    //Utilizamos alert para que salga una ventanita con el numero de enlaces
    //y empleamos el metodo length para sacar la cantidad de elementos 'a' contenidos
    //en el array enlaces para saber cuantos enlaces tenemos en la pagina
    alert("Hay " + enlaces.length + " enlaces en la página.")
}


//Creamos una funcion llamada direUltEnlace que nos va a devolver la direccion
//del ultimo enlace de la pagina
function direUltEnlace()
{
    //Creamos un bucle for para que lea el array
    for(let i = 0; i < enlaces.length; i++)
    {
        //Cuando i coincida con la posicion del ultimo elemento
        if( i == (enlaces.length - 1))
        {
            //Sacamos la direccion del enlace
            alert("El enlace a la última página es  " + enlaces[i].href);
        }
    }
}


//Creamos una funcion llamada mismoEnlace que nos va a mostrar el numero de enlaces
//que tienen esta direccion --> 'http://prueba/'
function mismoEnlace()
{
    //Creamos un contador para saber cuantos enlaces son
    let contador = 0;

    //Recorremos el array
    for(let i = 0; i < enlaces.length; i++)
    {
        //Si la direccion del enlace del array que toque en ese momento 
        //coincide con "http://prueba/", sumamos
        if( enlaces[i].href == "http://prueba/")
        {
            contador++;
        }
    }
    //Mostramos cuantos enlaces hay con esa direccion
    alert("Hay " + contador + " enlaces con direccion a 'http://prueba'.")
}


//Creamos una funcion llamada enlacesTercerP que nos va mostrar cuantos
//enlaces hay en el tercer párrafo
function enlacesTercerP()
{
    //Sacamos un array de nodos DOM a partir del nodo de document(nodo de partida)
    //que corresponda a los parrafos
    let parrafos = document.getElementsByTagName("p");
    
    //Sacamos los enlaces que hay en el parrafo 3
    let enlaces3 = parrafos[2].getElementsByTagName("a").length;

    //Mostramos los enlaces que hay en el tercer parrafo
    alert("Numero de enlaces en el 3 parrafo: " + enlaces3);
}


//Cuando se cargue la pagina se llamaran a las funciones anteriores
window.onload = function() {
    // Numero de enlaces de la pagina
    numEnlaces();

    // Direccion del penultimo enlace
    direUltEnlace();

    // Numero de enlaces que apuntan a http://prueba
    mismoEnlace();

    // Numero de enlaces del tercer páraffo
    enlacesTercerP();
}