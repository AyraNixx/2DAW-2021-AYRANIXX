//Creamos una funcion que va a recibir dos fechas
//como parametros
function diferencia(fecha1, fecha2)
{
    //Creamos una variable llamada diferencia donde calculamos
    //la diferencia entre las dos fechas.
    //Si restamos dos date, nos va a salir el resultado en 
    //milisegundos por lo que deberemos de dividirlo por 
    //86400000 para pasar de milisegundos a dias.
    //Utilizamos Math.abs para que nos retorne el valor 
    //absoluto en caso de que nos de un resultado negativo
    //Empleamos Math.ceil para redondear para arriba el resultado
    let diferencia = Math.ceil(Math.abs(fecha1 - fecha2)/86400000);
    return diferencia;
}
//Funcion con la que establecemos el formato para ver la fecha
function format (fecha)
{
    return fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear();
}

//Definimos dos variables de tipo Date
let fecha1 = new Date(2021, 11, 04);
let fecha2 = new Date(2021, 01, 29);


alert("Diferencia de dias entre " + format(fecha1) + " y " + format(fecha2) + "--> "
+ diferencia(fecha1, fecha2) + " días.");