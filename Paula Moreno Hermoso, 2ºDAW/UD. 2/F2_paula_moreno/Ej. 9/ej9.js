//Definimos dos variables de tipo Date
let fechaActual = new Date();
let fechaNavidad = new Date(2021, 12, 24);
//Creamos una variable llamada diferencia donde calculamos
//la diferencia entre las dos fechas.
//Si restamos dos date, nos va a salir el resultado en 
//milisegundos por lo que deberemos de dividirlo por 
//86400000 para pasar de milisegundos a dias.
//Utilizamos Math.abs para que nos retorne el valor 
//absoluto en caso de que nos de un resultado negativo
//Empleamos Math.ceil para redondear para arriba el resultado
let diferencia = Math.ceil(Math.abs(fechaActual - fechaNavidad)/86400000);

//Mostramos el resultado en la pagina.
document.write(diferencia);