let cadena1 = prompt("Ingrese la cadena principal: ")
let cadena2 = prompt("Ingrese la subcadena a introducir: ");
let pos = prompt("Ingrese la posición para la subcadena: ")

//Creamos funcion que recibe la cadena principal, la subcadena y
//la posicion en la que queremos introducir la subcadena
function insertar(cadena1, cadena2, pos)
{
        //Comprobamos que está definido
        if(!(typeof(pos) == undefined)){        
        //Devolvemos la cadena principal con la subcadena insertada
        //en la posición indicada
        //Para ello usamos la función slice() que nos va a devolver
        //la parte de la cadena comprendida entre la posición inicial
        //que se le indique hasta la posición final.
        //Luego, continuamos la cadena añadiendo la subcadena y 
        //utilizamos nuevamente slice() para continuar con la cadena 
        //principal tras añadir la subcadena
        return cadena1.slice(0, pos) + cadena2 + cadena1.slice(pos);
        }else{
           alert("Posición no definida");
        }
    
}

alert(insertar("Hola, buenas noches, yo me llamo Snow por si no me conocen", "Pepe", 33));