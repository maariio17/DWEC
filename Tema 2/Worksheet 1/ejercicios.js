/*1. Realiza una página que cree un objeto de tipo Date y muestre en la página la siguiente información (cada una en una linea):
-El año actual
-El mes actual
-El dia actual
-La hora actual
-Los minutos actuales
-Los segundos actuales
*/

var dateObjectName = new Date();
var año = dateObjectName.getFullYear();
var mes = dateObjectName.getMonth();
var dia = dateObjectName.getDay();
var hora = dateObjectName.getHours();
var minutos = dateObjectName.getMinutes();
var segundos = dateObjectName.getSeconds();

document.write("Ejercicio 1 <br>");
document.write(año+"<br>");
document.write(mes+"<br>");
document.write("Dia "+dia+"<br>");
document.write(hora+" horas <br>");
document.write(minutos+" minutos <br>");
document.write(segundos+" segundos <br>");

/*2. Crea una página web en la que se muestre el resultado de cada uno de los siguientes apartados:
a. Crear variable "fechaHoy" con fecha Hoy
b. Crear variable '"fecha85" que sume 85 dias a la variable "fechaHoy"
c. Crear variable "fecha187" que reste 187 dias a la variable "fechaHoy"
d. Sumar dos años a la variable "fecha85"
e. Restar 24 horas a la variable "fecha187"
f. Crear variable "fechaResto" que sea la resta de fecha85- fecha187 y observa lo que obtienes
*/

document.write("<br>Ejercicio 2 <br>");
var fechaHoy = new Date();
document.write((fechaHoy.getDate() + "/" + (fechaHoy.getMonth() +1) + "/" + fechaHoy.getFullYear()+"<br>"));
function sumarDias(fecha, dias){
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }
var fecha85 = sumarDias(fechaHoy, -85);
document.write(fecha85+"<br>");

var fecha187 = sumarDias(fechaHoy, -187);
document.write(fecha187+"<br>");

var sumYears = sumarDias(fecha85, +(365*2));
document.write(sumYears+"<br>");

var fechaResto = sumarDias(fecha85, -fecha187);
document.write(fechaResto+"<br>");

/*3. Utilizando setTimeOut() creo un contador hacia atras de 60 segundos.*/

document.write("<br> Ejercicio 3 <br>");

/*5.Usando el objeto Date, sus métodos getHours, getMinutes y getSeconds y el método setTimeOut() crea un reloj que se actualize cada segundo*/
document.write("<br> Ejercicio 5 <br>");
function mueveReloj(){
    momentoActual = new Date();
    hora = momentoActual.getHours();
    minuto = momentoActual.getMinutes();
    segundo = momentoActual.getSeconds();

    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = horaImprimible;

    setTimeout("mueveReloj()",1000);
}
