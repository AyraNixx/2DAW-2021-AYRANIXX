//Establecemos a que url realizar la fetch
fetch("https://pokeapi.co/api/v2/pokemon/ditto/")
    //Si el estatus de la respuesta es 200
    .then(response => {
        if(response.status==200)
        {
            //Pasamos la respuesta a formato JSON 
            response.json()
            //Mostramos la respuesta por consola
            .then(results => console.log(results))
        //Si el estado no es 200, se muestra el estado de la respuesta
        }else{
            console.log("El estado no es 200" + response.status)
        }
    });