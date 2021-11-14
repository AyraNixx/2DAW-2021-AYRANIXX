//Creamos una funcion que recibe una matriz 
//y nos va a devolver todos los elementos de la 
//matriz como una cadena sin espacio entre ellos
function cadena(matriz)
{
    return alert(matriz.join(''));
}

let matriz = ['Que', 'es', 'eso', '?', 'Eso', 'es', 'queso'];
cadena(matriz);