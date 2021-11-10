//Creamos una funcion que recibe un numero como
//parametro
function diferencia (num)
{
    //Si num es mayor que trece, se calcula la diferencia
    //absoluta de num - 13 y se multiplica por dos
    if(num > 19)
    {
        return alert("Resultado:  " + Math.abs(num-19) * 3);
    }
    //Si num es menor que 13, se devuelve la diferencia de 13 
    //menos num
    else if (num < 19)
    {
        return alert("Resultado:  " + (19 - num));
    }
}

let num = prompt("Ingrese un número: ");
diferencia(num);