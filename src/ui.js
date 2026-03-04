export function extractAuthorNames(book) {
    const names = (book.authors || []).map(author => author.name).join(", ");
    return names ? `Autori: ${names}` : "Autori non trovati.";
}

export function renderBooks(books, container, onBookClick) {
    container.innerHTML = "";

    if (books.length === 0) {
        container.innerHTML = "<p>Nessun libro trovato.</p>";
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
        container.appendChild(bookEl);
    });
}

export function renderDescription(description, container) {
    container.innerHTML = "";

    const title = document.createElement("h2");
    title.textContent = "Descrizione";

    const paragraph = document.createElement("p");
    paragraph.textContent = description;

    container.appendChild(title);
    container.appendChild(paragraph);

    container.style.display = "block";
} 