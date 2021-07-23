import rng from "../rng";

describe("rng", () => {
    it("generates values", () => {
        const values = rng();
        log<string>("rng: " + values.toString());
        expect(values).toHaveLength(16);
    });

    it("generates random values", () => {
        const values1 = rng();
        const values2 = rng();
        log<string>("rng #1: " + values1.toString());
        log<string>("rng #2: " + values2.toString());
        expect(values1).not.toBe(values2);
    });
});
