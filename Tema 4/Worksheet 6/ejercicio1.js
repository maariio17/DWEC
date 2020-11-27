<<<<<<< HEAD

//Leer Cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

var fondo = "";
var parrafo = "";
var tamaño = 0;

function informacionCookie(){
    var usuario = document.getElementById("usuario").value;
    fondo = document.getElementById("colorFondo").value;
    tamaño = document.getElementById("tamañoLetra").value;
    parrafo = document.getElementById("parrafo").value;
    console.log(usuario);
    console.log(fondo);
    console.log(tamaño);
    console.log(parrafo);

    document.cookie = "usuario="+usuario+'; max-age=100"';
    document.getElementById("usuario").value ="";
    //document.getElementById("fondo").value ="#000000";
    //document.getElementById("tamaño").value ="11";
    //document.getElementById("parrafo").value ="";

}

function checkCookie() {
    var usu = getCookie("usuario");
    if (usu != "") {
      alert("Welcome again " + usu);
      informacionCookie();
      document.body.style.fontSize =  tamaño+"em";
      document.body.style.textAlign = parrafo;
      document.body.style.backgroundColor = fondo;
    } else {
        usu = document.getElementById("usuario").value;
      if (usu != "" && usu != null) {
        document.cookie("usuario="+usu);
      }
    }
  }

window.onload =checkCookie;
=======

//Leer Cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

var fondo = "";
var parrafo = "";
var tamaño = 0;

function informacionCookie(){
    var usuario = document.getElementById("usuario").value;
    fondo = document.getElementById("colorFondo").value;
    tamaño = document.getElementById("tamañoLetra").value;
    parrafo = document.getElementById("parrafo").value;
    console.log(usuario);
    console.log(fondo);
    console.log(tamaño);
    console.log(parrafo);

    document.cookie = "usuario="+usuario+'; max-age=100"';
    document.getElementById("usuario").value ="";
    //document.getElementById("fondo").value ="#000000";
    //document.getElementById("tamaño").value ="11";
    //document.getElementById("parrafo").value ="";

}

function checkCookie() {
    var usu = getCookie("usuario");
    if (usu != "") {
      alert("Welcome again " + usu);
      informacionCookie();
      document.body.style.fontSize =  tamaño+"em";
      document.body.style.textAlign = parrafo;
      document.body.style.backgroundColor = fondo;
    } else {
        usu = document.getElementById("usuario").value;
      if (usu != "" && usu != null) {
        document.cookie("usuario="+usu);
      }
    }
  }

window.onload =checkCookie;
>>>>>>> 14493652270b3c7b43faaf1da5e5f0fa02027726
