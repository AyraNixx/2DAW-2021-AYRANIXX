//Creamos una variable llamada aleatorio de la que sacaremos
//el numero aleatorio
let aleatorio =Math.round((Math.random() * 9 - 0) + 1);  
//Definimos otra variable llamada num que guardara el numero
//que se ingrese
let num = prompt("Ingrese un número: ");

//Creamos un condicional para comprobar que los numeros coinciden
if(num == aleatorio){
    alert("Coinciden. Buen trabajo!");
}else{
    alert("No coinciden");
    }