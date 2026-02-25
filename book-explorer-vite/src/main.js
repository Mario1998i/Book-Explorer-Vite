import "./style.css";

import { fetchBookDetails, fetchBooksByCategory } from "./api.js";
import { renderBooks, renderDescription } from "./ui.js";

// 1. Selezioniamo gli elementi dal DOM
const searchBtn = document.getElementById("search-btn");
const categoryInput = document.getElementById("category-input");

// 2. Ascoltiamo il click sul bottone
searchBtn.addEventListener("click", async () => {
    // 3. Leggiamo il valore inserito dall'utente
    const category = categoryInput.value.trim();
    // 4. Validazione base
    if (category === "") {
        alert("Inserisci una categoria valida");
        return;
    }
    
    // 5. Chiamata all'API: QUI nasce 'books'
    const books = await fetchBooksByCategory(category);

    async function handleBookClick(key) {
        const description = await fetchBookDetails(key);
        renderDescription(description);
    }
    renderBooks(books, handleBookClick);
})