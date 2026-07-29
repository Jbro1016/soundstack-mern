import { describe, it, expect } from "vitest";

import { searchArtists } from "../api/music";

describe("Music API", () => {

    it("searchArtists returns a function", () => {
        expect(searchArtists).toBeDefined();
        expect(typeof searchArtists).toBe("function");
    });

});