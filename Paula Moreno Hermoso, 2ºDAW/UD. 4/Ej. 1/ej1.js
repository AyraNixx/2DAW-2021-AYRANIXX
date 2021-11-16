function cambiarImagen()
{
    //Usamos document.getElementById() para indicar que el elemento con el 
    //id img1 pasara a tener su src por el siguiente
    document.getElementById('img1').src = "https://i.pinimg.com/564x/f7/4e/72/f74e729aee122912693029a4ae2d6ea3.jpg";
}
function volverImagen(){
    //Hacemos lo mismo que en el de arriba pero poniendo el mismo url que la 
    //imagen inicial
    document.getElementById('img1').src = "https://i.pinimg.com/564x/40/48/8d/40488d554f0b12b6610607acc8ad3db2.jpg";
}