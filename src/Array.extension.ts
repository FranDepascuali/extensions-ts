export namespace Arrays {

  /**
   * Removes duplicate elements from an array based on a specified key function.
   * @param array - The array to remove duplicates from.
   * @param keyFn - The function used to extract the key from each element. Defaults to using the element itself as the key.
   * @returns A new array with duplicate elements removed.
   * @template T - The type of elements in the array.
   * @template K - The type of the key extracted from each element.
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

  /**
   * Groups the elements of an array by a specified key.
   *
   * @template T - The type of the elements in the array.
   * @template K - The type of the key.
   * @param {T[]} array - The array to group.
   * @param {K | ((obj: T) => string)} key - The key to group by, can be a property name or a function.
   * @returns {Record<string, T[]>} - An object where the keys are the grouped values and the values are arrays of elements with the same key.
   */
  export function groupBy<T, K extends keyof T>(
    array: T[],
    key: K | ((obj: T) => string)
  ): Record<string, T[]> {
    const keyFn = key instanceof Function ? key : (obj: T) => obj[key]
    return array.reduce((objectsByKeyValue, obj) => {
      const value = keyFn(obj)
      //@ts-ignore
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
      return objectsByKeyValue
    }, {} as Record<string, T[]>)
  }

  /**
   * Applies a mapping function to each element of an array and returns a new array
   * containing the mapped values, excluding any `null` or `undefined` values.
   *
   * @param array - The array to be mapped.
   * @param mapper - The mapping function to be applied to each element.
   * @returns A new array containing the mapped values, excluding `null` or `undefined` values.
   * @template T - The type of the elements in the input array.
   * @template U - The type of the elements in the output array.
   */
  export function compactMap<T, U>(array: T[], mapper: (element: T) => U | null): U[] {
    return array.reduce<U[]>((acc, element) => {
      const mapped = mapper(element);
      if (mapped !== null && mapped !== undefined) {
        acc.push(mapped);
      }
      return acc;
    }, []);
  }

  /**
   * Finds the first non-null and non-undefined mapped value in an array.
   *
   * @template T - The type of the elements in the array.
   * @template U - The type of the mapped values.
   * @param {T[]} array - The array to search.
   * @param {(element: T) => U | null} mapper - The mapping function to apply to each element.
   * @returns {U | null} - The first non-null and non-undefined mapped value, or null if no such value is found.
   */
  export function findMap<T, U>(array: T[], mapper: (element: T) => U | null): U | null {
    for (const element of array) {
      const mapped = mapper(element);
      if (mapped !== null && mapped !== undefined) {
        return mapped;
      }
    }
    return null;
  }

  /**
   * Returns an array containing the intersection of two arrays.
   * The intersection is calculated based on the common elements between the two arrays.
   *
   * @template T - The type of the elements in the arrays.
   * @param {T[]} array1 - The first array.
   * @param {T[]} array2 - The second array.
   * @returns {T[]} - An array containing the intersection of the two input arrays.
   */
  export function intersection<T>(array1: T[], array2: T[]): T[] {
    return array1.filter((value) => array2.includes(value));
  }

  /**
   * Zips two arrays together, creating an array of tuples containing elements from both arrays and their corresponding indices.
   * This implementation only zips up to the length of the shorter array to avoid 'undefined' values in the output tuples.
   * @param array The first array.
   * @param array2 The second array.
   * @returns An array of tuples, where each tuple contains an element from the first array, an element from the second array, and their corresponding index.
   * @template T The type of elements in the first array.
   * @template U The type of elements in the second array.
   */
  export function zip<T, U>(array: T[], array2: U[]): Array<[T, U, number]> {
    const minLength = Math.min(array.length, array2.length);
    return Array.from({ length: minLength }, (v, index) => [array[index], array2[index], index]);
  }

  /**
   * Partitions an array into two separate arrays based on a predicate function.
   * The elements that satisfy the predicate are transformed using a transformer function.
   *
   * @template T - The type of the elements in the input array.
   * @template M - The type of the elements in the output arrays.
   * @param {T[]} xs - The input array to be partitioned.
   * @param {(arg0: T) => boolean} pred - The predicate function used to determine the partition.
   * @param {(arg0: T) => M} transformer - The transformer function used to transform the elements that satisfy the predicate.
   * @returns {[M[], M[]]} - An array containing two arrays: the first array contains the transformed elements that satisfy the predicate,
   *                        and the second array contains the transformed elements that do not satisfy the predicate.
   */
  export function partition<T, M>(
    xs: T[],
    pred: (arg0: T) => boolean,
    transformer: (arg0: T) => M,
  ): [M[], M[]] {
    const trues: M[] = [];
    const falses: M[] = [];

    xs.forEach((x) => {
      if (pred(x)) {
        trues.push(transformer(x));
      } else {
        falses.push(transformer(x));
      }
    });

    return [trues, falses];
  }

  /**
   * Returns the maximum element of an array based on a scoring function.
   * If multiple elements have the same maximum score, the first one encountered will be returned.
   *
   * @template T - The type of elements in the array.
   * @param {T[]} array - The array to find the maximum element from.
   * @param {(item: T, index: number) => number} fn - The scoring function that determines the score of each element.
   * @returns {T | undefined} - The maximum element of the array, or undefined if the array is empty.
   */
  export function maxBy<T>(array: T[], fn: (item: T, index: number) => number): T | undefined {
    let maxItem: T | undefined = undefined;
    let maxScore: number = -Infinity;

    array.forEach((item, index) => {
      if (item) {
        const score = fn(item, index);
        if (maxItem === undefined || score > maxScore) {
          maxScore = score;
          maxItem = item;
        }
      }
    });

    return maxItem;
  }

  /**
   * Returns the minimum element of an array based on the result of the iteratee function.
   * If the array is empty, undefined is returned.
   *
   * @template T - The type of the elements in the array.
   * @param {T[]} array - The array to iterate over.
   * @param {(value: T) => number} iteratee - The iteratee function to determine the value to compare.
   * @returns {T | undefined} - The minimum element of the array, or undefined if the array is empty.
   */
  export function minBy<T>(array: T[], iteratee: (value: T) => number): T | undefined {
    if (array.length === 0) return undefined;

    return array.reduce((acc, current) => {
      return iteratee(current) < iteratee(acc) ? current : acc;
    }, array[0]);
  }
}
