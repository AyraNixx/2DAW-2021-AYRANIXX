//Creamos una funcion que recibe la matriz y el elemento a borrar
function eliminar (matriz, n)
{   
    //Creamos un bucle que recorre el array
    for(let i = 0; i < matriz.length; i++)
    {
        //En caso de que un elemento del array coincida con el que 
        //se quiere borrar
        if (matriz[i] == n){

            //Eliminamos el elemento
            matriz.splice(i, 1);  
            //Salimos del bucle
            break;
        }
    }   
    //Devolvemos la matriz
    return matriz;
}

matriz = [2, 4, 5, 9];
n = 5;
alert("Matriz después de eliminar el elemento: " + eliminar(matriz, n));