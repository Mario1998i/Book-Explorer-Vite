# 📚 Book Explorer

Book Explorer è un'applicazione web che permette di cercare libri per categoria utilizzando le API di Open Library.

L’utente può:
- Cercare una categoria
- Visualizzare titolo e autori
- Leggere la descrizione completa del libro

---

## 🚀 Live Demo

👉 https://book-explorer-vite.netlify.app

---

## 🛠 Tecnologie utilizzate

- JavaScript (ES6+)
- Vite
- Vitest
- Open Library API
- Netlify
- Git & GitHub

---

## 🏗 Architettura

Il progetto è organizzato in modo modulare:

- api.js → gestione chiamate API  
- ui.js → rendering e manipolazione DOM  
- main.js → coordinamento della logica  

Questa separazione migliora manutenibilità e testabilità.

---

## 🧪 Testing

È stato utilizzato Vitest per testare la funzione di estrazione dei nomi degli autori, verificando:

- Caso con autori presenti  
- Caso senza autori  
