//Creamos una funcion que recibe como parametros dos números.
//Esta funcion comprobará si uno de los números o su suma es
//50. Si cumplen con esa condición, nos devuelve true, en caso
//contrario devuelve false.
function verificar(num1, num2)
{
    if(parseInt(num1) == 50 || parseInt(num2) == 50 || ((parseInt(num1) + parseInt(num2)) == 50))
    {
        return alert(true);
    }
    else
    {
        return alert(false);
    }
}

let num1 = prompt("Ingrese el primer valor: ");
let num2 = prompt("Ingrese el segundo valor: ");

verificar(num1, num2);