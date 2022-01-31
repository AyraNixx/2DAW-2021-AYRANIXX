function mostrarPokemon(enlace)
{
    //Creamos un nuevo elemento de tipo img
    let imagen = document.createElement("img");
    //Se le otorga un atributo src que recibe el enlace 
    imagen.setAttribute("src", enlace);
    //Se le añade a body como un nuevo nodo hijo 
    document.getElementById("imagenes").appendChild(imagen);
}

//Creamos la funcion buscar
function buscar()
{
    nombrePokemon();
    //Creamos una variable que va a obtener el nombre del pokemon introducido 
    //en el input
    //Tambien le decimos que ponga todas las letras en minusculas para que sea valido
    let pokemon = document.getElementById("poke").value.toLowerCase();
    //Creamos otra variable con la cadena que nos llevara a la api del pokemon 
    //que queremos buscar
    let enlace = "https://pokeapi.co/api/v2/pokemon/" + pokemon;

    //Utilizamos fetch 
    fetch(enlace)
        //Pasamos la respuesta obtenida a formato JSON
        .then(res => res.json())
        .then(data => {
            //Mostramos los valores de la api de ese pokemon por consola
            console.log(data);
            //console.log(data);
            //Usamos el método Object.keys que nos devuelve un array de las propiedades
            //names de un objeto. Luego, con el metodo filter, indicamos la condicion que
            //deben de cumplir los elementos para guardarlos en el array.
            //En este caso, creamos una funcion flecha que nos va a devolver todos los
            //elementos que incluyan la palabra "front", para ello usamos el metodo
            //includes que determina si una cada de texto se encuentra dentro de otra.
            let fotos = Object.keys(data.sprites).filter(foto => foto.includes("front"));
            //Una vez obtenido el array, lo recorremos.
            for(let i=0;i<fotos.length;i++)
            {
                //Obtenemos los enlaces 
                let enlace = data.sprites[fotos[i]];
                //Si el enlace no es nulo, llamamos a la funcion mostrarPokemon
                if(enlace!=null)
                {
                   mostrarPokemon(enlace);
                }else{
                    alert("No hay enlace");
                }
            }
        })
        .catch(err => console.error("Se ha detectado el siguiente fallo: \n\t'" + err + "'"));
        //Para que no se vayan acumulando las imagenes, cada vez que pulsamos el boton,
        //usamos la propiedad innerHTML para asignar el contenido del div imagenes a nada 
        //y asi no se acumulen imagenes.
        document.getElementById("imagenes").innerHTML = '';
        console.clear();
}

//Funcion para que el nombre del pokemon aparezca en mayuscula en la pagina
function nombrePokemon() 
{
    let nombre = document.getElementById("pokeTitulo");
    nombre.textContent = document.getElementById("poke").value;
    nombre.textContent = nombre.textContent.charAt(0).toUpperCase().concat(nombre.textContent.substring(1));
}