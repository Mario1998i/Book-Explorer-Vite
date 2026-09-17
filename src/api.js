const API_URL = import.meta.env.API_URL || "http://localhost:3000";

export async function fetchBooksByCategory(category) {
    const url = `${API_URL}/api/books?category=${category}`;

    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error("Errore nella risposta dell'API.");
        }
        const data = await response.json();
        return data.works || [];
    }
    catch(error) {
        console.error("Errore API:", error);
        return [];
    }
}

export async function fetchBookDetails(key) {
    const url = `${API_URL}/api/book-details?key=${key}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Errore nella risposta dell'API.");
        }
        const data = await response.json();
        return data;
    }

    catch(error) {
        console.error("Errore dettagli:", error);
        return "Descrizione non disponibile.";
    }
}
