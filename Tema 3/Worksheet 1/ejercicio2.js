/* Crea una web desde la que se simule el lanzamiento de un dado de 6 caras.
Para ello define una función lanzamiento que devuelva un nº aleatorio entre 1 y 6 */

function lanzamiento(){
    return parseInt(Math.random()*(1-7)+7);
}

document.write("El número del dado es "+lanzamiento());