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
        this.read = read || false;
        this.readdate = new Date(readdate);
    }
} 

class BookList {
    constructor(books){
        this.nextBook = books[1];
        this.currentBook = books[0];
        this.lastBook = undefined;
        this.books = books;
    }

    get readedBooks(){
        let readed = 0;
        for (const book of this.books){
            if (!book.read){
                unreaded++;
            }
        }
        return unreaded;
    }
    
    get anUnreadedBooks(){
        for (const book of this.books){
            if (!book.read && book!=this.currentBook) {
                return book;
            }
        }
        return undefined;
    }

    add(book){
        this.books.push(book);
    }

    finishCurrentBook(){
        this.currentBook.read = true;
        this.currentBook.readDate = new Date(Date.now());
        this.lastBook = this.currentBook;

        this.currentBook = this.nextBook;

        this.nextBook = this.anUnreadedBook;
    }
}




