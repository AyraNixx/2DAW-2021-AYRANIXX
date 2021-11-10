//Creamos una función que recibe una cadena
function upper(cadena)
{
    //Utilizamos el metodo charAt para que nos devuelva el primer
    //caracter de la cadena en mayúsculas al usarlo junto 
    //toUpperCase.
    //Devolvemos lo anterior más el resto de la cadena a partir
    //de la posición 1 gracias al método slice.
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}


let cadena = prompt();
alert(upper(cadena));