"use strict";



//CLASE CLIENTE
class Cliente {
    //Propiedades
    dni;
    nombre;
    apellidos;
    edad;

    //Constructor
    constructor(dni, nombre, apellidos, edad) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }

    toString() {
        return "Cliente: " + this.nombre + " " + this.apellidos +
            "<ul><li>DNI: " + this.dni + "</li><li>Edad: " + this.edad + " años.</li></ul>";
    }
}






//CLASE HABITACION
class Habitacion {
    //Propiedades
    idHotel;
    idHabitacion;
    numCamas;
    cliente;

    //Constructor
    constructor(idHotel, idHabitacion, cliente) {
        this.idHotel = idHotel;
        this.idHabitacion = idHabitacion;
        this.cliente = cliente;

        //Si idHotel es 1 o 2, significa que la ciudad es Puerto1 o Puerto2
        //respectivamente, por lo que cada habitacion tendrá 3 camas.
        if (this.idHotel == 1 || this.idHotel == 2) {
            this.numCamas = 3;

            //Si idHotel es 3, es ciudad Puerto 3 y cada habitacion tendrá 4 camas
        } else if (this.idHotel == 3) {
            this.numCamas = 4;
        }
    }

    toString() {
        return "<li>Habitación: " + this.idHabitacion +
            "<ul><li>n.º de camas: " + this.numCamas +
            "</li><li>" + this.cliente.toString() + "</li></ul></li>";
    }
}








//CLASE HOTEL
class Hotel {
    //Propiedades
    idHotel;
    ciudad;
    habitaciones; //Array

    //Constructor
    constructor(ciudad, habitaciones) {
        this.ciudad = ciudad;
        this.habitaciones = habitaciones;

        //Dependiendo de la ciudad, el hotel tendrá un id u otro
        switch (this.ciudad) {
            case "Puerto1": this.idHotel = 1; break;
            case "Puerto2": this.idHotel = 2; break;
            case "Puerto3": this.idHotel = 3; break;
        }
    }

    //Método para comprobar si un cliente cumple con la edad permitida
    comprobarEdad(edadCliente) {
        //Si la edad del cliente está entre 18 y 25 (inclusives) y la ciudad es Puerto 1
        if (this.idHotel == 1 && edadCliente >= 18 && edadCliente <= 25) {            
            //Devuelve true
            return true;

        //Si la edad del cliente está entre 26 y 35 (inclusives) y la ciudad es Puerto 2
        } else if (this.idHotel == 2 && edadCliente >= 26 && edadCliente <= 35) {
        //Devuelve true
            return true;
            
        //Si la edad del cliente está entre 36 y 80 (inclusives) y la ciudad es Puerto 3
        } else if (this.idHotel == 3 && edadCliente >= 26 && edadCliente <= 80) {
            //Devuelve true
            return true;
        } else {
            false;
        }
    }

  

    //Método para dar de alta un cliente
    darAlta(nuevoCliente) {
        //Comprobamos que cumpla con los requisitos de edad
        if (this.comprobarEdad(nuevoCliente.edad)) {
            //Si cumple con los requisitos, vemos si hay una habitacion
            //disponible (en cada hotel hay 10 habitaciones)
            if (this.habitaciones.length < 10) {
                //Añadimos un nuevo objeto habitacion para este cliente
                this.habitaciones.push(new Habitacion(this.idHotel,
                    (this.habitaciones.length + 1), nuevoCliente));
            }
            return true;

        //Si no los cumple, miramos si puede ser dado de alta en otro Hotel
        } else {
            //Informamos al cliente
            return false;
        }

    }

    //Método para dar de baja un cliente
    darBaja(dniCliente, idHabitacion) {
        let baja = true;
        //Vemos si existe un cliente que coincida con el dni
        this.habitaciones.forEach(habitacion => {
            //En caso de que haya un cliente con ese dni ocupando la habitacion
            //indicada
            if (idHabitacion == habitacion.idHabitacion && dniCliente == habitacion.cliente.dni) {
                //Sacamos la posicion en el array de la habitacion
                let pos = this.habitaciones.indexOf(habitacion);

                //Eliminamos la habitacion del array
                this.habitaciones.splice(pos, 1);

                baja = true;
            } else {
                baja = false;
            }
        });

        //Si baja es true
        if (baja) {
            //Mostramos la lista de ese hotel
            document.write(this.toString());
            //Si es false, ha habido algún problema al dar de baja
        } else {
            document.write("<h5 style='background: red;'>No se ha podido dar de baja al cliente</h5>");
        }
    }



    //Metodo para mostrar todas las habitaciones del hotel y los clientes que la ocupan
    listarHabitaciones() {
        let habitaciones = "";
        this.habitaciones.forEach(habitacion => {
            habitaciones = habitaciones + habitacion.toString() + "<br>";
        });

        return habitaciones;
    }

    toString() {
        return "<ul><li>Hotel: " + this.idHotel + "<li>ciudad: " + this.ciudad + "</li><ul>"
            + this.listarHabitaciones() + "</ul></li></ul><hr>";
    }
}



//Funcion que mete al cliente en el hotel que le corresponde según la edad
//si se pudiese
function hotelCorrespondiente(hotel1, hotel2, hotel3, cliente)
{
    if(hotel1.darAlta(cliente))
    {
        document.write(hotel1.toString());
        return true;
    }else if(hotel2.darAlta(cliente))
    {
        document.write(hotel2.toString());
        return true;
    }else if(hotel3.darAlta(cliente)){
        document.write(hotel3.toString());
        return true;
    }else{
        return false;
    }
}



//Función que se llamará para ejecutar el código
function main() {
    //Creamos 8 objetos Cliente
    let cliente1 = new Cliente(1, "Barbara", "Perez", 21);
    let cliente2 = new Cliente(2, "Manolito", "Moreno", 23);
    let cliente3 = new Cliente(3, "Antonio", "Flores", 24);
    let cliente4 = new Cliente(4, "Pepe", "Martinez", 41);
    let cliente5 = new Cliente(5, "María del Carmen", "Montoya", 35);
    let cliente6 = new Cliente(6, "Eustaquia", "Ramirez", 57);
    let cliente7 = new Cliente(7, "Alfonso", "Mandrique", 77);
    let cliente8 = new Cliente(8, "Dolores", "Bellerin", 61);
    let cliente9 = new Cliente(9, "Lina", "Sanchez", 35);

    let cliente10 = new Cliente(10, "Mario", "Messi", 20);

    //Creamos tres clases Habitacion para hoteles
    let room11 = new Habitacion(1, 1, cliente1);
    let room12 = new Habitacion(1, 2, cliente2);
    let room13 = new Habitacion(1, 3, cliente3);

    let room21 = new Habitacion(2, 1, cliente4);
    let room22 = new Habitacion(2, 2, cliente5);
    let room23 = new Habitacion(2, 3, cliente6);

    let room31 = new Habitacion(3, 1, cliente7);
    let room32 = new Habitacion(3, 2, cliente8);
    let room33 = new Habitacion(3, 3, cliente9);

    //Creamos tres objetos de la clase Hotel 3
    let hotel1 = new Hotel("Puerto1", [room11, room12, room13]);
    let hotel2 = new Hotel("Puerto2", [room21, room22, room23]);
    let hotel3 = new Hotel("Puerto3", [room31, room32, room33]);

    //Probamos el dar de alta al cliente 10 en el hotel de Puerto 2
    //Si la funcion darAlta nos devuelve false
    if(hotel1.darAlta(cliente10))
    {
        document.write(hotel1.toString());
    }else{
        //Vemos si se puede meter en otro de los 3 hoteles.
        //Si no se puede
        if(!hotelCorrespondiente(hotel1, hotel2, hotel3, cliente10))
        {
            //Nos devuelve un mensaje diciendo que no cumple con lo establecido
            document.write("No cumple con los requisitos de ningún Hotel<hr>");
        }
    }

    //Damos de baja al cliente6 del hotel 1 que se encuentra en la habitacion 3
    hotel1.darBaja(cliente3.dni, 3);

    // document.write(hotel1.toString());
    // document.write(hotel2.toString());
    // document.write(hotel3.toString());
}

main();