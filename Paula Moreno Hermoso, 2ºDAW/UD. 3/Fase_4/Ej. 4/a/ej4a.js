//Creamos una funcion que recibe como parametro una matriz
function sumaMatriz (matriz)
{
    //Definimos una variable suma y la igualamos a 0
    let suma = 0;

    //Creamos un bucle que recorre la matriz
    for (let i = 0; i < matriz.length; i++)
    {
        //Igualamos suma a suma mas el numero de la matriz que se
        //encuentre en la posicion i
        suma = parseInt(suma) + parseInt(matriz[i]);
    }

    //Devolvemos suma
    return suma;
}

let matriz = [1, 2, 3, 4, 5, 6];
alert("Resultado de la suma de la matriz: " + sumaMatriz(matriz));