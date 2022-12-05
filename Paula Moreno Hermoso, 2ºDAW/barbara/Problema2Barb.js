// "use strict";

// //  CLASE CLIENTE
// class Cliente {

//     //Propiedades clase Cliente
//     nombre;
//     apellidos;
//     dni;
//     edad;
    
//     //Constructor
//     constructor(nombre, apellidos, dni, edad) {
        
//         this.nombre = nombre;
//         this.apellidos = apellidos;
//         this.dni = dni;
//         this.edad = edad;
//     }
// }











// // CLASE HABITACIÓN
// class Habitacion {

//     //Propiedades    
//     ciudadHotel;
//     numCamas;
//     cliente;

//     //Constructor
//     constructor(ciudadHotel, cliente) {
//         this.ciudadHotel = ciudadHotel;
//         this.cliente = cliente;

//         //Si la ciudad es Puerto1 o Puerto2
//         if(this.ciudadHotel == ("Puerto1" || "Puerto2"))
//         {
//             //El número de camas es 3
//             this.numCamas = 3;

//         //Si la ciudad es Puerto3
//         }else if(this.ciudadHotel == "Puerto3")
//         {
//             //El numero de camas es 4
//             this.numCamas = 4;
//         }
//     }



//     //Método para comprobar edad
//     edadCliente(cliente)
//     {
//         //Si la edad del cliente está entre 18 y 25 (inclusives) y la ciudad es Puerto 1
//         if(this.ciudadHotel == "Puerto1" && cliente.edad >= 18 && cliente.edad <= 25)
//         {
//             //Devuelve true.
//             return true;

//         //Si la edad del cliente está entre 26 y 35 (inclusives) y la ciudad es Puerto 2
//         }else if(this.ciudadHotel == "Puerto2" && cliente.edad >= 26 && cliente.edad <= 35)
//         {
//             //Devuelve true
//             return true;

//         //Si la edad del cliente está entre 36 y 80 (inclusives) y la ciudad es Puerto 3
//         }else if(this.ciudadHotel == "Puerto3" && cliente.edad >= 36 && cliente.edad <= 80)
//         {
//             //Devuelve true;
//             return true;
        
//         //Si no cumple ninguna de las anteriores condiciones
//         }else{

//             //Devuelve false;
//             return false;
//         }
//     }



//     //Método para dar de alta un cliente
//     darAlta(nuevoCliente)
//     {
//         //Comprobamos la edad del cliente
//         if(edadCliente(nuevoCliente))
//         {
//             //Si aún hay habitaciones disponibles (10 habitaciones por cada hotel)
//             if()


//         }else{
//             //Si no cumple los requisitos de edad
//             return false;
//         }

//     }





//     //Funcion para dar de baja un cliente
//     darBaja(dniCliente)
//     {

//     }







//     listaClientes() {
//         for (let i = 0; i < this.cliente.length; i++) {
//             document.write("Nombre y apellidos: ")
//             document.write(this.cliente[i].nombre);
//             document.write(" ");
//             document.write(this.cliente[i].apellidos);
//             document.write("; DNI: ");
//             document.write(this.cliente[i].dni);
//             document.write("Edad:");
//             document.write(this.cliente[i].edad);

//         }
//     }

//     altaCliente(newCliente) {
//         if (this.cliente.length >= 3) {
//             document.write("No se puede meter a nadie más, habitación llena");
//             return false;
//         } else {
//             //Recorremos el array de clientes para comprobar que no haya
//             //otro cliente con el mismo dni
//             for (let i = 0; i < this.cliente.length; i++) {
//                 //Si se detecta un alumno con el mismo DNI, se devuelve false
//                 //y no se introduce el alumno
//                 if (this.cliente[i].dni === newCliente.dni) {
//                     document.write("<br/>No se puede introducir este cliente, ya hay otro con el mismo DNI.<br/>");
//                     return false;
//                 }
//             }

//             //En caso de que no haya un cliente con el mismo dni, 
//             //se mete el nuevo cliente en el array
//             this.cliente.push(newCliente);
//         }
//     }
//     bajaCliente(dni) {
//         //Si la longitud del array de clientes es distinta de 0,
//         //significa que hay clientes en la habitación a los 
//         //que podemos echar
//         if (this.cliente.length !== 0) {
//             //Recorremos el array de clientes
//             for (let i = 0; i < this.cliente.length; i++) {
//                 //Comprobamos cada cliente para encontrar 
//                 //aquel con el mismo dni
//                 if (this.cliente[i].dni === dni) {
//                     //Si lo encontramos, usamos la funcion splice
//                     //para eliminarlo del array
//                     if (i === 0) {
//                         this.cliente.splice(0, 1);
//                     } else {
//                         this.cliente.splice(i, i);
//                     }
//                 }
//             }
//         } else {
//             document.write("No hay clientes en esta habitación");
//         }

//     }
// }











// class Hotel {

//     //Porpiedades
//     ciudad;
//     numHabitacion; //Array


//     //Constructor
//     constructor(ciudad, numHabitacion) {
//         this.ciudad = ciudad;
//         this.numHabitacion = numHabitacion;
//     }

//     mostrarClientes() {
//         //Recorremos el array de habitaciones
//         for (let i = 0; i < this.numHabitacion.length; i++) {
//             //si el numero de habitacion introducido corresponde con 
//             //uno de las habitaciones que tenemos, se llama a la
//             //funcion listaAlumnos de la clase Alumno
//             document.write("<br/>Habitación nº " + this.numHabitacion[i].numCamas + "<br/>--------------------<br/>");
//             this.numHabitacion[i].listaClientes();
//             document.write(("<br/><br/>"));

//         }

//     }
// }

// //Creamos una función main a la que se llamará para ejecutar el código.
// function main() {

//     //Creamos 8 objetos Cliente
//     let cliente1 = new Cliente("Pepe", "Primero", 1, 20);
//     let cliente2 = new Cliente("Juan", "Segundo", 2, 27);
//     let cliente3 = new Cliente("Lola", "Tercero", 3, 30);
//     let cliente4 = new Cliente("Antonio", "Cuarto", 4, 60);
//     let cliente5 = new Cliente("Maria", "Quinto", 5, 40);
//     let cliente6 = new Cliente("Pedro", "Sexto", 6, 19);
//     let cliente7 = new Cliente("Alejandro", "Séptimo", 7, 34);
//     let cliente8 = new Cliente("Ana", "Octavo", 8, 70);

//     //Creamos tres clases Habitacion para hoteles
//     let room1 = new Habitacion(1, [cliente1, cliente2, cliente3]);
//     let room2 = new Habitacion(2, [cliente4, cliente5]);
//     let room3 = new Habitacion(3, [cliente6]);
//     let room11 = new Habitacion(1, [cliente3, cliente6]);
//     let room20 = new Habitacion(1, [cliente8, cliente7, cliente6, cliente2]);

//     //Creamos tres objetos de la clase Hotel 3
//     let hotel1 = new Hotel("Puerto 1", [room1, room2, room3]);
//     let hotel2 = new Hotel("Puerto 2", [room11, room2, room3]);
//     let hotel3 = new Hotel("Puerto 3", [room11, room3, room20, room2]);


// }