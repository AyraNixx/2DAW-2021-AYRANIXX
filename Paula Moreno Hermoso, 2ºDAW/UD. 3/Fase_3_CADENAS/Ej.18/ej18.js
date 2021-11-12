//Creamos funcion que recibe la cadena principal, la subcadena y
//la posicion en la que queremos introducir la subcadena
function contarSs(cadena, subcadena)
{
        let contador = 0;
        let palabras = cadena.split(/[ .,*+?^(){}|[\]\\]+/);
        for(let n = 1; n <= palabras.length; n++){
                if(palabras[n] == subcadena){
                        contador++;
                }
        }
        return contador;
}

let cadena = prompt("Ingrese una cadena: ");
let subcadena = prompt("Ingrese la subcadena: ");
alert(contarSs(cadena, subcadena));

 // ¿En qué se diferencia el ejercicio 18 del 29?