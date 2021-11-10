//Creamos una funcion que recibe como parametro un numero
function entre(num)
{
    //nos devuelve lo siguiente
    return (50 <= num &&  99 >= num);
    //De esta manera nos ahorramos el tener que escribirlo 
    //para comprobar si están en el rango los dos números
}
//Creamos una funcion que recibe dos numeros como parametros
//y en la que vamos a comprobar si están dentro del rango
//50-99 (incluidos). SI lo están, devuelve true, si no, false.
function verificar(num1, num2)
{
    if(entre(parseInt(num1)) || entre(parseInt(num2)))
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