//Creamos una funcion que recibe como parametro una matriz
function diasYmes (date)
{
    //Creamos un array con los nombres de los meses. Recordemos 
    //que en un array la posicion inicial es 0, por lo tanto
    //el array va de 0 a 11.
    let nombreMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo",
    "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    //Existe una peculiaridad con la función getDate y es que va a coger
    //el mes de 1 a 12 mientras que lo normal es que JavaScript lea los
    //meses de 0 a 11 (esto lo aprovecharemos para sacar el nombre del 
    //mes de nuestro array)
    return alert ("Mes: " + nombreMes[date.getMonth()] + "  " + "Días que tiene: " + date.getDate());
}
//Creamos un objeto de la clase Date al que le indicamos
//el año y el mes y para el día ponemos 0, ¿por qué?
//Porque en JavaScript el rango de días va de 1 a 31
//así que al indicar 0, nos devolverá el último
//día del mes, al ser el anterior
let date = new Date(2021, 11, 0);
diasYmes(date);