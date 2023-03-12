let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}
Book.prototype.info = function() {
  return (`${this.title} by ${this.author}, ${this.pages}, ${this.read}`)
}
const theHobbit = new Book("The Hobbit", "J.R.R", "295 pages", "not read yet")
console.log(theHobbit.info())

function clearForm() {
  document.getElementById("book-title").value = ""
  document.getElementById("book-author").value = ""
  document.getElementById("book-pages").value = ""
  document.getElementById("book-read").value = ""
}

// handle book creation
function newBook() {
  let bookName = document.getElementById("book-title").value
  let bookAuthor = document.getElementById("book-author").value
  let bookPages = document.getElementById("book-pages").value
  let bookRead = document.getElementById("book-read").value
  
  if (bookName && bookAuthor && bookPages && bookRead) {
    createBook(bookName, bookAuthor, bookPages, bookRead)
    clearForm()
    showBooks()
    return true
  } else {
    alert("Invalid submition")
  }

}
function createBook(bookName, bookAuthor, bookPages, bookRead) {
  let count = myLibrary.length
  myLibrary[count] = new Book(bookName, bookAuthor, bookPages, bookRead)
}

// handle form submit
function submitClick(event) {
  newBook();
  event.preventDefault();
}
submitBtn = document.getElementById('submit-book')
submitBtn.addEventListener('click', submitClick, false)

function showBooks() {
  myLibrary.forEach((book) => {
    title = book.title
    author = book.author
    pages = book.pages
    read = book.read

    createBook(title, author, pages, read)
  })
}

function createBook(bookTitle, bookAuthor, bookPages, bookRead) {
  const mainDiv = document.getElementById("books")
  const bookDiv = document.createElement("div")
  bookDiv.className = "book"
  mainDiv.appendChild(bookDiv)

  const title = document.createElement("p")
  title.className = "book[title]"
  title.innerText = bookTitle

  const author = document.createElement("p")
  author.className = "book[title]"
  author.innerText = bookAuthor

  const pages = document.createElement("p")
  pages.className = "book[title]"
  pages.innerText = bookPages


  const read = document.createElement("p")
  read.className = "book[title]"
  read.innerText = bookRead

  bookDiv.appendChild(title)
  bookDiv.appendChild(author)
  bookDiv.appendChild(pages)
  bookDiv.appendChild(read)
}
