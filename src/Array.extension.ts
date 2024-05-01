export namespace Arrays {
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
