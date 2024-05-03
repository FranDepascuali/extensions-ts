export abstract class Objects {
  /**
   * Checks if an object is empty.
   * @param obj - The object to check.
   * @returns `true` if the object is empty, `false` otherwise.
   */
  static isEmpty(obj: any): boolean {
    if (!obj) {
      return true;
    }

    return Object.keys(obj).length === 0;
  }
}
