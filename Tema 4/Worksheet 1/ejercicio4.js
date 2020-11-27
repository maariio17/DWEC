/* Eventos onMouseMove y onLoad. Debemos ser capaces de dibujar con nuestro ratón
en dos colores diferentes. Para ello primero simularemos que disponemos de un 
canvas gráfico: realmente se tratará de una tabla con celdas de pequeño tamaño
(100x100 puede valer): Tu programacreará ese canvas una vez cargada la página 
(onLoad). Lo siguiente será detectar el movimiento del ratón sobre las celdas para 
pintarlas de un color, el cual será rojo si se mantiene pulsada simultaneamente 
la tecla Ctrl y azul si se pulsa Shift. EN otro caso no deberá pintarse nada*/

function mover(eventoRaton){
    eventoRaton.target.style.backgroundColor= "red";
}

function main(){
    
    tabla = "";

    tabla += "<table>";
    for (i=0; i<100; i++){
        tabla+= "<tr>";
        for (j=0; j<100; j++){
            tabla+="<td onmousemove='mover(event)'></td>"
        }
        tabla+="</tr>";
    }
    tabla+="</table>";
    document.getElementById("tabla").innerHTML = tabla;
}

























/*function pintarCelda(celda){
    var texto = document.getElementById("celda") //acceso al sitio de escritura
    var evento = celda || window.event // definir objeto event
    if (evento.type ==  "keydown" ) {texto.innerHTML = ""} //borrar texto anterior
         tipo = "<div id='caja2'><p>Tipo de evento: " + evento.type + "</p>" //define tipo de evento
         propkeyCode = "<p>Propiedad keyCode " + evento.keyCode +  "</p>"  //info propiedad keyCode
         propcharCode = "<p>Propiedad charCode " + evento.charCode + "</p>" //info propiedad charCode
    if (evento.keyCode == 17){
        evento.style.backgroundColor="#66ff33";
    }
}
window.onload = function() { //acceso a los eventos.
}*/

/*var celdas = document.querySelectorAll("td");
    console.log(celdas.length);

    for (let celda of celdas) {
        celda.addEventListener("onmouseover", pintarCelda);
    }*/
/*function pintarCelda(celda) {
    if(celda.ctrlKey){
        //e.explicitOriginalTarget.bgColor="red";
        celda.style.backgroundColor="#66ff33"
    } else if (e.shiftKey){
        e.explicitOriginalTarget.bgColor="blue";
    }
}*/

/*function cambiar_color_over(celda){
        celda.style.backgroundColor="#66ff33"
}
function cambiar_color_out(celda){
    celda.style.backgroundColor="#D5D5D5"
}*/