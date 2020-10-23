/* Simulacion de un dado al tirarlo 6000 veces, mostrando el numero de 
ocurrencias de cada uno de los valores */

var numero1 = numero2 = numero3 = numero4 = numero5 = numero6 = 0;


function lanzamiento(){
    return parseInt(Math.random()*(1-7)+7);
}

for(i=1;i<=6000;i++){
    tirada = lanzamiento();
    switch(tirada){
        case 1:
            numero1++;
            break;
        case 2:
            numero2++;
            break;
        case 3:
            numero3++;
            break;
        case 4:
            numero4++;
            break;
        case 5:
            numero5++;
            break;
        case 6:
            numero6++;
            break;
    }
}

document.write("Número 1: "+numero1+" veces<br>");
document.write("Número 2: "+numero2+" veces<br>");
document.write("Número 3: "+numero3+" veces<br>");
document.write("Número 4: "+numero4+" veces<br>");
document.write("Número 5: "+numero5+" veces<br>");
document.write("Número 6: "+numero6+" veces<br>");