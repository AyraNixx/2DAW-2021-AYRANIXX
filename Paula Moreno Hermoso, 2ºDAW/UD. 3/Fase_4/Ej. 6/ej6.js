//Creamos una funcion que recibe como parametro una matriz
function maximo (matriz)
{   
    //Utilizamos la funcion de la clase Math max junto
    //con el metodo apply para sacar el valor más
    //alto de la matriz
    return Math.max.apply(null, matriz);
}
let matriz = [1, 6, 3, 4, 5, 0];
alert("Valor más alto de la matriz: " + maximo(matriz));