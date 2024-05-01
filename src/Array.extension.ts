export namespace Arrays {
  /**
   * Removes duplicate elements from an array based on a specified key.
   * This function filters out elements that have a duplicate key value as determined by the keyFn function.
   * If no key function is provided, it defaults to using the element itself as the key.
   *
   * @template T - The type of elements in the input array.
   * @template K - The type of the key used to determine uniqueness (defaults to the same type as T if not specified).
   *
   * @param {T[]} array - The array from which duplicates will be removed.
   * @param {function(T): K} [keyFn=(item: T) => item as unknown as K] - A function that takes an element of the array
   * and returns a value to use as the key for determining duplicates. By default, the element itself is used as the key.
   *
   * @returns {T[]} A new array with duplicates removed based on the key returned by keyFn.
   *
   * @example
   * // Remove duplicates from an array of numbers using the numbers themselves as keys
   * const numbers = [1, 2, 2, 3, 4, 4, 5];
   * const uniqueNumbers = Arrays.withoutDuplicates(numbers);
   * console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
   *
   * @example
   * // Remove duplicates from an array of objects based on a specific property
   * interface Person {
   *   id: number;
   *   name: string;
   * }
   * const people: Person[] = [
   *   { id: 1, name: 'Alice' },
   *   { id: 2, name: 'Bob' },
   *   { id: 1, name: 'Alice' },
   *   { id: 3, name: 'Charlie' },
   * ];
   * const uniquePeople = Arrays.withoutDuplicates(people, person => person.id);
   * console.log(uniquePeople); // Output: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }]
   */
  export function withoutDuplicates<T, K>(
    array: T[],
    keyFn: (item: T) => K = (item: T) => item as unknown as K,
  ): T[] {
    const seen = new Set();
    return array.filter((item) => {
      const value = keyFn(item);
      if (seen.has(value)) {
        return false;
      }
      seen.add(value);
      return true;
    });
  }
}
  export function withoutDuplicates<T, K>(
    array: T[],
    keyFn: (item: T) => K = (item: T) => item as unknown as K,
  ): T[] {
    const seen = new Set();
    return array.filter((item) => {
      const value = keyFn(item);
      if (seen.has(value)) {
        return false;
      }
      seen.add(value);
      return true;
    });
  }
}
