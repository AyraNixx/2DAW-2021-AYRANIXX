
//VARIABLES PARA ALMACENAR LOS VALORES CON ONLOAD 
var numero1 = 0;
var numero2 = 0;
//FUNCION PARA GENERAR LOS NUMEROS EN LA PAGINA CUANDO CARGUE
//Creamos una funcion que nos genere dos numeros aleatorios y los sume.
function numeros() {
    //Con Math.random genera un numero aleatorio y con Math.floor redondeamos ese numero
    //que como maximo ese numero sera un 10 y le sumanos 1 para que no nos aparezca el 0.
    var num1 = Math.floor(Math.random() * 10 + 1);
    var num2 = Math.floor(Math.random() * 10 + 1);
    //El resultado de las variables anteriores la almacenamos en las que definomos al principio.
    numero1 = num1;
    numero2 = num2;
    //Muestra el texto de la cadena con un ID unico.
    //innerHTML devuelve la cadena de texto HTML que escribimos en parentesis. 
    document.getElementById("labelcapcha").innerHTML = ("Capcha: " + num1 + " + " + num2);
}


//FUNCION QUE COMPRUEBA SI ESTÁ MARCADA LA CASILLA DE ACEPTAR CONDICIONES
function aceptaCondiciones() {
    //si el elemento con ID condiciones esta Checked se devolverá true, si no lo está
    //devolverá false    
    if (document.getElementById("condiciones").checked) {
        return true;
    } else {
        return false;
    }
}
//FUNCION PARA VALIDAR LOS CAMPOS
function validaCampos(form) {

    //expresiones regulares para comprobar datos

    //Las expresiones siempre se empiezan y terminan /
    // ^ se utiliza para encontrar el comienzo de una linea y $ para lo contrario, el final.
    // [A-Z] rango de letras en mayusculas
    // + que los caracteres anteriores se pueden repetir una o mas veces.
    // la i al final es para que solo la primera letra este en mayuscula y las demas en minusculas.
    let nombre = /^[A-Z]+$/i;
    //() Encuentra coincidencias con lo que hay dentro del parentesis, y recuerda el patrón para su posterior utilización. 
    // \ Indica que el siguiente carácter normal debe ser considerado como especial. También se utiliza como carácter de 
    //escape para los caracteres especiales. 
    let correo = /^(.+\@.+\..+)$/;
    //{8,20} de 8 a 20 caracteres
    let pass = /^([a-zA-Z\d]{8,20})$/;


    if (nombre.test(form.nombre.value) == false) {
        document.getElementById("pnombre").innerHTML = ("Nombre no correcto");
        document.getElementById("nombre").focus();
        return false;
    } else {
        document.getElementById("pnombre").innerHTML = ("");
    }


    if (correo.test(form.correo.value) == false) {

        document.getElementById("pcorreo").innerHTML = "formato correo no correcto";
        document.getElementById("correo").focus();
        return false;

    } else {
        document.getElementById("pcorreo").innerHTML = ("");
    }

    if (pass.test(form.pass.value) == false) {

        document.getElementById("ppass").innerHTML = "formato password no correcto"
        document.getElementById("pass").focus();
        return false;
    } else {
        document.getElementById("ppass").innerHTML = ("");
    }

    if (form.pass2.value != form.pass.value) {

        document.getElementById("ppass").innerHTML = "las contraseñas no coindicen"
        document.getElementById("pass").focus();
        return false;
    }


    if (document.getElementById("capcha").value != (numero1 + numero2)) {
        document.getElementById("pcapcha").innerHTML = "capcha incorrecto";
        document.getElementById("capcha").focus();
        return false;
    } else {
        document.getElementById("pcapcha").innerHTML = ("");
    }

    return true;
}



//Añadimos un eventListener al elemento con id capcha para que se active al presionar
//una tecla. Si la tecla presionada es 'Enter', se comprueba si está
//marcada la casilla de aceptar condiciones, se enviará el formulario.
//Si no está marcada la casilla, no se enviará el formulario aunque presiones 'Enter'
//Si están aceptadas las condiciones, llamamos a la funcion validaCampos para que 
//valide los campos y si están correctos, se envía el formulario con la funcion
//submit
document.getElementById("capcha").addEventListener("keydown", (e) => {
    if (e.code == 13 || e.key == 'Enter') {
        if (aceptaCondiciones()) {
            if (validaCampos(document.getElementById("form"))) {

                document.getElementById('form').submit();
            }
        } else {
            alert("No se puede enviar el formulario, debes aceptar las condiciones");
        }
    }
});






/**
 * 
 * 
 * 
 *          VERSIÓN ENVIAR FORMULARIO DESPUÉS DE 6 SEGUNDOS DESDE QUE SE PULSÓ UNA TECLA
 * 
 *          Descomentar seleccionando todo el código de abajo y pulsando Ctrl + Ç (de Barça)
 * 
 */


// //Definimos una variable llamada tiempo para controlar cuánto tiempo pasa desde 
// //que has pulsado una tecla
// var tiempo = "";

// //Añadimos un EventListener al elemento con id capcha para que se active cuando se 
// //suelte una tecla
// document.getElementById("capcha").addEventListener("keyup", () => 
// {
//     //Utilizamos la función clearTimeout para evitar que se ejecute la funcion comprobarForm
//     //antes de tiempo
//     clearTimeout(tiempo);

//     //Establecemos un temporizador con la funcion setTimeout().
//     //Esta función nos permitirá ejecutar la función comprobarForm() después de que pasen
//     //8 segundos (8s son 6000 milisegundos).
//     tiempo = setTimeout(comprobarForm, 6000)
// });

// //En la funcion comprobarForm vemos si se ha marcado la casilla de aceptar condiciones.
// //Si no está marcada, se nos informará. 
// function comprobarForm()
// {
//     //Si la casilla está marcada
//     if (aceptaCondiciones()) {
//         //Validamos los campos del formulario
//         if (validaCampos(document.getElementById("form"))) {
//             //Si los datos del formulario son correctos, se envían los datos.
//             document.getElementById('form').submit();
//         }
//     } else {
//         alert("No se puede enviar el formulario, debes aceptar las condiciones");
//     }
// }