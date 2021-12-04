//Creamos una funcion que recibe el formulario y va a validarlo
function validar(formulario) {

    //Primero, comprobamos que el campo del DNI no esta vacío, si estuviera
    //vacío nos saltaría una alarma avisando de ello y no se podría enviar 
    //el dni.
    if (formulario.dni.value == 0) 
    {
        alert('DNI vacío');
        return false;
    }
    //Creamos una variable llamada formulario a la que le indicamos que 
    //debe de estar formada por 8 números comprendidos del 0 al 9 y una 
    //letra que debe de ir seguidamente del último número sin separación
    //y que está comprendida de la A a la Z.
    let dni=/(^([0-9]{8,8}[A-Z])|^)$/;

    //Con la funcion test comprobamos que el patrón indicado anteriormente
    //se encuentre dentro del dni que hayamos introducido. Si no corresponde,
    //saltará una alarma
    if (!(dni.test(formulario.dni.value))) {
        alert('El formato del DNI no es correcto');
        return false;  }

    // si no hemos detectado fallo devolvemos TRUE
    return true;
}