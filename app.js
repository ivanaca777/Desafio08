
//Punto 1:

var title = document.getElementById('title').textContent;
console.log(title);


//Punto 3:

//----------------------------Primer integrante------------------------------
//nombre 1
var nombre1PI = document.getElementById('nombre1PI').textContent;    

//nombre 2 
var nombre2PI = document.getElementById('nombre2PI').textContent;    

//apellido 1
var apellido1PI = document.getElementById('apellido1PI').textContent;    

//apellido 2
var apellido2PI = document.getElementById('apellido2PI').textContent;    

//----------------------------Segundo integrante------------------------------
//nombre 1
var nombre1SI = document.getElementById('nombre1SI').textContent;    

//nombre 2 
var nombre2SI = document.getElementById('nombre2SI').textContent;    

//apellido 1
var apellido1SI = document.getElementById('apellido1SI').textContent;    

//apellido 2
var apellido2SI = document.getElementById('apellido2SI').textContent;    

//----------------------------------------------------------------------------

function armarNombre (nombre1 , nombre2, apellido1 , apellido2) {
    var integrante = ""
    if (nombre1 != "") {
        integrante += nombre1; 
    }

    if (nombre2 != "") {
        integrante += " " + nombre2; 
    }

    if (apellido1 != "") {
        integrante += " " + apellido1; 
    }

    if (apellido2 != "") {
        integrante +=  " " + apellido2; 
    }

    return integrante
}

var integrante1 = armarNombre(nombre1PI , nombre2PI, apellido1PI.toUpperCase() , apellido2PI.toUpperCase());
console.log('-----\nIntegrante 1: "' + integrante1 + '"');

var integrante2 = armarNombre(nombre1SI , nombre2SI, apellido1SI.toUpperCase() , apellido2SI.toUpperCase());
console.log('Integrante 2: "' + integrante2 + '"\n-----');


//Punto 4:

function compararNA (nombreApellidoInt1 , nombreApellidoInt2 , id1 , id2) {
    var bandera = false
    if (nombreApellidoInt1 === nombreApellidoInt2) {
        console.log("Los nombres/apellidos coinciden");
        var color = prompt("Hay coincidencia en los nombres/apellidos. Elija un color para resaltarlos:");

        if (color) {
            var elemento1 = document.getElementById(id1);
            var elemento2 = document.getElementById(id2);
      
            elemento1.style.color = color;
            elemento2.style.color = color;
    }
    }
    else {bandera = true
    }

    return bandera
}

//todas las comparaciones posibles de nombres
var coincidencia1 = compararNA (nombre1PI , nombre1SI , "nombre1PI" , "nombre1SI");
var coincidencia2 = compararNA (nombre1PI , nombre2SI , "nombre1PI" , "nombre2SI");
var coincidencia3 = compararNA (nombre2PI , nombre1SI , "nombre2PI" , "nombre1SI");
var coincidencia4 = compararNA (nombre2PI , nombre2SI , "nombre2PI" , "nombre2SI");


//devolución en caso de no coincidencias
if (coincidencia1 && coincidencia2 && coincidencia3 && coincidencia4) //&& coincidencia5 && coincidencia6 && coincidencia7 && coincidencia8) 
{
    console.log("No hay coincidencias en los nombres");
    var respuesta = prompt("¿Desea realizar una comparación en los apellidos? Escriba 'si' o 'no'")

    if (respuesta === "si" || "SI" || "Si" || "sI") {
        //todas las comparaciones posibles de apellidos
        var coincidencia5 = compararNA (apellido1PI , apellido1SI , "apellido1PI" , "apellido1SI");
        var coincidencia6 = compararNA (apellido1PI , apellido2SI , "apellido1PI" , "apellido2SI");
        var coincidencia7 = compararNA (apellido2PI , apellido1SI , "apellido2PI" , "apellido1SI");
        var coincidencia8 = compararNA (apellido2PI , apellido2SI , "apellido2PI" , "apellido2SI");
    }
    
    if (coincidencia5 && coincidencia6 && coincidencia7 && coincidencia8) {
        console.log("No hay coincidencias en los apellidos");
    }
    
}