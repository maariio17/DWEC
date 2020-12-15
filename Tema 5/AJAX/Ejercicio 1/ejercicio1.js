function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
       //Que hago cuando llega la respuesta
       document.getElementById("TextoPlano").innerHTML += this.responseText;
      }
    };
    xhttp.open("GET", "textoPlano.txt", true);
    xhttp.send();
  }

  function loadDocHTML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
       //Que hago cuando llega la respuesta
       document.getElementById("HTML").innerHTML += this.responseText;
      }
    };
    xhttp.open("GET", "HTML.txt", true);
    xhttp.send();
  }

  function loadDocJSON() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
       //Que hago cuando llega la respuesta
       let texto = JSON.parse(this.responseText);
       document.getElementById("JSON").innerHTML += this.responseText+"<br>";
       document.getElementById("JSON").innerHTML += texto.mensaje+"<br>";
      }
    };
    xhttp.open("GET", "JSON.txt", true);
    xhttp.send();
  }

  function loadDocJSONArray() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
       //Que hago cuando llega la respuesta
       let datosArray = JSON.parse(this.responseText);
       
       for (i=0; i<datosArray.listaNotas.length; i++){
        document.getElementById("JSONArray").innerHTML += "<ul><li>"+datosArray.listaNotas[i].titulo+"</li></ul>";
        }

      }
    };
    xhttp.open("GET", "JSONArray.txt", true);
    xhttp.send();
  }

  setInterval(loadDoc, 3000);
  setInterval(loadDocHTML, 3000);
  setInterval(loadDocJSON, 3000);
  setInterval(loadDocJSONArray, 3000);

