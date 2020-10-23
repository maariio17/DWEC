/* Funcion paresImpares que cree un arrar de 100 numeros aleatorios. Mostrar
el array. Juntar pares y despues impares y volver a mostrar el array */

function paresImpares(){
    return parseInt(Math.random()*(1-1001)+1001);
}

function introducirNumeros() {
    const nArray = [];
    while (nArray.length !==100){
        const numero = paresImpares(nArray);
        nArray.push(numero);
    }
    return nArray;
}

console.log(introducirNumeros());