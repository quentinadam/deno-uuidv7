# @quentinadam/uuidv7

[![JSR][jsr-image]][jsr-url] [![NPM][npm-image]][npm-url] [![CI][ci-image]][ci-url]

A simple UUIDv7 generation function.

## Usage

```ts
import generateUUIDv7 from '@quentinadam/uuidv7';

console.log(generateUUIDv7()); // generate a UUIDv7 based on the current time

console.log(generateUUIDv7(new Date('2024-01-01'))); // generate a UUIDv7 based on a specific time
```

[ci-image]: https://img.shields.io/github/actions/workflow/status/quentinadam/deno-uuidv7/ci.yml?branch=main&logo=github&style=flat-square
[ci-url]: https://github.com/quentinadam/deno-uuidv7/actions/workflows/ci.yml
[npm-image]: https://img.shields.io/npm/v/@quentinadam/uuidv7.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@quentinadam/uuidv7
[jsr-image]: https://jsr.io/badges/@quentinadam/uuidv7?style=flat-square
[jsr-url]: https://jsr.io/@quentinadam/uuidv7
