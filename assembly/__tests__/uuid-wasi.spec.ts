import uuid from "../uuid-wasi";

describe("UUID using WASI", () => {
    it("generates UUID", () => {
        const id = uuid();
        log<string>("UUID: " + id);
        expect<string>(id).toHaveLength(36, "UUID is generated");
    });

    it("generates random UUIDs", () => {
        const id1 = uuid();
        const id2 = uuid();
        log<string>("UUID #1: " + id1);
        log<string>("UUID #2: " + id2);
        expect<string>(id1).not.toBe(id2);
    });

    it("generates a lot of UUIDs", () => {
        const count = 1000;
        const uuids = new Array<string>(count);
        for (let i = 0; i < count; i++) {
            const id = uuid();
            expect<string>(id).toHaveLength(36);

            let alreadyGenerated = false; 
            for (let j = 0; j < i; j++) {
               if (uuids[j] == id) {
                  alreadyGenerated = true;
               }
            }
            expect<boolean>(alreadyGenerated).toBeFalsy();
            
            uuids[i] = id;
        }
    });
});
