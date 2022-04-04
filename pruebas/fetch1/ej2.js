let search = document.getElementById("buscar");

search.addEventListener("click", ()=>{
    let pokemon = document.getElementById("poke").value;
    let enlace = 'https://pokeapi.co/api/v2/pokemon/' + pokemon;

    fetch(enlace)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        let fotos = Object.keys(data.sprites).filter(foto => foto.includes("front"));

        for(let i = 0; i < fotos.length; i++)
        {
            crearFotos(data.sprites[fotos[i]]);
        }
    })
});

function crearFotos(foto)
{
    let img = document.createElement("img");
    img.setAttribute("src", foto);
    document.getElementById("imagenes").appendChild(img);

}