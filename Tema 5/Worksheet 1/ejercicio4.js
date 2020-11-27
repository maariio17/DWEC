function añadirLista(){
    var li = document.createElement('li');
    li.innerHTML= "<li>Nueva Entrada</li>";
    document.getElementById('lista').appendChild(li);
}
