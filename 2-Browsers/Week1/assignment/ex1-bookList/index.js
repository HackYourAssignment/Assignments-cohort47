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
    const listsContainer = document.createElement('ul');
  books.forEach(book => {
    const p = document.createElement('p');
    const list = document.createElement('li');
    const image = document.createElement('img');
    const imageUrl = `${book.title.replaceAll(' ', '_').toLowerCase()}.jpg`;
    image.src = `assets/${imageUrl}`;
    image.alt = `An image of the book '${book.title}'`;
    p.textContent = `${book.title} by ${book.author}`;
    list.appendChild(p);
    list.appendChild(image);
    (book.alreadyRead ? list.classList.add('bg-green') : list.classList.remove('bg-green'));
    listsContainer.appendChild(list);
  });

  return listsContainer;
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