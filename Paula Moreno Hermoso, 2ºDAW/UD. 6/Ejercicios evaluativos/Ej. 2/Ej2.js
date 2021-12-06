//Sacamas un array con los elementos pertecencientes a la clase letras
let letras = document.getElementsByClassName("letras");
let guardarCadena = letras;
let tiempoEspera;




//Funcion que nos devuelve un numero aleatorio del array de letras
function numAleatorio(letras)
{
    return Math.trunc(Math.random() * ((letras.length-1) - 0) + 0);
}




//Con la funcion aleatorio, sacamos una letra al azar para que sea más fácil de adivinar
function aleatorio() 
{    
    //Creamos un array con las letras
    let refran = ['N', 'O', 'H', 'A', 'Y', 'M', 'A', 'L', 'Q', 'U', 'E', 'P', 'O', 'R', 'B', 'I', 'E', 'N', 'N', 'O', 'V', 'E', 'N', 'G', 'A']
    //Obtenemos un numero aleatorio 
    let aleatorio = numAleatorio(letras);
    
    //Indicamos que el elemento de la clase letras en la posicion que hayamos obtenido en el aleatorio muestre su valor
    letras[aleatorio].value = refran[aleatorio];
}




//Creamos la funcion intervalo que establecerá cada cuanto aparece una nueva letra
function intervalo() 
{
    tiempoEspera = setInterval(aleatorio, 400);
}




//Reseteamos letras para que vuelva a su estado original
function resetear(letras) 
{
    //Recorremos el array
    for(let i = 0; i < letras.length; i++)
    {
        //Mientras que no sean las posiciones de los valores originales, 
        //se borran estableciendo como value ""
        if (i != 0 && i != 4 && i != 12 && i != 23 && i != 24){
            document.getElementsByClassName("letras")[i].value = "";
        }            
    }    
}



//Comprobamos que el resultado es correcto
function parar()
{
    //Con clearInterval, hacemos que se pare la aparicion de letras
    clearInterval(tiempoEspera);

    //Llamamos a la funcion resultado para que podamos introducir el refran
    resultado();
}




function comprobar()
{
    //Creamos una nueva variable llamada cadena donde vamos a guardar
    //las letras que haya por ahora en el refran y comprobaremos si es el refran
    //o si aun está incompleto
    let cadena = document.getElementById('resultado').value;

    //Creamos otra variable con la cadena con el refrán completo
    let cadena1 = "no hay mal que por bien no venga";

    //Con un condicional, comprobamos si la cadena es correcta o no
    if(cadena.toUpperCase() == cadena1.toUpperCase())
    {
        resetear(letras);
        document.getElementById('resultado').value = "";
        document.getElementById('resultado').className = "oculto";  
        return alert("CORRECTO!");
    }else{
        resetear(letras);
        document.getElementById('resultado').value = "";
        document.getElementById('resultado').className = "oculto";  
        return alert("INCORRECTO!");
        
    }
}




//Funcion resultado
function resultado()
{
    //hacemos visible el elemento con id resultado
    document.getElementById('resultado').className = "visible";

    //Guardamos el nodo en una variable llamada resultado
    let resultado = document.getElementById('resultado');

    //le añadimos un eventListener al presionar una tecla que llamará a 
    //la función nuevo
    resultado.addEventListener("keydown", nuevo);
}




//Si la tecla presionada es enter, comprobamos si es el refrán
function nuevo(event) {
    if (event.code === 'Enter') 
        {  //checks whether the pressed key is "Enter"
            comprobar();
        }
  }
  