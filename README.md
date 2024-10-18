# uuidv7

[![JSR](https://jsr.io/badges/@quentinadam/uuidv7)](https://jsr.io/@quentinadam/uuidv7)
[![CI](https://github.com/quentinadam/deno-uuidv7/actions/workflows/ci.yml/badge.svg)](https://github.com/quentinadam/deno-uuidv7/actions/workflows/ci.yml)

A simple UUIDv7 generation function.

## Usage

```ts
import generateUUIDv7 from '@quentinadam/uuidv7';

console.log(generateUUIDv7()); // generate a UUIDv7 based on the current time

console.log(generateUUIDv7(new Date('2024-01-01'))); // generate a UUIDv7 based on the specific time
```
