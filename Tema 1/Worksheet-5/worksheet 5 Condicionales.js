//CONDICIONALES O IF
//Ejercicio 1
/*var numero = parseInt(prompt("Intoduce un numero"));

if ((numero%2)==0){
    document.write("El numero es par");
} else{
    document.write("El numero es impar");
}*/


//Ejercicio 2
/*var edad = parseInt(prompt("Introduce tu edad"));

if (edad>=18)
    document.write("Eres mayor de edad");
else
    document.write("Eres menor de edad");*/

//Ejercicio 3
/*var edad = parseInt(prompt("Introduce tu edad"));
var localidad = prompt("Introduce tu localidad");

if (edad>25 && localidad == "Madrid") {
    document.write("“Enhorabuena”	a	los	usuarios	de	más	de	25	años	de	Madrid.");
} else {
    document.write("No eres de madrid");
}*/

//Ejercicio 4
/*var numero = parseInt(prompt("Introduce un numero"));

if (numero>100){
    var descuento = numero *0.15;
    var nuevoNumero = numero - descuento;
    document.write("Se te ha aplicado un 15%, se te ha descontado "+descuento+ "€ y ahora pagas "+nuevoNumero+ "€");
} else{
    document.write(" No se te hace descuento. Tienes que pagar "+numero+ "€");
}*/

//Ejercicio 5
/*var nombre = prompt("Introduce tu nombre");

if (nombre == "Pablo" || nombre == "Eduardo"){
    alert("Bienvenido "+nombre);
} else {
    if (nombre == 'Ana' || nombre == 'Clara'){
        alert("Bienvenida " +nombre);
    } else {
        alert('Nombre erroneo');
    }
}*/

//Ejercicio 6
var edad = parseInt(prompt("Introduce tu edad"));
var localidad = prompt("Introduce tu localidad");

if ((edad>=18 || edad<=30) && localidad =='Madrid')
    document.write("Puede acceder al carnet de empresarios emprendedores");
else 
    document.write("No puede acceder al carnet de empresarios de emprendedores");