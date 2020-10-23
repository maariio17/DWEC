/*//EJERCICIO 4.10
document.write("PRACTICA DEL BUCLE FOR");
for (i=1; i<=6; i++){
    document.write("<h"+i+"> Cabezera h"+i+"</h"+i+">");
}
*/

/*//EJERCICIO 4.11
var numeroColumnas = parseInt(prompt("Introduzca el numero de filas de la tabla"));
var alto = parseInt(prompt("Introduzca en pixeles el alto de la tabla"));
var ancho = parseInt(prompt("Introduzca en pixeles el ancho de la tabla"));
document.write("<table border=\"0\" cellspacing=\"2\" bgcolor=\"black\">");
document.write("<tr height=\""+alto+"\">");
for (let i = 0; i < numeroColumnas; i++) {
    document.write("<td bgcolor=\"white\" width=\""+ancho+"\"> &nbsp; </td>");
}
document.write("</tr>");
document.write("</table>");*/

/*//EJERCICIO 4.12
var numeroColumnas = parseInt(prompt("Introduzca el numero de filas de la tabla"));
var alto = parseInt(prompt("Introduzca en pixeles el alto de la tabla"));
var ancho = parseInt(prompt("Introduzca en pixeles el ancho de la tabla"));
document.write("<table border=\"0\" cellspacing=\"2\" bgcolor=\"black\">");
document.write("<tr height=\""+alto+"\">");
for (let i = 1; i <= numeroColumnas; i++) {
    if (i%2==0){
        document.write("<td bgcolor=\"white\" width=\""+ancho+"\"> &nbsp; </td>");
    } else{
        document.write("<td bgcolor=\"black\" width=\""+ancho+"\"> &nbsp; </td>");
    }
    
}
document.write("</tr>");
document.write("</table>");*/

/*//EJERCICIO 4.13
var numeroColumnas = parseInt(prompt("Introduzca el numero de filas de la tabla"));
var alto = parseInt(prompt("Introduzca en pixeles el alto de la tabla"));
var ancho = parseInt(prompt("Introduzca en pixeles el ancho de la tabla"));

document.write("<table border=\"0\" cellspacing=\"2\" bgcolor=\"black\">");
document.write("<tr height=\""+alto+"\">");
let i=0;
while (i<numeroColumnas){
    document.write("<td bgcolor=\"white\" width=\""+ancho+"\"> &nbsp; </td>");
    i++;
}
document.write("</tr>");
document.write("</table>");*/

/*//EJERCICIO 4.14
var numeroColumnas = parseInt(prompt("Introduzca el numero de filas de la tabla"));
var alto = parseInt(prompt("Introduzca en pixeles el alto de la tabla"));
var ancho = parseInt(prompt("Introduzca en pixeles el ancho de la tabla"));

document.write("<table border=\"0\" cellspacing=\"2\" bgcolor=\"black\">");
document.write("<tr height=\""+alto+"\">");
var i=1;
while (i<=numeroColumnas){
    if (i%2==0){
        document.write("<td bgcolor=\"white\" width=\""+ancho+"\"> &nbsp; </td>");
    } else{
        document.write("<td bgcolor=\"black\" width=\""+ancho+"\"> &nbsp; </td>");
    }
    i++;
}
document.write("</tr>");
document.write("</table>");*/

/*//EJERCICIO 4.15
var num_adivinar = parseInt(prompt("Introduzca un número a adivinar"));

var num = parseInt(prompt("Introduzca su suposicion"));

while (num!=num_adivinar){
    if (num < num_adivinar){
        num = parseInt(prompt("Pruebe de nuevo, el número es mayor que "+num));
    } else if (num > num_adivinar){
        num = parseInt(prompt("Pruebe de nuevo, el número es menor que "+num));
    }
}
alert("Correcto ha adivinado el número "+num_adivinar);*/

//EJERCICIO 4.16
/*var num_adivinar = parseInt(prompt("Introduzca un número a adivinar"));

var num = parseInt(prompt("Introduzca su suposicion"));

do{
    if (num < num_adivinar){
        num = parseInt(prompt("Pruebe de nuevo, el número es mayor que "+num));
    } else if (num > num_adivinar){
        num = parseInt(prompt("Pruebe de nuevo, el número es menor que "+num));
    }
} while (num!=num_adivinar);
alert("Correcto ha adivinado el número "+num_adivinar);*/

//EJERCICIO 4.17
/*for (let j=0; j<=10; j++){
    document.write("TABLA DE MULTIPLICAR DEL "+j+"<br>");
    for (let i=0; i<=10; i++){
        multiplicacion=j*i;
        document.write(j+"*"+i+"="+multiplicacion+"<br>");
    }
}*/

/*//EJERCICIO 4.18
var numeroColumnas = parseInt(prompt("Introduzca el numero de filas de la tabla"));
var numeroFilas = parseInt(prompt("Introduzca el número de filas"));
var alto = parseInt(prompt("Introduzca en pixeles el alto de la tabla"));
var ancho = parseInt(prompt("Introduzca en pixeles el ancho de la tabla"));

document.write("<table border=\"0\" cellspacing=\"2\" bgcolor=\"black\">");
for (let i=0; i<numeroFilas; i++){
    document.write("<tr height=\""+alto+"\">");
    for (let j=0; j<numeroColumnas; j++){
        document.write("<td bgcolor=\"white\" width=\""+ancho+"\"> &nbsp; </td>");
    }
    document.write("</tr>");
}
document.write("</table>");*/

/*//EJERCICIO 4.19
var ancho = parseInt(prompt("Introduzca el ancho de la casilla"));
var negro = true;

document.write("<table border=\"0\" cellspacing=\"2\" bgcolor=\"black\">");
for (let i = 0; i < 8; i++) {
    document.write("<tr height=\""+ancho+"\">");
    for (let j = 0; j < 8; j++) {
        if (negro == true) {
            document.write("<td bgcolor=\"black\" width=\""+ancho+"\"> &nbsp; </td>");
            negro = false;
        } else {
            document.write("<td bgcolor=\"white\" width=\""+ancho+"\"> &nbsp; </td>");
            negro = true;
        }
    }
    document.write("</tr>");
    negro = !negro;
}
document.write("</table>");*/