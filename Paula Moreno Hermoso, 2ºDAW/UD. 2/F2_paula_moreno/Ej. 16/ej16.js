//Creamos una funcion que recibe un numero como
//parametro
function suma (num1, num2)
{
    //Si num1 es igual a num2, se multiplica su 
    //resultado por 3
    if(num1 == num2)
    {
        return alert("Resultado:  " + (parseInt(num1) + parseInt(num2)*3));
    }
    //Si no son iguales, solo se suman
    else
    {
        return alert("Resultado:  " + (parseInt(num1) + parseInt(num2)));
    }
}

let num1 = prompt("Ingrese el primer número: ");
let num2 = prompt("Ingrese el segundo número: ");
suma(num1, num2);