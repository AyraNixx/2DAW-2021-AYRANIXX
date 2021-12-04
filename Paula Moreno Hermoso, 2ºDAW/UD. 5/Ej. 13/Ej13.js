//Creamos la funcion añade
function anade() {
    //Obtenemos el elemento XHTML que corresponde con el atributo id lista
    //que es al que vamos a añadir el nuevo elemento
    let lista = document.getElementById("lista");

    //Vamos a crear otro nodo de tipo Element que es un li (es lo que se meterá
    //dentro de la lista desordenada).
    let nuevo = document.createElement("li");
    //Creamos otro nodo de tipo texto que vamos a meter dentro del nodo que hemos creado
    let texto = document.createTextNode("Nuevo Elemento");
    //Usamos appendChild para insertar el nodo texto a la lista del nodo elemento.
    nuevo.appendChild(texto);

    //Añadimos el nodo elemento al nodo lista
    lista.appendChild(nuevo);
}