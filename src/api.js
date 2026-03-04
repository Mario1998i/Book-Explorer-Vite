export async function fetchBooksByCategory(category) {
    const url = `https://openlibrary.org/subjects/${category}.json`;

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
    const url = `https://openlibrary.org${key}.json`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Errore nella risposta dell'API.");
        }
        const data = await response.json();

        if (typeof data.description === "string") {
            return data.description;
        }
        if (data.description && data.description.value) {
            return data.description.value;
        }
        return "Descrizione non disponibile.";
    }

    catch(error) {
        console.error("Errore dettagli:", error);
        return "Descrizione non disponibile.";
    }
}
