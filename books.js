//simple

const Books = function (title, author, pages, wasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.wasRead = wasRead;

  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages ${
      this.wasRead ? 'has been read already' : 'not read yet'
    }`;
  };
};

const aBook = Object.create(Books('a title', 'an author', 200, false));

//this also works

const Books2 = {
  init: function (title, author, pages, wasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.wasRead = wasRead;
  },

  info: () => {
    return `${this.title} by ${this.author}, ${this.pages} pages ${
      this.wasRead ? 'has been read already' : 'not read yet'
    }`;
  },
};

const anotherBook = Object.create(Books2).init('tit', 'auth', '22', true);

let myLibrary = [
  { title: 'a book title', author: 'jk rolling', pages: 5, wasRead: true },
  { title: 'another one', author: 'hp lowcraft', pages: 666, wasRead: false },
];

function addBookToLibrary() {
  //yo
}
