/* Funcion para calcular potencias de un modo recursivo */
function potencia(base, exponente){
    if (exponente ==1)
        return base;
    else 
        return base*potencia (base, exponente-1);
}