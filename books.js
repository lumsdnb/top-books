//----- constructor -----

function Book(title, author, pages, wasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.wasRead = wasRead;
  this.toggleRead = () => {
    this.wasRead = !this.wasRead
  };
  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages ${this.wasRead ? 'has been read already' : 'not read yet'
      }`;
  };
}

let myLibrary = [
  ];

//----- on submit form -----
function addBookToLibrary() {
  event.preventDefault();
 
  const theForm = document.getElementById('add-form');
  //create object from form values
  const aBook = new Book(theForm.elements['bname'].value, theForm.elements['bauthor'].value, theForm.elements['bpages'].value, theForm.elements['bread'].checked);

  // const newBook = Object.create(Book(bTitle, bAuthor, bPages, true));
  // console.log(newBook);
  myLibrary.push(aBook);
  document.getElementById('add-form').reset();

  storeLocalData()
  renderBooks();
  openForm();
}

function testBooks(){
  const aBook = new Book('a book title',
    'jk rolling',
    5,
    true)

 // console.log(aBook);
  // const newBook = Object.create(Book(bTitle, bAuthor, bPages, true));
  // console.log(newBook);
  myLibrary.push(aBook);
  console.log(myLibrary);
  renderBooks()
}

//----- redraw book list -----
function renderBooks() {
  const parentEl = document.getElementById('book-list');
  parentEl.innerHTML = '';
  myLibrary.forEach((book, index) => {
    const newBookEl = document.createElement('div');
    const bookTitle = document.createElement('h2');
    const bookAuthor = document.createElement('h3');
    const bookPages = document.createElement('h4');
    const bookWasRead = document.createElement('span');
    const removeBtn = document.createElement('button');
    newBookEl.dataset.id = index;
    const toggleRead = document.createElement('button');
    toggleRead.innerHTML = 'read';
    toggleRead.onclick = handleRead.bind(index);
    removeBtn.onclick = removeItem.bind(index);
    removeBtn.innerHTML = 'remove';
    newBookEl.classList.add('book-item');
    bookTitle.innerHTML = book.title;
    bookAuthor.innerHTML = book.author;
    bookPages.innerHTML = `${book.pages} pages`;
    bookWasRead.innerHTML = book.wasRead ? 'was read' : 'not read yet';
    newBookEl.append(
      bookTitle,
      bookAuthor,
      bookPages,
      bookWasRead,
      toggleRead,
      removeBtn
    );
    parentEl.prepend(newBookEl);
  });
}

const openForm = () => {
  const hiddenDiv = document.querySelector('#add-form');
  const addBtn = document.querySelector('.add-btn');
  if (addBtn.innerHTML === '-') {
    addBtn.innerHTML = '+';
    hiddenDiv.classList.add('--hidden');
  } else if (addBtn.innerHTML === '+') {
    addBtn.innerHTML = '-';
    hiddenDiv.classList.remove('--hidden');
  }
};

const removeItem = (i) => {
  const el = i.originalTarget.parentNode.getAttribute('data-id');
  // el.remove();
  // let render function handle this instead, rm from data
  myLibrary.splice(el, 1);
  console.log(el);
  console.log(myLibrary);
  storeLocalData()
  renderBooks();
};

const handleRead = (i) => {
  const index = i.originalTarget.parentNode.getAttribute('data-id');
  myLibrary[index].toggleRead();
  renderBooks()
};

function storeLocalData() {
  localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}

const firstLoad=()=>{
  if(!localStorage.myLibrary){
    renderBooks()
  }else{
    let objList=localStorage.getItem("myLibrary")
    objList=JSON.parse(objList)
    objList.forEach((book)=>{
      const b = new Book(book.title, book.author, book.pages, book.wasRead);
      myLibrary.push(b);

    })
    renderBooks();
    console.log("loaded");
  }
  testBooks()
}
firstLoad()
