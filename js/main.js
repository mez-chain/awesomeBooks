const collection = JSON.parse(localStorage.getItem("collection")) || [];
const btnAdd = document.getElementById("addButton");

//  Show books list
function showBooks() {
  const bookList = document.getElementById("awesomeList");
  bookList.innerHTML = "";

  collection.forEach((book, index) => {
    const bookItem = document.createElement("div");
    bookItem.classList = "book";
    bookItem.innerHTML = `
    <p>${book.title}</p>
    <p>${book.author}</p>
    <button class="removeBtn" onclick="removeBook(${index})">Remove</button>
    `;

    bookList.appendChild(bookItem);
  });
}

//  Add a new book to the collection
function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  if (title && author) {
    const newBook = { title, author };
    collection.push(newBook);

    localStorage.setItem("collection", JSON.stringify(collection));

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";

    showBooks();
  }
}

//  Remove a book from the collection
function removeBook(index) {
  collection.splice(index, 1);

  localStorage.setItem("collection", JSON.stringify(collection));

  showBooks();
}

btnAdd.addEventListener("click", addBook);

showBooks();
