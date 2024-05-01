# extensions-ts
Contemplative and deep exploration of extending entities in TypeScript, inspired by Swift-like extensions.

Read about extensions here: [Introducing extensions to TypeScript](https://depa-thoughts.vercel.app/extensions-typescript/).

## Installation
Install the package using npm:
```bash
npm install extensions-ts
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

## Available Extensions
```ts
export declare namespace Arrays {
    function withoutDuplicates<T, K>(array: T[], keyFn?: (item: T) => K): T[];
}
```

## Rationale
The general guidelines for extending an entity are:
1. Extensions should be placed in their own file, typically `<entity>.extension.ts`, although this can vary at the implementer’s discretion. (e.g., `Array.extension.ts`)
2. Extensions are inherently linked to the existence of the entity they extend (without embodying an entity themselves).
3. An entity should be represented by a type from the type system.
4. Extensions are named as the pluralized version of the entity extended.
5. Extensions always receive the extended entity as their first parameter, along with any additional parameters.
6. Extensions should call upon other extensions when appropriate, emphasizing behaviors as extensions wherever feasible.
7. Extensions should be pure, ensuring that every function is a transformation without side effects.
8. Extensions can utilize properties or functions previously defined in the entity they extend.

These guidelines ensure that extensions are self-contained, isolated, shareable, and testable by definition.

For a deeper dive into the reasoning behind the design of `extensions-ts`, check out my blog post: [Introducing extensions to TypeScript](https://depa-thoughts.vercel.app/extensions-typescript/).

While extensions-ts provides extensions themselves, the main goal of this repository is to inspire developers to embrace and extend their own entities (as an alternative to OOP-based solutions).

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

