let listaServidores = ['gmail.com', 'gmail.es', 'yahoo.es', 'yahoo.es', 'hotmail.com', 'hotmail.es', 'GMX.com', 'zillum.com'];


function validar(formulario) {
    //Primero, comprobamos que el campo del Email no esta vacío, si estuviera
    //vacío nos saltaría una alarma avisando de ello y no se podría enviar 
    //el email.
    if ( (formulario.email.value == 0)) {
        alert('No se ha introducido ningún email');
        return false;
    }

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
    if (!(formatoEmail.test(formulario.email.value))) {
        //Si no lo hace, lo indicamos y devolvemos false, lo que impide que se envíe el correo
        alert('Formato del correo electrónico no válido.');
        return false;
    }

    //Definimos variable que obtiene el email
    let email = document.getElementById("email").value;
    
    //Sacamos la subcadena que comprende al servidor y así usarla luego para saber
    //si se encuentra dentro de la lista de servidores
    let servidor = email.substring(email.indexOf("@") + 1);

    //Definimos un boolean para que en caso de que no encuentre el servidor
    //nos avise
    let verdadero = new Boolean(true);

    //Recorremos el array de listaServidores
    for(let i = 0; i < listaServidores.length; i++)
    {
        //si el servidor del email coincide con alguno de la lista, se devuelve
        //true y se envía el correo
        if(servidor == listaServidores[i])
        {
            verdadero = true;
            return true;
        //Si no, verdadero pasa a ser falso y se muestra un mensaje una vez
        //que se salga del bucle
        }else
        {
            verdadero = false;
        }
    }
    //Si verdadero es falso, se muestra una alerta diciendo que el servidor no
    //ha sido encontrado
    if (!verdadero){
        alert("El servidor del email no ha sido encontrado.");
        return false;
    }


    //si no hemos detectado fallo devolvemos TRUE //
    return true;
}