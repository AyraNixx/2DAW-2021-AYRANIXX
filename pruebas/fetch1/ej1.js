
window.onload=function()
{
    fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
    .then(res => {
        if(res.status == 200){
            res.json()
            .then(data => {console.log(data)});
        }else{
            console.log("El estado no es 200, es " + res.status);
        }
    })
}