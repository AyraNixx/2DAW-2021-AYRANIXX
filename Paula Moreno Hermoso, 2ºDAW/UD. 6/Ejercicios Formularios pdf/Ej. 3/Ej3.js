function validar(){
    //Obtenemos las dos cadenas de texto
    let text1 = document.getElementById('text1').value;
    let text2 = document.getElementById('text2').value;

    //Utilizamos el metodo split para transformar la cadena en un array
    //Luego, empleamos sort para ordenar los elementos (si no indicamos nada
    //lo ordena alfabeticamente).
    //Por último, convertimos el array a cadena con toString
    text1 = text1.split("").sort().toString();
    text2 = text2.split("").sort().toString();

    //Con un condicional comprobamos si las cadenas coinciden
    if(text1 == text2){
        alert("ANAGRAMA!");
    }else{
        alert("NO ANAGRAMA!");
    }
}