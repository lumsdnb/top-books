//simple

function Book(title, author, pages, wasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.wasRead = wasRead;

  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages ${
      this.wasRead ? 'has been read already' : 'not read yet'
    }`;
  };
}

let myLibrary = [
  { title: 'a book title', author: 'jk rolling', pages: 5, wasRead: true },
  { title: 'another one', author: 'hp lowcraft', pages: 666, wasRead: false },
];

//fired on form submission
function addBookToLibrary() {
  event.preventDefault();
  console.log('yo');
  const theForm = document.getElementById('add-form');
  const aBook = Object.create(Book);
  aBook.title = theForm.elements['bname'].value;
  aBook.author = theForm.elements['bauthor'].value;
  aBook.pages = theForm.elements['bpages'].value;
  aBook.wasRead = theForm.elements['bread'].checked;

  console.log(aBook);
  // const newBook = Object.create(Book(bTitle, bAuthor, bPages, true));
  // console.log(newBook);
  myLibrary.push(aBook);
  document.getElementById('add-form').reset();
  console.log(myLibrary);
  renderBooks();
}

//------------------------------------
function renderBooks() {
  const parentEl = document.getElementById('book-list');
  parentEl.innerHTML = '';
  myLibrary.forEach((book) => {
    const newBookEl = document.createElement('div');
    const bookTitle = document.createElement('h2');
    const bookAuthor = document.createElement('h3');
    const bookPages = document.createElement('h4');
    const bookWasRead = document.createElement('h3');
    newBookEl.classList.add('book-item');
    bookTitle.innerHTML = book.title;
    bookAuthor.innerHTML = book.author;
    bookPages.innerHTML = `${book.pages} pages`;
    bookWasRead.innerHTML = book.wasRead;
    newBookEl.append(bookTitle, bookAuthor, bookPages, bookWasRead);
    parentEl.appendChild(newBookEl);
  });
}
renderBooks();
// console.log(parentEl);
