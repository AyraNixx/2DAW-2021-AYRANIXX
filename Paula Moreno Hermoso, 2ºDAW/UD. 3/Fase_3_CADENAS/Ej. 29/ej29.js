//Creamos funcion que recibe la cadena y la palabra a buscar
function contarPalabra(cadena, palabra)
{
        //Definimos dos variables, una va a ser donde se guardará
        //las palabras de la cadena gracias al metodo split que nos
        //devuelve una array y la otra nos servirá para contar el 
        //número de veces que aparece la palabra en la cadena
        let palabrasCadena;
        let contador = 0;

        //Creamos un bucle que va a durar hasta que n alcance el numero
        //de palabras que tiene la cadena
        for(let n = 0; n <= cadena.split(" ").length; n++)
        {
                //Igualamos palabrasCadena al array que se obtiene
                //al usar el metodo split en la cadena
                palabrasCadena = cadena.split(/[ .,*+?^(){}|[\]\\]+/);
                
                //Creamos un condicional que dice que si en el 
                //array palabrasCadena en la posición coincidente
                //con la vuelta de bucle en la que nos encontramos
                //coincide con la palabra a buscar, se sume el contador
                //uno
                if(palabrasCadena[n] == palabra)
                {
                      contador++;  
                }
        }
        //Devolvemos el numero de veces que aparece la palabra
        return contador;
}

let cadena = prompt("Ingrese la cadena: ");
let palabra = prompt("Palabra a buscar: ");

alert("Número de veces que aparece la palabra: " + contarPalabra(cadena, palabra));