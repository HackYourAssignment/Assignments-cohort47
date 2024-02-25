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
//cspell: enable

function createBookList(books) {
  const bookList = document.createElement('ul');
  books.forEach((book) => {
    const bookTitle = document.createElement('p');
    bookTitle.textContent = `${book.title} by ${book.author}`;
    const bookCover = document.createElement('img');
    bookCover.src = book.bookCover;
    bookCover.alt = `cover image of the book, ${book.title}`;
    const listItem = document.createElement('li');
    listItem.appendChild(bookTitle);
    listItem.appendChild(bookCover);
    listItem.style.backgroundColor = book.alreadyRead ? 'green' : 'red';
    bookList.appendChild(listItem);
  });
  return bookList;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      bookCover: 'https://media.s-bol.com/7ov383lj3Rr/800x1200.jpg',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      bookCover: 'https://media.s-bol.com/O5MgYVgzEyvp/86qKV8L/783x1200.jpg',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      bookCover: 'https://m.media-amazon.com/images/I/71f743sOPoL._SY466_.jpg',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
