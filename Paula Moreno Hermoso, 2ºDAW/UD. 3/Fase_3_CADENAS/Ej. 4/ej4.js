//Creamos una función que recibe una cadena como parámetro
//y el numero de caracteres que queremos extraer de dicha
//cadena
function extraer(cadena, numCaracteres)
{
    //Si el numero de caracteres es mayor de 0
    //se nos devuelve los caracteres que corresponde a la
    //cantidad de caracteres pedida
    if (numCaracteres > 0){
        return alert("Extracción de caracteres: " + cadena.slice(0, numCaracteres));
    }else{
        alert("No ha sido posible.");
    }
}

let cadena = prompt("Escriba una cadena: ");
extraer(cadena,4);