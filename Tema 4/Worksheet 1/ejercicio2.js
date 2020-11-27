/* Captura el movimiento del ratón, para que se muestre la posición en la que se
encuentre en cada momento */

window.onload = function(){
    document.onmousemove = function (e){
        var contenedor = document.getElementById("contenedor");
        contenedor.innerHTML = "x: " + e.pageX+ " y: " +e.pageY;
    }
}
