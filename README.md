# as-uuid

[AssemblyScript](https://github.com/AssemblyScript/assemblyscript) library to generate RFC-compliant UUIDs v4 (random) 🚀 

## Install

```sh
npm install --save as-uuid
```

## Use

Generate a random UUID string:

```typescript
import uuid from "as-uuid";

const id: string = uuid();  

id; // "01234567-89abc-def01-2345-6789abcdef01"
```

### Using NativeMath

The library use `Math.random` by default to generate random numbers. 

This requires a seed for the random number generator to be imported from the host:

```js
WebAssembly.instantiateStreaming(fetch('my.wasm'), {
  env: {
    seed: Date.now,
    // ...
  }
});
```

Notice that the seed is provided automatically when the [loader](https://www.assemblyscript.org/loader.html) is used or when WASI is imported.

More details at https://www.assemblyscript.org/stdlib/math.html#using-nativemath

### Using WASI

Alternatively, [WASI](https://wasi.dev) can be used to import the random number generator:

```typescript
import uuid from "as-uuid/uuid-wasi";

const id: string = uuid();  

id; // "01234567-89abc-def01-2345-6789abcdef01"
```

```js
WebAssembly.instantiateStreaming(fetch('my.wasm'), {
  wasi_snapshot_preview1: // ...
});
```

## Build

The `assembly` directory contains AS source code.

```sh
npm i
npm run asbuild
```

## Test

The `assembly/__tests__` directory contains all unit tests.

```sh
npm test
npm run test:wasi
```

## Licence

[MIT](https://github.com/ttulka/as-uuid/blob/main/LICENSE)
