
//Obtenemos los nodos elementos sobre los que vamos a aniadir addEventListener
const btn_guardar = document.getElementById("guardar");
const btn_mostrar = document.getElementById("mostrar");
const btn_ocultar= document.getElementById("ocultar");
const btn_eliminar = document.getElementById("borrar");

//Creamos un array que es el que vamos a meter en localStorage
let listaPeliculas = JSON.parse(localStorage.getItem("lista"));


/*******************************    FUNCION  GUARDAR    ***************************************/

//Añadimos un addEventListener al realizar click en el boton de guardar
btn_guardar.addEventListener('click', () => {

    //Obtenemos el valor de peli
    let valor = document.getElementById("peli").value;

    //Comprobamos si no se ha introducido ningun titulo
    if(valor != 0)
    {
        if(listaPeliculas != null)
        {
            //Añadimos el valor en la ultima posicion del array
            listaPeliculas.push(valor);            
        //Si es nulo, lo declaramos
        }else{
            listaPeliculas = [];
            listaPeliculas[0] = valor;
        }
        //Introducimos listaPeliculas a localStorage
        localStorage.setItem("lista", JSON.stringify(listaPeliculas));
        
        //En caso de que se haya añadido un nuevo titulo mientras que estan visibles
        //el resto, se irá llamando al eventListener del boton mostrar
        if(document.getElementById("lista").className == "visible")
        {
            btn_mostrar.click();
        }
    }else{
        //No se ha introducido ningun titulo
        alert("No ha introducido ningún título")
    } 
});

/*******************************    FUNCION  MOSTRAR    ***************************************/

//Añadimos un addEventListener al realizar click en el boton de mostrar
btn_mostrar.addEventListener('click', () => {

    //Obtenemos el elemento con id lista
    let lista = document.getElementById("lista");

    let lis = document.getElementsByTagName("li").length;
    //Obtenemos la lista guardada en el localStorage
    //listaPeliculas = JSON.parse(localStorage.getItem("lista"));

    //Si no es nulo
    if(listaPeliculas != null)
    {
        for(lis; lis < listaPeliculas.length; lis++)
        {   //Llamamos a la funcion nuevoTitulo para que salga en la pantalla.
            crearLi(listaPeliculas[lis]);
        }
        //Se cambia la clase a visible
        lista.className = "visible";
    }else{
        //Si no hay nada, sacamos un alert
        alert("No hay ningún título para mostrar");
        
    }
});

function crearLi(valor)
{
    //Creamos un nuevo elemento de tipo li
    let nuevo = document.createElement("li");
    let texto = document.createTextNode(valor)
    nuevo.appendChild(texto);
    //Obtenemos los elementos con id lista y contenedor
    let lista = document.getElementById("lista");
    let contenedor = document.getElementById("contenedor");

    //Indicamos que nuevo es "hijo" de lista
    lista.appendChild(nuevo);
    //Indicamos que lista es "hija" de contenedor
    contenedor.appendChild(lista);
}


/*******************************    FUNCION  OCULTAR    ***************************************/

//Añadimos un addEventListener al realizar click en el boton de ocultar
btn_ocultar.addEventListener('click', () => {

    //Obtenemos el elemento con id lista
    let lista = document.getElementById("lista");
    //Se cambia la clase a oculto
    lista.className = "oculto";
});


/*******************************    FUNCION  ELIMINAR    ***************************************/

//Añadimos un addEventListener al realizar click en el boton de eliminar
btn_eliminar.addEventListener('click', () => {

    let lista = document.getElementById("lista");

    //Borramos el elemento guardado en el localStorage
    localStorage.removeItem("lista");

    listaPeliculas = JSON.parse(localStorage.getItem("lista"));
    //Si lista peliculas es nul, se habrá borrado con éxito
    if(listaPeliculas == null)
    {
        alert("Listado borrado con éxito");
        lista.className = "oculto";

        //Eliminamos tambien los nodos elementos de tipo li que se habian creado
        //Mientras que siga existiendo un primer nodo hijo de lista
        while(lista.firstChild)
        {
            //Se eliminara ese nodo hijo
            lista.removeChild(lista.firstChild);
        }
    }else{
        alert("No se ha podido borrar el listado");
    }
});
