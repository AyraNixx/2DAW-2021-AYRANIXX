"use strict";


/* 
    Si entendemos el enunciado como que la gestion de los alumnos se hace entre residencia,
    para saber qué alumno queremos modificar, eliminar o insertar tendremos que saber
    en qué residencia se encuentra, cuál es su habitación y quién es el alumno (código
    de residencia, número de habitación y dni del alumno).
*/




//---------------------------------------- CLASE ALUMNO -----------------------------------------------------
//
//
//
class Alumno {
    //Constructor
    constructor(nombre, apellidos, dni) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
    }

    //Funcion que modifica todos los campos
    modificar(nuevoNombre, nuevosApellidos, nuevoDNI) {
        this.nombre = nuevoNombre;
        this.apellidos = nuevosApellidos;
        this.dni = nuevoDNI;
    }

}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//---------------------------------------- CLASE HABITACIÓN ---------------------------------------------------
//
//
//
class Habitacion {
    //Constructor
    constructor(numRoom, alumnos) {
        this.numRoom = numRoom;
        this.alumnos = alumnos;
    }
    //
    //
    //
    //Función que muestra todos los alumnos que se encuentran dentro de una habitación
    listaAlumnos() {
        //Recorre el array de alumnos y va mostrando los nombres, apellidos y DNI de 
        //cada alumno que haya en la habitación
        for (let i = 0; i < this.alumnos.length; i++) {
            document.write("Nombre y apellidos: ")
            document.write(this.alumnos[i].nombre);
            document.write(" ");
            document.write(this.alumnos[i].apellidos);
            document.write("; DNI: ");
            document.write(this.alumnos[i].dni);
            document.write("<br>");
        }
    }
    //
    //
    //
    //Funcion que inserta un Alumno al array de alumnos
    insertarAlumno(newAlumno) {
        //Si la longitud del array es 3 o mayor, aparece un mensaje indicando
        //que no se puede meter a nadie más porque la habitación está llena
        if (this.alumnos.length >= 3) {
            document.write("No se puede meter a nadie más, habitación llena");
            return false;
        } else {
            //Recorremos el array de alumnos para comprobar que no haya
            //otro alumno con el mismo dni
            for (let i = 0; i < this.alumnos.length; i++) {
                //Si se detecta un alumno con el mismo DNI, se devuelve false
                //y no se introduce el alumno
                if (this.alumnos[i].dni === newAlumno.dni) {
                    document.write("<br/>No se puede introducir este alumno, ya hay otro con el mismo DNI.<br/>");
                    return false;
                }
            }

            //En caso de que no haya un alumno con el mismo dni, 
            //se mete el nuevo alumno en el array
            this.alumnos.push(newAlumno);
        }
    }
    //
    //
    //
    //Funcion que elimina un alumno del array de alumnos
    eliminarAlumno(dni) {
        //Si la longitud del array de alumnos es distinta de 0,
        //significa que hay alumnos en la habitación a los 
        //que podemos echar
        if (this.alumnos.length !== 0) {
            //Recorremos el array de alumnos
            for (let i = 0; i < this.alumnos.length; i++) {
                //Comprobamos cada alumno para encontrar 
                //aquel con el mismo dni
                if (this.alumnos[i].dni === dni) {
                    //Si lo encontramos, usamos la funcion splice
                    //para eliminarlo del array
                    if (i === 0) {
                        this.alumnos.splice(0, 1);
                    } else {
                        this.alumnos.splice(i, i);
                    }
                }
            }
        } else {
            document.write("No hay alumnos en esta habitación");
        }

    }
    //
    //
    //
    //Funcion para modificar un alumno
    modificarAlumno(dni, nuevoNombre, nuevosApellidos, nuevoDNI) {
        //Recorremos el array de alumnos
        for (let i = 0; i < this.alumnos.length; i++) {

            if (this.alumnos[i].dni === dni) {
                //Si lo encontramos, llamamos a la funcion
                //modificar de la clase Alumno
                this.alumnos[i].modificar(nuevoNombre, nuevosApellidos, nuevoDNI);
            }
        }
    }
    //
    //
    //
    //Funcion que encuentra y saca un alumno
    encontrarAlumno(dni) {
        let alumno;

        //Recorremos el array de alumnos
        for (let i = 0; i < this.alumnos.length; i++) {

            //Si encontramos al alumno con el dni que hemos introducido
            if (this.alumnos[i].dni === dni) {
                //Lo guardamos
                alumno = this.alumnos[i];
            }
        }

        //Devolvemos el alumno
        return alumno;
    }
}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//---------------------------------------- CLASE RESIDENCIA ---------------------------------------------------
//
//
//
class Residencia {
    //
    //
    //
    //Constructor
    constructor(codRes, habitaciones) {
        this.codRes = codRes;
        this.habitaciones = habitaciones;
    }
    //
    //
    //
    //Muestra los alumnos por habitación en una residencia
    mostrarAlumnos() {
        //Recorremos el array de habitaciones
        for (let i = 0; i < this.habitaciones.length; i++) {
            //si el numero de habitacion introducido corresponde con 
            //uno de las habitaciones que tenemos, se llama a la
            //funcion listaAlumnos de la clase Alumno
            document.write("<br/>Habitación nº " + this.habitaciones[i].numRoom + "<br/>--------------------<br/>");
            this.habitaciones[i].listaAlumnos();
            document.write(("<br/><br/>"));

        }
    }
    //
    //
    //
    //Funcion que inserta un alumno en una habitacion.
    //Recibe como parametro el numero de habitación y
    //un objeto de la clase alumno
    insertarAlumno(numRoom, alumno) {
        //Recorremos el array de habitaciones
        for (let i = 0; i < this.habitaciones.length; i++) {
            //si el numero de habitacion introducido corresponde con 
            //uno de las habitaciones que tenemos, se llama a la
            //funcion insertar alumno de la clase Alumno
            if (this.habitaciones[i].numRoom === numRoom) {
                this.habitaciones[i].insertarAlumno(alumno);
            }
        }
    }
    //
    //
    //
    //Funcion que elimina un alumno de una habitacion.
    //Recibe como parametros el numero de habitacion 
    //y el dni del alumno que queremos eliminar
    eliminarAlumno(numRoom, dni) {
        //Recorremos el array de habitaciones
        for (let i = 0; i < this.habitaciones.length; i++) {
            //Si coincide el numero de habitación introducido con
            //alguna de las habitaciones que tenemos
            if (this.habitaciones[i].numRoom === numRoom) {
                //Se llama a la funcion eliminarAlumno, de
                //la clase Alumno
                this.habitaciones[i].eliminarAlumno(dni);
            }
        }
    }
    //
    //
    //
    //Funcion que modifica los datos de un alumno que se encuentra
    //en una habitación en específico
    modificarAlumno(numRoom, dni, nuevoNombre, nuevosApellidos, nuevoDNI) {
        //Recorremos el array de habitaciones
        for (let i = 0; i < this.habitaciones.length; i++) {
            //Si coincide el numero de habitación introducido con
            //alguna de las habitaciones que tenemos
            if (this.habitaciones[i].numRoom === numRoom) {
                //Se llama a la funcion eliminarAlumno, de
                //la clase Alumno
                this.habitaciones[i].modificarAlumno(dni, nuevoNombre, nuevosApellidos, nuevoDNI);
            }
        }
    }
    //
    //
    //
    //Obtenemos el alumno
    obtenerAlumno(numRoom, dni) {
        let alumno;
        //Recorremos el array de habitaciones
        for (let i = 0; i < this.habitaciones.length; i++) {
            //Si coincide el numero de habitación introducido con
            //alguna de las habitaciones que tenemos
            if (this.habitaciones[i].numRoom === numRoom) {
                //Obtenemos al alumno
                alumno = this.habitaciones[i].encontrarAlumno(dni);
            }
        }
        return alumno;
    }
    //
    //
    //
    //Funcion que cambia a un alumno de una habitación a otra
    cambiarHabitacion(numRoom, newRoom, dni) {
        //Obtenemos el alumno
        let alumno = this.obtenerAlumno(numRoom, dni);
        //Insertamos el alumno en la nueva habitacion y luego lo eliminamos 
        //de la antigua
        this.insertarAlumno(newRoom, alumno);
        this.eliminarAlumno(numRoom, dni);

        //Mostramos lista
        this.mostrarAlumnos();

    }
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//---------------------------------------- FUNCIONES FUERA DE CLASES ----------------------------------------------
//
//
//
//FUNCION CAMBIO DE RESIDENCIA, quita a un alumno de una residencia y lo coloca en otra
//tiene como parametros la residencia y habitacion actual, la nueva residencia y habitacion
//y el dni del alumno
function cambioResidencia(residencia, numRoom, newResidencia, newRoom, dni) {
    //Obtenemos el alumno de la residencia con el numero de habitacion
    //y su dni
    let alumno = residencia.obtenerAlumno(numRoom, dni);
    //Añadimos el alumno a la nueva residencia
    newResidencia.insertarAlumno(newRoom, alumno);
    //Eliminamos el alumno de la residencia
    residencia.eliminarAlumno(numRoom, dni);

    //Mostramos la lista de alumnos de cada habitación en cada residencia
    document.write("<br/>-------- RESIDENCIA " + residencia.codRes + " --------<br/>");
    residencia.mostrarAlumnos();
    document.write("<br/>-------- RESIDENCIA " + newResidencia.codRes + " --------<br/>");
    newResidencia.mostrarAlumnos();
}

//
//
//
//FUNCION MAIN, es a la que vamos a llamar ahora
function main() {
    //Creamos 8 objetos Alumno
    let alumno1 = new Alumno("Pepe", "Primero", 1);
    let alumno2 = new Alumno("Pepe", "Segundo", 2);
    let alumno3 = new Alumno("Pepe", "Tercero", 3);
    let alumno4 = new Alumno("Pepe", "Cuarto", 4);
    let alumno5 = new Alumno("Pepe", "Quinto", 5);
    let alumno6 = new Alumno("Pepe", "Sexto", 6);
    let alumno7 = new Alumno("Pepe", "Séptimo", 7);
    let alumno8 = new Alumno("Pepe", "Octavo", 8);

    //Creamos tres clases Habitacion para residencia1
    let room1 = new Habitacion(1, [alumno1, alumno2, alumno3]);
    let room2 = new Habitacion(2, [alumno4, alumno5]);
    let room3 = new Habitacion(3, [alumno6]);

    //Creamos un objeto habitacion para residencia2
    let room11 = new Habitacion(1, [alumno7, alumno8]);

    //Creamos dos objetos de la clase Residencia
    let residencia1 = new Residencia(1, [room1, room2, room3]);
    let residencia2 = new Residencia(2, [room11]);

    let newAlumno = new Alumno("Barbara", "Holi", 2);





    //PROBAMOS LAS FUNCIONES


    //Probamos a eliminar un alumno, llamando a la funcion 
    //eliminarAlumno de la clase Residencia, que recibe
    //como argumento la habitación en la que se encuentra
    //el alumno y su dni
    residencia1.eliminarAlumno(1, 2);

    //Llamamos a la funcion insertarAlumno de la clase Residencia y 
    //le pasamos como argumento el numero de habitación y un objeto
    //de la clase alumno
    residencia1.insertarAlumno(1, newAlumno);

    //Modificamos el nuevo alumno y le vamos a poner como apellidos
    //tonta en vez de holi
    //Recibe como argumentos el numero de habitacion, el dni actual, 
    //el nuevo nombre, los nuevos apellidos y el nuevo dni
    residencia1.modificarAlumno(1, 2, "Barbara", "Tonta", 2);

    //Vemos la lista de alumnos de nuevo
    residencia1.mostrarAlumnos();

    //Cambiar alumnos de habitación
    residencia1.cambiarHabitacion(1, 3, 2);

    //Camnbiar alumno de residencia
    //Recibe como argumento la residencia en la que se encuentra,
    //la nueva residencia, su numero de habitacion actual y su dni
    //y el numero de habitación en el que va a ir en la nueva
    //residencia
    cambioResidencia(residencia1, 3, residencia2, 1, 2);
}

main();