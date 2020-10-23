// IF/ELSE
//Ejercicio 1
/*var nombre = prompt("Introduce tu nombre");
var apellidos = prompt("Introduce tus apellidos");

if (nombre == "David")
    alert("Tus apellidos son "+apellidos);
else 
    var nuevoApellidos = prompt("Introduce tus apellidos");
    console.log(nuevoApellidos);*/

//Ejercicio 2
/*var edad = parseInt(prompt("Introduce tu edad"));

if (edad >=67)
    alert("Puedes jubilarte");
else
    alert("Lo siento aun no puedes jubilarte");*/

//Ejercicio 3

/*var edad = parseInt(prompt("Intoduce tu edad"));

if (edad<=5){
    alert("Perteneces al grupo Jardin de Infancia");
} else{
    if (edad>5 && edad<=11){
        alert("Perteneces al grupo Primaria");
    } else{
        if (edad>11 && edad<=16){
            alert("Perteneces al grupo ESO");
        } else{
            if (edad>16 && edad<=21){
                alert("Perteneces al grupo Bachillerato o Ciclos");
            } else{
                alert("Perteneces al grupo Universidad");
            }
        }
    }   
}*/


//Ejercicio 4
/*var hermanos = parseInt(prompt("Cuantos hermanos tienes"));
var cantidad = parseInt(prompt("Introduce una cantidad"));

if (hermanos == 0){
    alert(cantidad);
} else{
    if (hermanos>0 && hermanos < 3){
        descuento = cantidad * 0.05;
    nuevaCantidad = cantidad - descuento2;
    alert("Tu nueva cantidad con un 5% de descuento es "+nuevaCantidad);
    } else{
        descuento2 = cantidad * 0.15;
        nuevaCantidad2 = cantidad - descuento2;
        alert("Tu nueva cantidad con un 15% de descuento es "+nuevaCantidad2);
    }
}*/

//Ejercicio 5
/*var nota1 = parseFloat(prompt("Introduce nota 1º Examen"));
var nota2 = parseFloat(prompt("Introduce nota 2º Examen"));
var trabajo1 = parseFloat(prompt("Introduce nota 1º Trabajo"));
var trabajo2 = parseFloat(prompt("Introduce nota 2º Trabajo"));

var sumaExamen = (nota1+nota2)*0.75;
var sumaTrabajos = (trabajo1 + trabajo2)*0.25;
var sumaNotas = (sumaExamen+sumaTrabajos)/2;

if (sumaNotas>=5){
    alert("Has aprobado");
} else{
    alert("Has suspendido")
}*/