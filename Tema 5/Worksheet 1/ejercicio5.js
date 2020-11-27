function añadirFichero(){
    var file = document.getElementById('file');
    var input = document.createElement('input');
    input.type = 'file';
    file.appendChild(input);
}