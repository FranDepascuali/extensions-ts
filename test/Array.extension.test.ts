import { Arrays } from '../src/Array.extension';

describe('Arrays', () => {
  describe('withoutDuplicates', () => {
    it('should remove duplicates based on identity by default', () => {
      const array = [1, 2, 2, 3, 4, 4, 4, 5];
      const result = Arrays.withoutDuplicates(array);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('withoutDuplicates: should handle an empty array', () => {
      const array: number[] = [];
      const result = Arrays.withoutDuplicates(array);
      expect(result).toEqual([]);
    });

    it('withoutDuplicates: should remove duplicates based on a custom key function', () => {
      const array = [{ id: 1 }, { id: 2 }, { id: 1 }];
      const keyFn = (item: { id: number }) => item.id;
      const result = Arrays.withoutDuplicates(array, keyFn);
      expect(result).toEqual([{ id: 1 }, { id: 2 }]);
    });

    it('withoutDuplicates: should handle arrays of objects with more complex structures', () => {
      const array = [{ data: { id: 1, value: 'a' } }, { data: { id: 1, value: 'b' } }, { data: { id: 2, value: 'c' } }];
      const keyFn = (item: { data: { id: number; value: string } }) => item.data.id;
      const result = Arrays.withoutDuplicates(array, keyFn);
      expect(result).toEqual([{ data: { id: 1, value: 'a' } }, { data: { id: 2, value: 'c' } }]);
    });

    it('withoutDuplicates: should correctly handle arrays where all elements are unique', () => {
      const array = [3, 1, 4, 1.5, 9, 2.6];
      const result = Arrays.withoutDuplicates(array);
      expect(result).toEqual([3, 1, 4, 1.5, 9, 2.6]);
    });

  });

  describe('minBy', () => {
    it('should return the minimum element based on the iteratee function', () => {
      const array = [{ id: 1, value: 5 }, { id: 2, value: 3 }, { id: 3, value: 7 }];
      const iteratee = (item: { id: number; value: number }) => item.value;
      const result = Arrays.minBy(array, iteratee);
      expect(result).toEqual({ id: 2, value: 3 });
    });

    it('should return undefined for an empty array', () => {
      const array: number[] = [];
      const iteratee = (value: number) => value;
      const result = Arrays.minBy(array, iteratee);
      expect(result).toBeUndefined();
    });
  })

  describe('zip', () => {
    it('should zip two arrays correctly', () => {
      const array1 = [1, 2, 3];
      const array2 = ['a', 'b', 'c'];
      const result = Arrays.zip(array1, array2);
      expect(result).toEqual([[1, 'a', 0], [2, 'b', 1], [3, 'c', 2]]);
    });

    // it('should handle arrays of different lengths', () => {
    //   const array1 = [1, 2, 3];
    //   const array2 = ['a', 'b'];
    //   const result = Arrays.zip(array1, array2);
    //   expect(result).toEqual([[1, 'a', 0], [2, 'b', 1]]);
    // });

    it('should handle empty arrays', () => {
      const array1: number[] = [];
      const array2: string[] = [];
      const result = Arrays.zip(array1, array2);
      expect(result).toEqual([]);
    });
  });

  describe('partition', () => {
    it('should correctly partition the array based on the predicate', () => {
      const array = [1, 2, 3, 4, 5];
      const predicate = (x: number) => x % 2 === 0;
      const transformer = (x: number) => x * 2;
      const result = Arrays.partition(array, predicate, transformer);
      expect(result).toEqual([[4, 8], [2, 6, 10]]);
    });

    it('should handle an empty array', () => {
      const array: number[] = [];
      const predicate = (x: number) => x % 2 === 0;
      const transformer = (x: number) => x * 2;
      const result = Arrays.partition(array, predicate, transformer);
      expect(result).toEqual([[], []]);
    });

    it('should handle an array where all elements satisfy the predicate', () => {
      const array = [2, 4, 6, 8];
      const predicate = (x: number) => x % 2 === 0;
      const transformer = (x: number) => x * 2;
      const result = Arrays.partition(array, predicate, transformer);
      expect(result).toEqual([[4, 8, 12, 16], []]);
    });

    it('should handle an array where no elements satisfy the predicate', () => {
      const array = [1, 3, 5, 7];
      const predicate = (x: number) => x % 2 === 0;
      const transformer = (x: number) => x * 2;
      const result = Arrays.partition(array, predicate, transformer);
      expect(result).toEqual([[], [2, 6, 10, 14]]);
    });
  });
});

