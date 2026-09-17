import cors from "cors";
import express from "express";

const app = express();

app.use(cors());

app.get("/api/books", async (req, res) => {
    const category = req.query.category;

    try {
        const response = await fetch(`https://openlibrary.org/subjects/${category}.json`);

        if (!response.ok) {
            throw new Error(`Errore HTTP: ${response.status}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Errore nel recupero dei libri"});
    }
});

app.get("/api/book-details", async (req, res) => {
    const key = req.query.key;

    try {
        const response = await fetch(`https://openlibrary.org${key}.json`);

        if (!response.ok) {
            throw new Error(`Errore HTTP: ${response.status}`)
        }

        const data = await response.json();

        if (typeof data.description === "string") {
            res.json(data.description);
            return;
        }

        if (data.description && typeof data.description.value) {
            res.json(data.description.value);
            return;
        }
    } catch (error) {
        res.status(500).join({ error: "Errore nel recupero della descrizione"});
    }
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server avviato sulla porta ${PORT}`);
});