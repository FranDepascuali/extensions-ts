# ts-extensions
Contemplative and deep exploration of extending entities in TypeScript (inspired by Swift-like extensions)

## Usage

To use the functions from `ts-extensions`, import the extension you need:

```ts
import { Arrays } from 'ts-extensions';

const uniqueItems = Arrays.withoutDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(uniqueItems); // Output: [1, 2, 3, 4, 5]
```

## Overview
`ts-extensions` is a TypeScript library offering a collection of functions designed extend other entities. Inspired by Swift-like extensions, this library aims to provide elegant approaches to solving common programming problems in TypeScript.

The general guidelines for extending an entity are:
1. Extensions should be placed in their own file, typically <entity>.extension.ts, although this can vary at the implementer’s discretion. (i.e: `Array.extension.ts`)
2. Extensions are inherently linked to the existence of the entity they extend, without embodying an entity themselves.
3. An entity should be represented by a type from the type system.
4. Extensions are named as the pluralized version of the entity extended.
5. Extensions always receive the extended entity as their first parameter, along with any additional necessary parameters.
6. Extensions should call upon other extensions when appropriate, emphasizing behaviors as extensions wherever feasible (instead of methods).
7. Extensions should be pure, ensuring that every function is a transformation without side effects.
8. Extensions can utilize properties or functions previously defined in the entity they extend.

Given the guidelines, we can ensure that extensions are self-contained, isolated, shareable and testable by definition.

## Installation
Install the package using npm:
```bash
npm install ts-extensions
```

## Tests

To run the tests for `ts-extensions`, follow these steps:

```bash
npm install
npm run test
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

## License

Distributed under the MIT License. See `LICENSE` file for more information.

