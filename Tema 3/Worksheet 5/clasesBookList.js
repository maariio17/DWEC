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

export {Book, BookList};