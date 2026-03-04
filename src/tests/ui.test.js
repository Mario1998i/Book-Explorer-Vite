import { describe, it, expect } from "vitest";

import { extractAuthorNames } from "../ui.js";

describe("extractAuthorNames", () => {
    it("restituisce i nomi degli autori correttamente", () => {
        const book = {
            authors: [
                { name: "Author One" },
                { name: "Author Two" }
            ]
        };

        const result = extractAuthorNames(book);

        expect(result).toBe("Autori: Author One, Author Two");
    });

    it("restituisce messaggio se non ci sono autori", () => {
        const book = {};
        const result = extractAuthorNames(book);
        expect(result).toBe("Autori non trovati.");
    });
});