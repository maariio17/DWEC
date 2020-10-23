/*Crea las siguientes funciones y llámalas desde unapágina XHTML para mostrar su funcionamiento:
a) invierteCadena(cad_arg): devuelve invertida una cadena dada por el usuario
b) inviertePalabras(cad_arg): devuelve invertidas las palabras contenidas en la cadena
c) encuentraPalabrasMasLarga(cad_arg): para una cadena de caracteres dada devuelve la longitud de la palabra mas larga en ella contenida
d)filtaPalabrasMasLargas(cad_arg): para una cadena de caracteres y un valor numérico (i), devuelva el número de palabras cuya longitud es mayor a i.
e) cadenaBienFormada(cad_arg): formatea correctamente la cadena pasada, de tal modo que solo aparece en mayúscula la primera letra y el resto en minúscula */

/*document.write("<b>EJERCICIO 1</b><br>");
document.write("a)");
const cad_arg = new String(prompt("Introduce una cadena"));
document.write(cad_arg+"<br>");

function invierteCadena(cad_arg){
    var x = cad_arg.length;
    var cadenaInvertida = " ";
    while (x>=0){
        cadenaInvertida = cadenaInvertida + cad_arg.charAt(x);
        x--;
    }
    return cadenaInvertida;
}
document.write(invierteCadena(cad_arg)+"<br>");

document.write("b)");*/

/*Definir una funcion que muestre informacion sobre una cadena de texto que se le pasa 
como argumento. A partir de la cadena que se le pasa, la función determina si la 
cadena esta formada por mayúsculas, solo por minúsculas o por una mezcla de ambas */
/*document.write("<b>EJERCICIO 2</b><br>");
const cad_arg = new String(prompt("Introduce una cadena"));
if (cad_arg == cad_arg.toUpperCase()){
    document.write("La cadena tiene Mayusculas");
} else{
    if (cad_arg == cad_arg.toLowerCase()){
        document.write("La cadena tiene minusculas");
    } else{
        document.write("La cadena tiene ambas");
    }
}*/

/*Desarolla una funcion tomando como entrada una cadena de texto nos devuelva si es o no un palíndromo */
document.write("<b>EJERCICIO 7</b><br>");
const cadena = new String(prompt("Introduce un polindromo"));

function palindromo(cadena) {

    var resultado = "La cadena \""+cadena+"\" \n";
  
    // Pasar a minusculas la cadena
    var cadenaOriginal = cadena.toLowerCase();
  
    // Convertir la cadena en un array
    var letrasEspacios = cadenaOriginal.split("");
  
    // Eliminar los espacios en blanco (este paso es demasiado largo ya que no se utiliza la funcion "replace")
    var cadenaSinEspacios = "";
    for(i in letrasEspacios) {
      if(letrasEspacios[i] != " ") {
        cadenaSinEspacios += letrasEspacios[i];
      }
    }
  
    var letras = cadenaSinEspacios.split("");
    var letrasReves = cadenaSinEspacios.split("").reverse();
  
    // Este paso tambien es muy largo porque no se utiliza la sentencia "break"
    var iguales = true;
    for(i in letras) {
      if(letras[i] == letrasReves[i]) {
        // Todo bien
      }
      else {
        // Alguna letra es distinta, por lo que ya no es un palindromo
        iguales = false;
      }
    }
  
    if(iguales) {
      resultado += "es un palíndromo";
    }
    else {
      resultado += " no es un palíndromo";
    }
  
    return resultado;
  }
  
  alert(palindromo("La ruta nos aporto otro paso natural"));
  alert(palindromo("Esta frase no se parece a ningun palindromo"));
