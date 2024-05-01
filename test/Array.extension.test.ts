import { Arrays } from '../src/Array.extension';

describe('Arrays.withoutDuplicates', () => {
  it('should remove duplicates based on identity by default', () => {
    const array = [1, 2, 2, 3, 4, 4, 4, 5];
    const result = Arrays.withoutDuplicates(array);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an empty array', () => {
    const array: number[] = [];
    const result = Arrays.withoutDuplicates(array);
    expect(result).toEqual([]);
  });

  it('should remove duplicates based on a custom key function', () => {
    const array = [{ id: 1 }, { id: 2 }, { id: 1 }];
    const keyFn = (item: { id: number }) => item.id;
    const result = Arrays.withoutDuplicates(array, keyFn);
    expect(result).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should handle arrays of objects with more complex structures', () => {
    const array = [{ data: { id: 1, value: 'a' } }, { data: { id: 1, value: 'b' } }, { data: { id: 2, value: 'c' } }];
    const keyFn = (item: { data: { id: number; value: string } }) => item.data.id;
    const result = Arrays.withoutDuplicates(array, keyFn);
    expect(result).toEqual([{ data: { id: 1, value: 'a' } }, { data: { id: 2, value: 'c' } }]);
  });

  it('should correctly handle arrays where all elements are unique', () => {
    const array = [3, 1, 4, 1.5, 9, 2.6];
    const result = Arrays.withoutDuplicates(array);
    expect(result).toEqual([3, 1, 4, 1.5, 9, 2.6]);
  });
});
