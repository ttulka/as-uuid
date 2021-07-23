import stringify from "../stringify";

const BYTES: u8[] = [
    0x0f, 0x5a, 0xbc, 0xd1, 0xc1, 0x94, 0x47, 0xf3, 0x90, 0x5b, 0x2d, 0xf7, 0x26, 0x3a, 0x08, 0x4b
];

describe("stringify", () => {
    it("stringifies array", () => {
        const str = stringify(Uint8Array.wrap(BYTES.buffer));
        log<string>("stringified: " + str);
        expect<string>(str).toBe("0f5abcd1-c194-47f3-905b-2df7263a084b");
    });

    it("stringifies array with offset", () => {
        const shifted = [u8(0), u8(0), u8(0)].concat(BYTES);
        const str = stringify(Uint8Array.wrap(shifted.buffer), 3);
        log<string>("stringified: " + str);
        expect<string>(str).toBe("0f5abcd1-c194-47f3-905b-2df7263a084b");
    });
});
