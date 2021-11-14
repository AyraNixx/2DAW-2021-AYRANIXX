//Creamos una funcion que recibe una matriz como parametro y que nos va a
//devolver el elemento de la matriz que más se repite
function frecuencia(matriz)
{
    //Definimos tres variables, una que nos servirá como contador para 
    //ver el numero de veces que un elemento se repite en el array,
    //otras dos que usaremos para guardar el elemento que mas se repite
    //ya que con una guardaremos el número de veces que el elemento aparece
    //y con la otra el elemento que es
    let contador = 0;
    let contadorFinal = 1;
    let masRepetido;
    //Recorremos el array con un bucle
    for(let i = 0; i < matriz.length; i++)
    {
        //Recorremos el array con un bucle para comprobar cuantas veces matriz[i]
        //se repite
        for(let j = 0; j < matriz.length; j++)
        {
            //Si matriz[i] es igual a matriz[j]
            if(matriz[i] == matriz[j])
            {
                //Se suma el contador
                contador++;
            }
            //Si contadorFinal es menor que contador
            if(contadorFinal < contador)
            {
                //ContadorFinal pasa a valer lo mismo que contador
                contadorFinal = contador;
                //Guardamos el elemento
                masRepetido = matriz[i];
            }
        }
        //Reiniciamos el contador a 0 para el siguiente elemento de la lista
        contador = 0;
    }
    //Devolvemos el elemento que se repite más y cuantas veces se repite
    return alert("El elemento de la matriz que más se repite es " + masRepetido
    + " con " + contadorFinal + " veces")
}

let matriz = [2, 3, 2, 2, 4, 5, 6, 's', 's', 's', 's', 's', 's', 's', 8, 1, 7, 8];
frecuencia(matriz);

