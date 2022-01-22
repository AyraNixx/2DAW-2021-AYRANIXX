
/********************************  FUNCIONES COOKIES YA ESTABLECIDAS *******************************/

    //FUNCION PARA CREAR COOKIE
    function setCookie(nombre, valor)
    {
        //Con max-age indicamos el tiempo de expiración de la cookie
        //Con path la ruta con la que es posible ver la cookie
        document.cookie = nombre + "=" + valor + "; max-age=6311520000; path=/";
    }


    //FUNCION PARA VER COOKIE
    function getCookie(nombreCo) {
        let nombre = nombreCo + "=";
        //Utilizamos split para convertir la cadena en un array, indicando el separador es ;
        let listaC = document.cookie.split(';');
        //Recorremos el array
        for(let i = 0; i < listaC.length; i++) {
            //Creamos una nueva variable para almacenar la cadena que se encuentre en esa posicion
            //del array
            let cookie = listaC[i];
            
            //si 'nombre' es localizado en la posicion 0
            if (cookie.indexOf(nombre) == 0) 
            {
                //se devolvera la subcadena que existe a partir de la ultima posicion
                //de 'nombre' hasta la ultima posicion de 'cookie'
                return cookie.substring(nombre.length, cookie.length);
            }
        }
        return "";
    }


    //FUNCION PARA BORRAR COOKIE
    function deleteCookie(nombreCo) {
        document.cookie = nombreCo + "=; max-age=0";
    }




/********************************  AL CARGAR LA PÁGINA ***************************************/

window.onload = function()
{
    let cookie = getCookie("visitas");
	// Si cookie no tiene ningun valor, se le establece como valor, 0
	if(cookie===""){
		cookie="0";
    //Si tiene un valor, se le suma uno al valor que ya tenía
	}else{
		cookie=(parseInt(cookie)+1).toString();	
	}

    //Indicamos que visitas tenga el valor de cookie
	setCookie("visitas",cookie);

    //Mostramos el valor de visitas
    document.getElementById("visitas").innerHTML=cookie; 

    //¿¿¿¿¿¿¿¿¿¿¿NO FUNCIONA???????????
    //Obtenemos el elemento con id eliminar y le añadimos un EventListener al hacer click
    document.getElementById("eliminar").addEventListener('click', deleteCookie("visitas"));
}



