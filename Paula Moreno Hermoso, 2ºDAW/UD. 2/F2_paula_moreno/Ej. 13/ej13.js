//Creamos una variable que es con la que vamos a nombrar la otra variable
let nombreVariable = prompt("Ingrese el nombre para la variable: ");
//Definimos la variable
let variable = 123;

//Indicamos que [nombreVariable] corresponde a variable, de esta manera
//estaríamos definiendo el nombre de la variable
this[nombreVariable] = variable;

//Usamos un alert para mostrar el valor de variabler
alert("'variable' vale --> " + variable);
//Comprobamos si llamando a this[nombreVariable nos saca el valor de variable]
alert("Prueba de que '" + nombreVariable + "' es 'variable' pero con el nombre que le hemos dado: " + this[nombreVariable]);
