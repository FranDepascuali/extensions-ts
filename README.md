# extensions-ts
Contemplative and deep exploration of extending entities in TypeScript, inspired by Swift-like extensions.

Read about extensions here: [Introducing extensions to TypeScript](https://depa-thoughts.vercel.app/extensions-typescript/).

## Installation
Install the package using npm:
```bash
# Using npm
npm install extensions-ts

# Using Yarn
yarn add extensions-ts

# Using pnpm
pnpm add extensions-ts
```

## Usage

To use a specific function from `extensions-ts`, directly import the extension you need from its file:

```ts
import { Arrays } from 'extensions-ts/Array.extension.js';

const uniqueItems = Arrays.withoutDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(uniqueItems); // Output: [1, 2, 3, 4, 5]
```

## Overview
`extensions-ts` is a TypeScript library offering a collection of functions designed extend other entities. Inspired by Swift-like extensions, this library aims to provide elegant approaches to solving common programming problems in TypeScript.

While extensions-ts provides extensions itself, the main goal of this repository is to inspire developers to embrace the pattern and extend their own entities (as an alternative to OOP-based solutions).

If you are into FP, then this technique will sound familiar as it's functions exported under a
namespace with some restrictions in the structure of these functions (for discoverability reasons).

## Available Extensions
```ts
export declare namespace Arrays {
    function withoutDuplicates<T, K>(array: T[], keyFn?: (item: T) => K): T[];
    function groupBy<T, K extends keyof T>(array: T[], key: K | ((obj: T) => string)): Record<string, T[]>;
    function compactMap<T, U>(array: T[], mapper: (element: T) => U | null): U[];
    function findMap<T, U>(array: T[], mapper: (element: T) => U | null): U | null;
    function intersection<T>(array1: T[], array2: T[]): T[];
    function zip<T, U>(array: T[], array2: U[]): Array<[T, U, number]>;
    function partition<T, M>(xs: T[], pred: (arg0: T) => boolean, transformer: (arg0: T) => M): [M[], M[]];
    function maxBy<T>(array: T[], fn: (item: T, index: number) => number): T | undefined;
    function minBy<T>(array: T[], iteratee: (value: T) => number): T | undefined;
}

export declare namespace Numbers {
    function maxValue(): number;
    function minValue(): number;
    function random(min: number, max: number): number;
}

export declare namespace Objects {
    function isEmpty(obj: any): boolean;
}

export declare namespace Strings {
    function capitalizeFirstLetter(word: string): string;
}
```

## Rationale
The general guidelines for extending an entity are:
1. Extensions should be placed in their own file, typically `<entity>.extension.ts`, although this can vary at the implementer’s discretion. (e.g., `Array.extension.ts`)
2. Extensions are inherently linked to the existence of the entity they extend (without embodying an entity themselves).
3. An entity should be represented by a type from the type system.
4. Extensions are named as the pluralized version of the entity extended.
5. Extension functions can either:
   1. receive the extended entity as the first parameter, along with any additional parameters.
   2. receive no parameter and return a value (i.e: `Numbers.maxValue()`)
6. Extensions can call other extensions when appropriate, modelling behaviors as extensions wherever possible.
7. Extensions should be pure, ensuring that every function is a transformation without side effects.
8.  Extensions can utilize properties or functions previously defined in the entity they extend.

These guidelines ensure that extensions are self-contained, isolated, shareable, and testable by definition.

For a deeper dive into the reasoning behind the design of `extensions-ts`, check out my blog post: [Introducing extensions to TypeScript](https://depa-thoughts.vercel.app/extensions-typescript/).

### Example
Let's consider we want to overload array. We create an array extension `Array.extension.ts`:
```ts
// We're extending Array, so by convention we use the pluralized name Arrays
export namespace Arrays {
    // As it's a function that belongs to an extension, it receives the entity as it's first parameter
    export function compactMap<T, U>(array: T[], mapper: (element: T) => U | null): U[] {
        ...
    }

    // Other functions belonging to the extension
    export function intersection<T>(array: T[], array2: T[]): T[] {
        ...
    }

```

## Tests

To run the tests for `extensions-ts`, follow these steps:

```bash
npm install
npm run test
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

## License

Distributed under the MIT License. See `LICENSE` file for more information.

