let email = prompt("Ingresa tu gmail: ");

//Creamos una función que recibe como parametro el email
function proteger(email)
{
    //Definimos una nueva variable
    let emailOculto;
    //devolvemos emailOculto que está igualado al email que hemos recibido
    //pero que ha remplazado la cadena a partir de la posición tres hasta
    //el @ por 3 puntos.
    //Para ello he utilizado la funcion replace que es la que cambia, 
    //la función substring que es la que saca la subcadena de la cadena
    //principal que queremos cambiar y la función indexOf que va a sacar
    //la posición en la que nos encontramos el @, esa posición se utilizará
    //con la función substring para indicar hasta dónde queremos sacar la cadena
    return emailOculto = email.replace(email.substring(3, email.indexOf("@")), '...');
    
}
alert("Email protegido: " + proteger(email));