
//Creamos una variable en la que vamos a guardar la letra obtenida
let teclas = "";

//Creamos una funcion mostrarTecla que recibe un evento.
//Para esta ocasión, ese evento es el onkeydown de la funcion
//iniciar
function mostrarTecla(event)
{
    //Empleamos el condicional para que si la tecla pulsada equivale a 
    //Alt, Ctrl o Shift, la variable teclas se igualará a una cadena 
    //indicando la tecla pulsada de entre esas tres. Sin embargo, 
    //aún no lo mostramos.
    //En caso de que la tecla no sea ni Alt, Ctrl ni Shift, 
    //el valor del input pasara a ser el de la variable teclas.
    //Teclas se igualará a 'teclas = teclas + event.key' o lo que es
    //lo mismo 'teclas += event.key', de esta manera si anteriormente 
    //hemos pulsado la tecla Alt, por ejemplo, la variable teclas
    //ya tendría un valor iniciar de 'Alt + ' y se concatenaría
    //con la nueva tecla pulsada.
    if ((event.code == 'AltRight') || (event.code == 'AltLeft')){
        teclas = "Alt + ";
    }else if ((event.code == 'ControlRight') || (event.code == 'ControlLeft')){
        teclas = "Control + ";
    }else if ((event.code == 'ShiftLeft') || (event.code == 'ShiftRight')){
        teclas = "Shift + ";
    }else{
        document.getElementById('mostrar').value = (teclas = teclas + event.key);
        teclas = '';
    }

    //Tambien podriamos utilizar los metodos altKey, ctrlKey, etc que actuan
    //como boolean si se pulsan dichas teclas pero tienen algunos problemas
    //por ejemplo, altGr no lo detecta como alt
}

//La funcion iniciar llamará a la funcion mostrarTecla cuando
//se presione una tecla en la página.
function iniciar ()
{
    window.onkeydown = mostrarTecla;
}

//El evento onload se activa cuando se termina de cargar
//la página, en ese momento llamará a la función iniciar()
window.onload = iniciar();