function convertir()
{
    //Obtenemos el valor que se ha seleccionado (celsius o farenheit)
    let temp = document.conversion.temp.value;
    //Obtenemos el el valor que queremos pasar a celsius o a farenheit
    let valor = document.conversion.valor.value;
    //Creamos una variable llamada celsius
    let celsius = "celsius";
    //Creamos una variable llamada result
    let result;

     //Miramos si temp es celsius
    if(temp == celsius)
    {
        //Si temp es celsius, obtenemos su conversion a farenheit
        result =((valor*9)/5)+32;
        //Devolvemos la conversion
        document.conversion.resultado.value = result;
    }
    else
    {
        //Si temp es farenheit, obtenemos su conversion a celsius
        result = ((valor-32)/9) * 5;
        //Devolvemos la conversion de farenheit a celsius
        document.conversion.resultado.value = result;
    }
}