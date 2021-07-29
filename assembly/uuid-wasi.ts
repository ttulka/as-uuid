import "wasi";

import rng from "./rng";
import v4 from "./v4";

export default function uuid(): string {
    return v4(rng(crypto.getRandomValues));
}
