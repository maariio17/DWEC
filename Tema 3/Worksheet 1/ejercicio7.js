/* Funcion para calcular el facotrial de un número */

function factorial (numero){
    if (numero == 1 || numero == 0)
        return 1;
    else 
        return numero * factorial(numero-1);
}