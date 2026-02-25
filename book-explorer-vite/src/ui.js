export function extractAuthorNames(book) {
    const names = (book.authors || []).map(author => author.name).join(", ");
    return names ? `Autori: ${names}` : "Autori non trovati.";
}

export function renderBooks(books, onBookClick) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    if (books.length === 0) {
        resultsContainer.innerHTML = "<p>Nessun libro trovato.";
        return;
    }

    books.forEach(book => {
        const bookEl = document.createElement("div");
        bookEl.className = "book";

        const title = document.createElement("h3");
        title.textContent = book.title;

        const authors = document.createElement("p");

        authors.textContent = extractAuthorNames(book);

        bookEl.addEventListener("click", () => {
            onBookClick(book.key);
        })

        bookEl.appendChild(title);
        bookEl.appendChild(authors);
        resultsContainer.appendChild(bookEl);
    });
}

export function renderDescription(description) {
    const descriptionsContainer = document.getElementById("description");
    descriptionsContainer.innerHTML = 
    `<h2>Descrizione</h2>
    <p>${description}</p>`;

    descriptionsContainer.style.display = "block";
} 