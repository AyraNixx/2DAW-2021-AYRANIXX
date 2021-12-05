

//Creamos la función cambiar
function cambiar(){
    //Obtenemos los select
    let select1 = document.getElementById('select1');
    let select2 = document.getElementById('select2');
    //Si el valor de la opcion seleccionada (con selectedIndex sacamos su posición en el array)
    //coincide con Alicante
    if(select1.options[select1.selectedIndex].value == "Alicante"){
        
        //Modificamos el HTML para cambiar la opcion de Ninguna por otras tres
        select2.innerHTML = "<option>Alicante Central</option><option>Elche</option><option>Orihuela</option>";

    //Hacemos lo mismo en el resto
    }else if (select1.options[select1.selectedIndex].value == "Castellón"){

        select2.innerHTML = "<option>Castellón Capital</option><option>Oropesa</option><option>Vinaroz</option>";

    }else if (select1.options[select1.selectedIndex].value == "Valencia"){

        //Aquí la única diferencia es que ponemos como preseleccionada la opcion Mislata con selected = 'true'
        select2.innerHTML = "<option>Valencia Capital</option><option>Torrent</option><option selected = 'true'>Mislata</option>";

    }else if (select1.options[select1.selectedIndex].value == "Ninguna"){
        select2.innerHTML = "<option>Ningunal</option>";
    }
}
// Cuando se haya cargado la pagina
window.onload=function (){
    let select1 = document.getElementById('select1');
    //Cuando se cambie la opcion del select, se llamará a la funcion cambiar
    select1.onchange=cambiar;
}


//OTRA FORMA MÁS LARGA 


/*function cambiar(){
    //Obtenemos los select
    let select1 = document.getElementById('select1');
    let select2 = document.getElementById('select2');

    if(select1.options[select1.selectedIndex].value == "Alicante"){
        
        while (select2.firstChild)
        {
            select2.removeChild(select2.firstChild);
        }
        
        let opcion1 = document.createElement("option");
        opcion1.textContent = "Alicante Central";
        let opcion2 = document.createElement("option");
        opcion2.textContent = "Elche";
        let opcion3 = document.createElement("option");
        opcion3.textContent = "Orihuela";

        select2.appendChild(opcion1);
        select2.appendChild(opcion2);
        select2.appendChild(opcion3);

    }else if (select1.options[select1.selectedIndex].value == "Castellón"){
    
        while (select2.firstChild)
        {
            select2.removeChild(select2.firstChild);
        }

        let opcion1 = document.createElement("option");
        opcion1.textContent = "Castellón Central";
        let opcion2 = document.createElement("option");
        opcion2.textContent = "Oropesa";
        let opcion3 = document.createElement("option");
        opcion3.textContent = "Vinaroz";

        select2.appendChild(opcion1);
        select2.appendChild(opcion2);
        select2.appendChild(opcion3);

    }else if (select1.options[select1.selectedIndex].value == "Valencia"){

        while (select2.firstChild)
        {
            select2.removeChild(select2.firstChild);
        }

        let opcion1 = document.createElement("option");
        opcion1.textContent = "Valencia Central";
        let opcion2 = document.createElement("option");
        opcion2.textContent = "Torrent";
        let opcion3 = document.createElement("option");
        opcion3.textContent = "Mislata";
        opcion3.setAttribute("selected", "true");

        select2.appendChild(opcion1);
        select2.appendChild(opcion2);
        select2.appendChild(opcion3);

    }else if (select1.options[select1.selectedIndex].value == "Ninguna"){
        while (select2.firstChild)
        {
            select2.removeChild(select2.firstChild);
        }

        let opcion1 = document.createElement("option");
        opcion1.textContent = "Ninguna";

        select2.appendChild(opcion1);

    }
}*/