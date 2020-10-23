//EJERCICIOS BUCLES 
//Ejercicio 1
/*document.write("EJERCICIO 1 <br>");
for (let i = 1; i <= 10; i++) {
    document.write(i+"<br>");
  }

//Ejercicio 2
document.write("EJERCICIO 2 <br>");
var numero = parseInt(prompt("Introduce un numero"));

for (let i= numero; i<=100; i++){
    document.write(i+"<br>");
}

//Ejercicio 3 
document.write("EJERCICIO 3");
var i = parseInt(prompt("Introduce un numero"));
while (i !=0){
    i = prompt("Introduce un numero");
}
document.write("Has salido del bucle");

//Ejerciico 4 
document.write("EJERCICIO 4 <br>");
var palabra = prompt("Introduce un numero");
while (palabra !="Salir"){
    palabra = prompt("Introduce un numero");
}
document.write("Has salido del bucle");*/

//Ejercicio 5
/*document.write("EJERCICIO 5 <br>");
var suma=0;
for (let i = 0; i < 10; i++){
    suma=suma+parseFloat(prompt("Introduzca un número"));
}
document.write(suma);*/

//Ejercicio 6 
/*var numero = parseInt(prompt("Introduce un número"));

for (let i=0; i<=10; i++){
    multiplicacion=numero*i;
    document.write(numero+"*"+i+"="+multiplicacion+"<br>");
}*/

//Ejercicio 7
var numero = parseInt(prompt("Introduzca un número a adivinar"));

var suposicion = parseInt(prompt("Introduzca su suposicion"));

do{
    if (suposicion < numero){
        suposicion = parseInt(prompt("Pruebe de nuevo, el número es mayor que "+suposicion));
    } else if (suposicion > numero){
        suposicion = parseInt(prompt("Pruebe de nuevo, el número es menor que "+suposicion));
    }
} while (suposicion!=numero);
alert("Correcto ha adivinado el número "+numero);


