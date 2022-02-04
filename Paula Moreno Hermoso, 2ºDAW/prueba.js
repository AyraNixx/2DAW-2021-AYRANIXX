//Teniendo un array con datos:
var ganadores = ['Luis',120,'Ernesto',87,'Vane',145];
//creamos una variable que almacenara las cadenas que contienen el arreglo
var strGanadores='';
//mediante un ciclo concatenamos los valores del arreglo a la cadena.
for(var i=0;i<ganadores.length;i++)
{
strGanadores+=ganadores[i]+",";  //agregamos un carácter ‘,’ (coma) como separador de los elementos en la cadena
}
//Quitamos el ultimo carácter, que es una coma.
strGanadores = strGanadores.substr(0, strGanadores.length-1);
//Generamos el tiempo de duración que tendrá la cookie
var hoy = new Date();    //Fri May 09 2014 10:43:00 GMT-0500 (Hora de verano central (México))
var unAnio  = 365*24*60*60*1000; // establecer la duración que tendra la cookie 365 dias * 24 horas *60 minutos * 60 segundos * 1000 milisegundos (1 año en milisegundos)
var duracion = hoy.getTime() + unAnio; //la suma de la fecha de hoy en ms ´un año en ms, como resultado = Fri May 09 2024 10:43:00 GMT -0500 en ms
hoy.setTime(duracion);
var expira = hoy.toUTCString();
//guardamos la cookie con los datos del arreglo y que expirara dentro de un año
document.cookie = strGanadores+";expires="+expira;

//Para recuperar la informacion
ganadores = document.cookie.split(",");  //obtenemos los elementos que se separaron por coma, retorna un arreglo
for(var i=0;i<ganadores.length; i++)
{
document.getElementById(i+1).innerHTML=ganadores[i];
}