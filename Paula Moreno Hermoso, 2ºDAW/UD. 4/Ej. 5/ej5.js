function obtenerURL()
{
   //Utilizamos alert para mostrar una mini ventanita en la que nos aparezca la url de la imagen.
   //Para obtener la url, referenciamos el objeto con getElementById, en este caso, el id de la imagen
   //es img y luego sacamos su url al poner src.
   alert("URL de la foto: " + document.getElementById('img').src);
}