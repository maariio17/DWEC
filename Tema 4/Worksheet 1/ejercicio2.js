<<<<<<< HEAD
/* Captura el movimiento del ratón, para que se muestre la posición en la que se
encuentre en cada momento */

window.onload = function(){
    document.onmousemove = function (e){
        var contenedor = document.getElementById("contenedor");
        contenedor.innerHTML = "x: " + e.pageX+ " y: " +e.pageY;
    }
}
=======
/* Captura el movimiento del ratón, para que se muestre la posición en la que se
encuentre en cada momento */

window.onload = function(){
    document.onmousemove = function (e){
        var contenedor = document.getElementById("contenedor");
        contenedor.innerHTML = "x: " + e.pageX+ " y: " +e.pageY;
    }
}
>>>>>>> 14493652270b3c7b43faaf1da5e5f0fa02027726
