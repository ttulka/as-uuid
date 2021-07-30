import stringify from "./stringify";

// @ts-ignore: decorator
@inline
export default function v4(rnds: Uint8Array): string {
    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    unchecked(rnds[6] = (rnds[6] & 0x0f) | 0x40);
    unchecked(rnds[8] = (rnds[8] & 0x3f) | 0x80);

    return stringify(rnds);
}
