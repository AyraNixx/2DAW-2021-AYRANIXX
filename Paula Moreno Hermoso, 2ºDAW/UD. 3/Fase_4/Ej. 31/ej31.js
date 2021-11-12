//Creamos una funcion que recibe como parametro 3 numeros
function maximo (num1, num2, num3)
{   
    //Utilizamos la funcion de la clase Math max
    //para sacar el valor más alto de entre los 3
    //números
    return Math.max(num1, num2, num3);
}

let num1 = prompt("Ingrese el primer número: ");
let num2 = prompt("Ingrese el segundo número: ");
let num3 = prompt("Ingrese el tercer número: ");

alert("Valor más alto de los tres números: " + maximo(num1, num2, num3));