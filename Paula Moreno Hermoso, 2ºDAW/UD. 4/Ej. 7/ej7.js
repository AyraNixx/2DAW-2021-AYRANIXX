let letra ='';
let anchura = window.innerWidth() - div.width();
let distanciaX = 20;
let distanciaY = 20;
function mover(event)
{
    let tecla = event.keyCode;

    if(tecla == 39){
        caja.style.marginRight = distanciaX + 20 + "px";
        distanciaX += 20;
    }

}





function iniciar()
{
    window.onkeydown = mover;
}

window.onload = iniciar();