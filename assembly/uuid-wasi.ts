import "wasi";

import rng from "./rng";
import stringify from "./stringify";

export default function uuid(): string {
    return stringify(rng(crypto.getRandomValues));
}
