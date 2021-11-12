//Creamos una funcion que recibe como parametro una matriz
function maximo (matriz)
{   
    //Utilizamos la funcion de la clase Math max junto
    //con el metodo apply para sacar el valor más
    //alto de la matriz
    return Math.max.apply(null, matriz);
}
let matriz = [11,3,16,90];
alert("Valor más alto de la matriz: " + maximo(matriz));