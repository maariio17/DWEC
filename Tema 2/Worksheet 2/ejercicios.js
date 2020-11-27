/*Crea una página en la que se muestre:
- Un número aleatorio entre 0 y 1
-Igual pero entre 100 y 200
-Pide dos valores al usuario y genera un nº aleatorio entre esos dos valores


document.write("<b>EJERCICIO 1 </b><br>");
var numAleatorio = Math.random();
document.write(numAleatorio+"<br>");
var numAleatorio2 = Math.random()*100+100;
document.write(numAleatorio2+"<br>");
var numero1 = parseInt(prompt("Introduce un número"));
var numero2 = parseInt(prompt("Introduce otro número"));
var numAleatorio3 = Math.random()*(numero2-numero1)+numero1;
document.write(numAleatorio3+"<br>");*/

/*Crea una web para resolver ecuaciones de segundo grado. Deberá pedir por tanto los coeficientes y mostrar las soluciones posibles
document.write("<b>EJERCICIO 5 </b><br>");
document.write("ax<sup>2</sup>+bx+c=0 <br>");
var a = parseInt(prompt("Introduce el valor de a"));
var b = parseInt(prompt("Introduce el valor de b"));
var c = parseInt(prompt("Introduce el valor de c"));

var solucion1 = (-b+(Math.sqrt((Math.pow(b, 2)-(4*a*c)))))/(2*a);
var solucion2 = (-b-(Math.sqrt((Math.pow(b, 2)-(4*a*c)))))/(2*a);
document.write("Primera solución: "+solucion1+"<br>");
document.write("Segunda solución: "+solucion2+"<br>");*/


/*Crea una web que genere una tabla con dos columnas. En la primera un numero ascendente y en la otra el valor de su seno*/
/*document.write("<b>EJERCICIO 7 </b><br>");
var numero = parseInt(prompt("Introduce un numero"));
var seno = Math.sin(numero);

document.write("<table>");
document.write("<tr>");
document.write("<th>Nº Ascendente</th>");
document.write("<th>Seno del Nº</th>")
document.write("</tr>");
document.write("<tr>");
document.write("<td>"+numero+"</td>");
document.write("<td>"+seno+"</td>");
document.write("</tr>");
document.write("</table>");/*

/*Crea una web en la que cada vez que se accede se muestre una imagen (de modo aleatorio) de entre tres posibles*/
