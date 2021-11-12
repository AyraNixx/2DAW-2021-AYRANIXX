//Creamos una funcion que recibe como parametro una matriz
function multiplicacion (matriz)
{
    //Definimos una variable producto y la igualamos a 1
    let producto = 1;

    //Creamos un bucle que recorre la matriz
    for (let i = 0; i < matriz.length; i++)
    {
        //igualamos producto a producto por
        //el valor de la matriz que se encuentre en la
        //posicion i
        producto = producto * parseInt(matriz[i]);
    }

    //Devolvemos el producto
    return producto;
}

let matriz = [1, 2, 3, 4, 5, 6];
alert("Producto de valores de la matriz: " + multiplicacion(matriz));