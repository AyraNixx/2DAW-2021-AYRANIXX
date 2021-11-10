//Creamos una funcion que recibe un numero como
//parametro
function diferencia (num)
{
    //Si num es mayor que trece, se calcula la diferencia
    //absoluta de num - 13 y se multiplica por dos
    if(num > 13)
    {
        return alert("Resultado:  " + Math.abs(num-13) * 2);
    }
    //Si num es menor que 13, se devuelve la diferencia de 13 
    //menos num
    else if (num < 13)
    {
        return alert("Resultado:  " + (13 - num));
    }
}

let num = prompt("Ingrese un número: ");
diferencia(num);