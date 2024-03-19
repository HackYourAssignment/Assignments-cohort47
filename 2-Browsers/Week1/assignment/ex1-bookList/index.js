//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https://hackyourfuture.github.io/example-pages/Browsers/Week1/1-booklist/

-----------------------------------------------------------------------------*/


function createBookList(books) {


  const bookListUl = document.createElement('ul');
  books.forEach((element) => {
    element.imgUrl;
    const bookTitleAuthor = document.createElement('p');
    const text = `${element.title} by ${element.author}`;
    const newtext = document.createTextNode(text);
    bookTitleAuthor.appendChild(newtext);

    const bookImg = document.createElement('img');
    bookImg.src = `assets/${element.title
      .toLowerCase()
      .replaceAll(' ', '_')}.jpg`;
    bookImg.alt = "Book Image"
    const book = document.createElement('li');

    book.appendChild(bookTitleAuthor);
    book.appendChild(bookImg);

    bookListUl.appendChild(book);

    if (element.alreadyRead) {
      book.style.backgroundColor = 'green';
    } else {
      book.style.backgroundColor = 'red';
    }
  });
  return bookListUl;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
