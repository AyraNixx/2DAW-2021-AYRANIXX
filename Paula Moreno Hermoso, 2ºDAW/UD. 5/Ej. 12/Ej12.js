//Creamos una funcion muestra
function muestra() {
    //Indicamos que el elemento con clase 'visible' obtenga el elemento XHTML
    //que tiene el atributo id "adicional"
    document.getElementById("adicional").className = "visible";

    //Ahora, hacemos que el enlace "Seguir leyendo" se ponga en oculto.
    //Usamos lo mismo que arriba pero poniendo enlace y oculto
    document.getElementById("enlace").className = "oculto";

}