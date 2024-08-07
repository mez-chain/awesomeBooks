const collection = JSON.parse(localStorage.getItem('collection')) || [];
const btnAdd = document.getElementById('addButton');
const errorMsg = document.getElementById("error-msg");


class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // Add a new book
  addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    // Form Validation
    validateForm(title, author);

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
    <p>"${book.title}" by ${book.author}</p>
    <button class="removeBtn" onclick="newBookInstance.removeBook(${index})">Remove</button>
    `;

    bookList.appendChild(bookItem);
  });
}

btnAdd.addEventListener('click', () => newBookInstance.addBook());
showBooks();

// Form Validation
function validateForm(title, author) {
  errorMsg.innerHTML = "";
  errorMsg.classList.remove("error");
  errorMsg.classList.remove("success");
  document.getElementById('title').classList.remove("error-input");
  document.getElementById('author').classList.remove("error-input");

  if (title === "" && author !== "") {
    errorMsg.innerHTML = "Please enter the book's title";
    errorMsg.classList.add("error");
    document.getElementById('title').classList.add("error-input");
  } else if (author === "" && title !== "") {
    errorMsg.innerHTML = "Please enter the book's author"
    errorMsg.classList.add("error");
    document.getElementById('author').classList.add("error-input");
  } else if ( title === "" && author === "") {
    errorMsg.innerHTML = "Please enter the book's title and author"
    errorMsg.classList.add("error");
    document.getElementById('title').classList.add("error-input");
    document.getElementById('author').classList.add("error-input");
  } else {
    errorMsg.innerHTML = "A new book added successfully"
    errorMsg.classList.add("success");
 }
}

document.getElementById('title').addEventListener("focus", ( ) => {
  errorMsg.innerHTML = "";
  errorMsg.classList.remove("error");
  document.getElementById('title').classList.remove("error-input");
})

document.getElementById('author').addEventListener("focus", ( ) => {
  errorMsg.innerHTML = "";
  errorMsg.classList.remove("error");
  document.getElementById('author').classList.remove("error-input");
})

// Menu navigation
const menu = document.querySelectorAll(".menu");
const sections = document.querySelectorAll("section");
const borderItems = document.querySelectorAll(".item-border")

menu.forEach((ele) => {
  ele.addEventListener("click", () => {
      sections.forEach((sec) => {
          sec.classList.add("hidden");
      })
      borderItems.forEach((item) => {
        item.classList.add("opacity-0");
        item.classList.remove("opacity-100");
      })
      if (ele.id === "list") {
          document.getElementById("collection").classList.remove("hidden");
          document.getElementById("item-border1").classList.add("opacity-100")
      } else if (ele.id === "add") {
          document.getElementById("addBook").classList.remove("hidden");
          document.getElementById("item-border2").classList.add("opacity-100")
      } else {
          document.getElementById("contact-section").classList.remove("hidden");
          document.getElementById("item-border3").classList.add("opacity-100")
      }
  })
})