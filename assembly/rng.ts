
const POOL_SIZE = 256;
const rnds8Pool = new Uint8Array(POOL_SIZE); // random values to pre-allocate
let poolPtr = POOL_SIZE;

/**
 * Gets an Uint8Array(16) filled with random values
 */
export default function rng(fn: (array: Uint8Array) => void = randomFill): Uint8Array {
    if (poolPtr > POOL_SIZE - 16) {
        fn(rnds8Pool);
        poolPtr = 0;
    }
    return rnds8Pool.subarray(poolPtr, (poolPtr += 16));
}

/**
 * Default function to fill an array with random values
 */
function randomFill(array: Uint8Array): void {
    for (let i = 0; i < POOL_SIZE; i++) {
        unchecked(array[i] = u8(Math.random() * 256));
    }
}
