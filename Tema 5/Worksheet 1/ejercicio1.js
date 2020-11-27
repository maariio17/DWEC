var numeroEnlaces = document.getElementsByTagName("a").length;
var direccion = document.getElementsByTagName("a")[numeroEnlaces-1];
var enlacesGoogle = document.querySelectorAll('a[href="https://www.google.com/"]').length;
var numeroEnlacesParrafo = document.getElementsByTagName("p")[2].getElementsByTagName("a").length;

document.getElementById("numeroEnlaces").innerHTML = "Hay "+numeroEnlaces+" enlaces en esta página";
document.getElementById("direccionUltimoEnlace").innerHTML = 'La direccion del ultimo enlace es la siguiente: <a href="'+direccion+'">'+direccion+'</a>';
document.getElementById("numeroEnlacesGoogle").innerHTML = "Hay "+enlacesGoogle+ " enlaces a Google";
document.getElementById("numeroEnlacesParrafo").innerHTML = "Hay "+numeroEnlacesParrafo+ " enlace/s en el tercer parrafo";