// // Use classes
const collection = JSON.parse(localStorage.getItem('collection')) || [];
const btnAdd = document.getElementById('addButton');

class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  
  // Add a new book
  addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    if (title && author) {
      const newBook = new Books(title, author);
      collection.push(newBook);

      localStorage.setItem('collection', JSON.stringify(collection));

      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
      showBooks();
    }
  }

  // Remove a book
  removeBook(index) {
    collection.splice(index, 1);

    localStorage.setItem('collection', JSON.stringify(collection));

    showBooks();
  }
}

// Create an instance
const newBookInstance = new Books();

// Show books collection
function showBooks() {
  const bookList = document.getElementById('awesomeList');
  bookList.innerHTML = '';

  collection.forEach((book, index) => {
    const bookItem = document.createElement('div');
    bookItem.classList = 'book';
    bookItem.innerHTML = `
    <p>${book.title}</p>
    <p>${book.author}</p>
    <button class="removeBtn" onclick="newBookInstance.removeBook(${index})">Remove</button>
    `;

    bookList.appendChild(bookItem);
  });
}

btnAdd.addEventListener('click', () => newBookInstance.addBook());
showBooks();