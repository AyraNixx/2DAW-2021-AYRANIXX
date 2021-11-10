
//Creamos una funcion que va a recibir como parametro
//el nombre de un archivo
function extension (archivo)
{
    //Al ser archivo una cadena, podemos usar el método split. 
    //El método split nos va a devolver una cadena obtenida a 
    //partir del separador indicado, en este caso, a partir del
    //punto. Obtenemos el último elemento con el método pop()
    return archivo.split('.').pop();
}

let archivo = prompt("Ingrese el nombre del archivo: ");
alert("La extensión de este archivo es " + extension(archivo));