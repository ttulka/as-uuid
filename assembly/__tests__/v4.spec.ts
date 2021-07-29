import v4 from "../v4";

const rnds = new Uint8Array(16).fill(1);

describe("UUID v4", () => {
    it("generates UUID v4", () => {
        const id = v4(rnds);
        log<string>("UUID: " + id);
        expect<string>(id).toHaveLength(36, "UUID v4 is generated");
    });

    it("sets bits for version", () => {
        const id = v4(rnds);
        log<string>("UUID: " + id);
        expect<string>(id.substr(14, 1)).toBe("4", "UUID[14] is set for version (==='4')");
    });
});
