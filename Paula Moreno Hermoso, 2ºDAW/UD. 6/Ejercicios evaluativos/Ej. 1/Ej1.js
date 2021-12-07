//Definimos num1 y num2 para la operacion
let num1 = num(); let num2 = num();

let alertas = document.getElementsByClassName('alerta');


//Creamos una funcion enorme llamada validar en la que se comprobará que todos los 
//campos cumplan con lo establecido
function validar() {

    /************************    NOMBRE      ************************************/
    
    //Como el ejercicio solo me pide  que compruebe que el campo del nombre está 
    //relleno solo comprobaré el del nombre aunque me parezca que se deban de 
    //comprobar todos
    if(document.getElementById('nombre').value == 0)
    {
        alertas[0].className = "alerta visible";
        document.getElementById('nombre').focus();
        return false;
    }else{
        alertas[0].className = "alerta oculto";
    }



    /***********************     CORREO       ***************************************/

    //Definimos una expresion general para indicar el formato válido para los emails
    //A tener en cuenta en la expresion gneral:
    //  - ^. Indicamos que se comience la búsqueda de coincidencia al principio de la cadena.
    //  - [^@\s]. Estamos diciendo que se busque una o + repreticiones de cualquier caracter que
    //            no sea @ o un espacio en blanco.
    //  - @. Busca el caracter @.
    //  - [^@\.\s]. Similar al de arriba, solo que tambien mira que no haya ningun punto
    //  - \. Busca un único caracter de punto.
    //  - $. Finalizamos la búsqueda al final de la cadena
    let formatoEmail  = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
     
    //Comprobamos que el email introducido cumple con el patrón establecido
    if (!(formatoEmail.test(document.getElementById('email').value))) {
        //Si no lo hace, lo indicamos y devolvemos false, lo que impide que se envíe el correo
        alertas[1].className = "alerta visible";
        document.getElementById('email').focus();
        return false;
    }else{
        alertas[1].className = "alerta oculto";
    }




    /**********************      CONTRASEÑA      ******************************************/

    //Definimos una expresion general para indicar el formato válido para las contraseñas
    //A tener en cuenta en la expresion gneral:
    //  - \d. Busca cualquier dígito, es el equivalente a [0, 9]
    //  - {X, Y}. Indica el mínimo y el máximo de caracteres.
    let formatoContra = /^(?=.*\d)[A-Za-z\d]{8,}$/;
    //Comprobamos que el email introducido cumple con el patrón establecido
    if (!(formatoContra.test(document.getElementById('contra').value))) {
        //Si no lo hace, lo indicamos y devolvemos false, lo que impide que se envíe el correo
        alertas[2].className = "alerta visible";
        document.getElementById('contra').focus();
        return false;
    }else{
        alertas[2].className = "alerta oculto";
    }



                        /******  REPETICIÓN DE CONTRASEÑA  ******/

    //Si el valor del elemento con id 'contra' no es el mismo que el de 'contra2',
    //nos devuelve false y no se puede crear la cuenta
    if(document.getElementById("contra").value != document.getElementById("contra2").value)
    {
        //Si no lo hace, lo indicamos y devolvemos false, lo que impide que se envíe el correo
        alertas[3].className = "alerta visible";
        document.getElementById('contra2').focus();
        return false;
    }else{
        alertas[3].className = "alerta oculto";
    }



    /**********************      ANTI-BOTS         *****************************/
    //Si el resultado no concuerda, se devuelve falso y se ofrece otra cuenta
    if(!((num1 + num2) == document.getElementById('result').value))
    {
        alert("Resultado incorrecto! Inténtelo de nuevo");
        cuenta();
        return false;
    }

    /* si no hemos detectado fallo devolvemos TRUE */
    return true;
}




//Funcion para sacar los números para la cuenta 
function num()
{
    return Math.trunc(Math.random() * (10000 - 0) + 0);
}


//Creamos un EventListener para window que se activará al cargar la página
//y llamará a la función cuenta
window.addEventListener("load", cuenta);



//La funcion cuenta, introduce el texto especificado al elemento con id
//operacion
function cuenta()
{
    document.getElementById('operacion').innerText = num1 + " + " + num2 + " = ?";
}


/**********************     CONDICIONES        *****************************/
//Creo un EventLister para el elemento condiciones (el checkbox) que se activa al
//hacer clic.
document.getElementById('condiciones').addEventListener("click", function()
{
    //Si está marcada la casilla
    if(document.getElementById('condiciones').checked == true)
    {
        //Se le da la clase active
        document.getElementById('crear').className = "active";
        //Y lo ponemos activo al deshabilitar disabled con false
        document.getElementById('crear').disabled = false;
    //Si no, se hace lo contrario
    }else{
        document.getElementById('crear').className = "disabled";
        document.getElementById('crear').disabled = true;
    }
});