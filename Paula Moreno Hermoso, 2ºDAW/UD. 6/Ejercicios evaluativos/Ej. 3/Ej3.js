//Array con las posibles palabras
let palabras = ['albóndiga', 'roquefort', 'montadito', 'aeropuerto', 'hipódromo', 'manzana', 'caracola', 'hidrógeno', 'chocolate', 'diccionario', 'tienda', 'relacionados'];

//Variable que guarda la posición de la palabra en el array palabras
let pos;


let aciertos = 0;

let contador = 0;



//Funcion que nos devuelve un numero aleatorio del array de palabras
function aleatorio(palabras)
{
    return Math.trunc(Math.random() * ((palabras.length-1) - 0) + 0);
}



//Funcion que ordena de manera aleatoria
function ordenAleatorio()
{
    return Math.random() - 0.5;
}


/****************************        NUEVA PALABRA       ***************************** */

//Funcion que genera nueva palabra
function nuevaPalabra()
{
    //Sacamos una posicion aleatoria del arraya palabras
    pos = aleatorio(palabras);
    //Convertimos la palabra elegida del array palabras en un array compuesto por sus letras
    let palabra = palabras[pos].split("");
    //ordenamos el array con sort (si no indicamos nada, lo ordena de manera alfabética pero
    //vamos a llamar a una funcion que va a ordenarlo de manera aleatoria)
    palabra.sort(ordenAleatorio);

    //Utilizamos join para unir todos los elementos de un array en una cadena que nos devuelve
    palabra = palabra.join(''); 

    //Establecemos el valor del elemento con id letras
    document.getElementById('letras').value = palabra;

    //Reseteamos el valor del elemento con id palabra
    document.getElementById('palabra').value = "";
}


/****************************        SOLUCION       ***************************** */

//Funcion para ver la solucion
function verSolucion()
{
    //Le damos como valor al elemento con id palabra, la cadena que se encuentra en la posicion 
    //'pos' del array 'palabras
    document.getElementById("palabra").value = palabras[pos];
    //Al ver la solución, el contador aumentará sin contarlo como un acierto
    contador++;

    //Además, después de dos segundo te dará otra palabra nueva para que así no puedas introducir
    //la solución que te hayan dado y acertar ;)
    setTimeout(nuevaPalabra, 2000);
}

/****************************        COMPROBACIÓN       ***************************** */

function comprobar()
{
    //Cada vez que se llame a esta función, significa que hemos introducido una respuesta
    //por lo que el contador aumenta
    contador++; 
    //Creamos una nueva variable llamada cadena donde vamos a guardar
    //la palabra introducida
    let cadena = document.getElementById('palabra').value;

    //Creamos otra variable con la cadena que se encuentra en la posicion
    //'pos' del array 'palabras'
    let cadena1 = palabras[pos];

    //Con un condicional, comprobamos si la cadena es correcta o no
    if(cadena.toUpperCase() == cadena1.toUpperCase())
    {
        //Si una respuesta es correcta, aumenta el numero de aciertos
        aciertos++;
        //Si aciertas esa, muestra otra palabra
        nuevaPalabra();
        return alert("CORRECTO!");
    }else{
        return alert("INCORRECTO!");
    }
}

//Obtenemos el elemento con id palabra y le añadimos un eventListener que se activará
//al pulsar una letra y comprobará si la letra es ENTER, si la letra es enter, 
//se llama a la función comprobar
let palabra = document.getElementById('palabra');
palabra.addEventListener("keydown", function(event)
{
    if(event.code == 'Enter')
    {
        comprobar();
    }
});



/********************************       FINALIZAR JUEGO       **************************/
function finalizar() 
{
    //Hacemos visible el elemento con id resultado
    document.getElementById('resultado').className = "visible";

    //Establecemos el contenido que tendrá dicho elemento
    document.getElementById('resultado').innerText = "Porcentaje de aciertos: " + ((aciertos/contador) * 100) + "%";
}



//Al cargar la página, se llamará a la función nuevaPalabra()
window.onload = nuevaPalabra();