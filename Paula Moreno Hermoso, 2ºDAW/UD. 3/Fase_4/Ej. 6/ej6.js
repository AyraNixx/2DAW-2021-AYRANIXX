//Creamos una funcion que recibe como parametro una matriz
function maximo (matriz)
{
    //Definimos una variable max y la igualamos al 
    //mínimo valor numérico posible
    let max = Number.MIN_VALUE;

    //Creamos un bucle que recorre la matriz
    for (let i = 0; i < matriz.length; i++)
    {
        //Creamos condicional para ver si el valor
        //del array en la posicion i es mayor que
        //la variable maximo
        if(max < matriz[i])
        {
            max = matriz[i];
        }
    }

    //Devolvemos el maximo
    return max;
}

let matriz = [1, 6, 3, 4, 5, 0];
alert("Valor más alto de la matriz: " + maximo(matriz));