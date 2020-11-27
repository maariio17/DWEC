var fontSize = 1;

function aumentarTamaño(){
    fontSize += 0.1;
    document.body.style.fontSize = fontSize + "em";
}

function disminuirTamaño(){
    fontSize -= 0.1;
    document.body.style.fontSize = fontSize + "em";
}

function textoJustificado(){
    document.body.style.textAlign = "justify";
}

function textoIzquierda(){
    document.body.style.textAlign = "left";
}