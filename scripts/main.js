let myLibrary = [];
let deleteBtns = document.querySelectorAll(".card-dlt-btn")

function showForm() {
  formDiv = document.getElementById("form-sector")
  formDiv.style.visibility = "visible"
}
function hideForm() {
  formDiv = document.getElementById("form-sector")
  formDiv.style.visibility = "hidden"
}
addBookBtn = document.getElementById("book-adder")
addBookBtn.addEventListener("click", () => {
  showForm()
})

// book object constructor
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.shown = false
}
Book.prototype.info = function() {
  return (`${this.title} by ${this.author}, ${this.pages}, ${this.read}`)
}

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
    hideForm()
    clearForm()
    showBooks()
    return true
  } else {
    alert("Invalid submition")
  }

}
function createBook(bookName, bookAuthor, bookPages, bookRead) {
  myLibrary.push(new Book(bookName, bookAuthor, bookPages, bookRead))
}

// handle form submit
function submitClick(event) {
  newBook();
  event.preventDefault();
}
submitBtn = document.getElementById('submit-book')
submitBtn.addEventListener('click', submitClick, false)

function showBooks() {
  myLibrary.forEach((book, index) => {
  if (book.shown === false) {
    createBookDiv(book.title, book.author, book.pages, book.read, index)
    book.shown = true
  }
  })
}

function createBookDiv(bookTitle, bookAuthor, bookPages, bookRead, bookIndex) {
  const mainDiv = document.getElementById("books")
  const bookDiv = document.createElement("div")
  bookDiv.className = "book"
  mainDiv.appendChild(bookDiv)

  const title = document.createElement("p")
  title.className = "book[title]"
  title.innerText = `Title: ${bookTitle}`

  const author = document.createElement("p")
  author.className = "book[author]"
  author.innerText = `Author: ${bookAuthor}`

  const pages = document.createElement("p")
  pages.className = "book[pages]"
  pages.innerText = `Pages: ${bookPages}`


  const read = document.createElement("p")
  read.className = "book[read]"
  read.innerText = `Status: ${bookRead}`

  const toggleReadBtn = document.createElement("button")
  toggleReadBtn.innerHTML = "Change Status"
  toggleReadBtn.onclick = () => {
    const book = myLibrary[bookIndex]
    console.log(book)
    if (book.read === "Read") {
      book.read = "Not Read"
    } else {
      book.read = "Read"
    }
    read.innerText = `Status: ${book.read}`
  }

  const deleteBookBtn = document.createElement("button")
  deleteBookBtn.className = "card-dlt-btn"
  deleteBookBtn.innerHTML = "Delete Book"
  deleteBookBtn.value = bookIndex
  deleteBookBtn.onclick = () => {
    const book = deleteBookBtn.parentElement
    const idInput = book.value

    myLibrary.splice(idInput, 1)
    book.remove()
  }

  bookDiv.appendChild(title)
  bookDiv.appendChild(author)
  bookDiv.appendChild(pages)
  bookDiv.appendChild(read)
  bookDiv.appendChild(toggleReadBtn)
  bookDiv.appendChild(deleteBookBtn)
}
