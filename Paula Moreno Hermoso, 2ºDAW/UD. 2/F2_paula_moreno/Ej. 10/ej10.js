 //Creamos una funcion sencilla que recibe como parametro
 function operacion(signo)
 {
     //Creamos dos variables que van a recibi
     let num1 = document.operaciones.num1.value;
     let num2 = document.operaciones.num2.value;
     let result = eval(num1 + signo + num2);
     document.operaciones.resultado.value = result
 }