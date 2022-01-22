//  AL CARGAR LA PÁGINA
window.onload = function()
{
    //Creamos una variable que recibe los va
    let visitas = localStorage.getItem("visitas");

    //Si visitas es nulo, lo igualamos a 0
    if(visitas == null)
    {
        visitas = 0; 
    }
    //En caso contrario, se suma uno
    else
    {
        visitas++;
    }
    //Re-establecemos el valor para visitas
    localStorage.setItem("visitas", visitas);
    //Mostramos en la pantalla las visitas
    document.getElementById("visitas").innerText = visitas;

    //Añadimos un eventListener al boton eliminar
    document.getElementById("eliminar").addEventListener("click", function()
    {
        //Con la funcion localStorage, eliminamos los registros del localStorage
        localStorage.clear();
        //Mostramos en la pantalla que las visitas son 0 despues de eliminar las cookies
        document.getElementById("visitas").innerText = 0;
        //Re-establecemos el valor con 0
        localStorage.setItem("visitas", 0);
    });
}





