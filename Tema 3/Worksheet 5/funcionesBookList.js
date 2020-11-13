import {Book, BookList} from './clasesBookList.js';

var listaLibros = new BookList();

var id = 0;
window.agregarLibros = function(){
    var t = document.getElementById("titulo").value;
    var g = document.getElementById("genero").value;
    var a = document.getElementById("autor").value;
    var read = document.formulario.readed.value;
    
    
    var date = document.getElementById("date").value;
    if (read == "true"){
        var foto = '<img src="tick.jpg" width="25" height="25">';
        read = true;
    } else{
        var foto = '<img src="error.jpg" width="25" height="25"></img>';
        read = false;
    }

    var libro = new Book(t, g, a, read, date);
    
    listaLibros.add(libro);

    document.getElementById("titulo").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("autor").value = "";
    document.querySelectorAll('[name=read]').forEach((x) => x.checked = false);
    document.getElementById("date").value = "";

    var fila='<tr><td id="fila'+id+'">'+t+"</td><td>"+g+"</td><td>"+a+"</td><td>"+foto+"</td><td>"+date+'</td><td><button class="botonimagen" id="'+id+'" onClick="eliminarFila(event)"></button></td></tr>';
    id++;
    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tablita").appendChild(btn);

    document.getElementById("booksRead").innerHTML = listaLibros.readedBooks + " of " +listaLibros.totalBooks;
}

window.eliminarFila = function(e){
    //Actualizar Array
    var botonPulsado = e.target;
    var idFila = botonPulsado.getAttribute("id");
    var tituloBorrar = document.getElementById("fila"+idFila).innerHTML;
    var indiceLibro = listaLibros.booklist.findIndex( libro => libro.title === tituloBorrar);
    listaLibros.booklist.splice(indiceLibro, 1);
    document.getElementById("booksRead").innerHTML = listaLibros.readedBooks + " of " +listaLibros.totalBooks;

    //Borrar Fila
    e.target.parentNode.parentNode.remove(botonPulsado);
}







