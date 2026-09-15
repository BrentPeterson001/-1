const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", isBorrowed: false },
  { title: "1984", author: "George Orwell", isBorrowed: true },
  { title: "To Kill a Mockingbird", author: "Harper Lee", isBorrowed: false },
  { title: "The Hobbit", author: "J.R.R. Tolkien", isBorrowed: true }
];


class Book {
    constructor(title, author, isBorrowed) {
        this.title = title;
        this.author = author;
        this.isBorrowed = isBorrowed;
    }
    toggleBorrowStatus() {
        this.isBorrowed = !this.isBorrowed;
        return this.isBorrowed;
    }
}

class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(title) {
        const index = this.books.findIndex(b => b.title.toLowerCase() === title.trim().toLowerCase());
        return this.books.splice(index, 1);
    }
    findBookByTitle(title) {
        const  target = title.trim().toLowerCase();
        return this.books.find(b => b.title.toLowerCase() === target);
    }
    getAvailableBooks() {
        return this.books.filter(book => !book.isBorrowed);
    }
    getStatsByAuthor() {
        return this.books.filter(b => b.author.toLowerCase() === author.trim().toLowerCase().map(b => b.title));
    }
}
list.innerHTML = books.map(book => `<li>${book.title} - ${book.author} - ${book.isBorrowed}`).join("");
