/*The Reading List
An object-oriented book-list!

Create a class BookList

Create another class called Book

BookLists should have the following properties: (Array Libros)

Number of books marked as read
Number of books marked not read yet
A reference to the next book to read (book object)
A reference to the current book being read (book object)
A reference to the last book read (book object)
An array of all the Books
Each Book should have several properties:

Title
Genre
Author
Read (true or false)
Read date, can be blank, otherwise needs to be a JS Date() object
Every Booklist should have a few methods:

.add(book)
should add a book to the books list.
.finishCurrentBook()
should mark the book that is currently being read as "read"
Give it a read date of new Date(Date.now())
Change the last book read to be the book that just got finished
Change the current book to be the next book to be read
Change the next book to be read property to be the first unread book you find in the list of books
Booklists and Books might need more methods than that. Try to think of more that might be useful.*/

class Book{
    constructor(title, genre, author, read, readdate) {
        this.title = title || "No title";
        this.genre = genre || "Fiction";
        this.author = author || "No author";
        this.read = read;
        this.readdate = new Date(readdate);
    }
} 

class BookList {
    constructor(booklist = []){
        this.booklist = booklist;
        this.lastBook = undefined;
    }

    get currentBook() {
        for (const book of this.booklist) {
            if (!book.read) {
                return book;
            }
        }
        return null;
    }

    get readedBooks(){
        return this.booklist.filter(book => book.read).length;
    }

    
    get unreadedBooks(){
        return this.booklist.filter(book => !book.read).length;
    }

    get nextBook() {
        for (const book of this.booklist) {
            if (!book.read && book != this.currentBook) {
                return book;
            }
        }
        return null;
    }

    get totalBooks() {
        return this.booklist.length;
    }

    add(book) {
        this.booklist.push(book);
    }

    finishCurrentBook() {
        if (this.currentBook != null) {
            this.currentBook.readDate = new Date(Date.now());
            this.lastBook = this.currentBook;
            this.currentBook.read = true;
            return this.lastBook;
        }
        return null;
    }
}
var listaLibros = new BookList();

function agregarLibros(){
    var t = document.getElementById("titulo").value;
    var g = document.getElementById("genero").value;
    var a = document.getElementById("autor").value;
    var read = document.formulario.readed.value;
    
    var date = document.getElementById("date").value;
    if (read == "true"){
        foto = '<img src="tick.jpg" width="25" height="25">';
        read = true;
    } else{
        foto = '<img src="error.jpg" width="25" height="25"></img>';
        read = false;
    }

    libro = new Book(t, g, a, read, date);
    
    listaLibros.add(libro);

    document.getElementById("titulo").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("autor").value = "";
    document.querySelectorAll('[name=read]').forEach((x) => x.checked = false);
    document.getElementById("date").value = "";

    var fila="<tr><td>"+t+"</td><td>"+g+"</td><td>"+a+"</td><td>"+foto+"</td><td>"+date+"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tablita").appendChild(btn);

    document.getElementById("booksRead").innerHTML = listaLibros.readedBooks + " of " +listaLibros.totalBooks;
}




