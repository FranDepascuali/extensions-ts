export namespace Numbers {
  /**
   * Returns the maximum representable value in JavaScript.
   *
   * @returns The maximum representable value in JavaScript.
   */
  export function maxValue() {
    return Number.MAX_VALUE
  }

  /**
   * Returns the minimum representable value of a number in JavaScript.
   *
   * @returns The minimum representable value of a number.
   */
  export function minValue() {
    return Number.MIN_VALUE
  }

  /**
   * Generates a random number between the specified minimum and maximum values.
   * The generated number is inclusive of both the minimum and maximum values.
   *
   * @param min The minimum value for the random number.
   * @param max The maximum value for the random number.
   * @returns A random number between the specified minimum and maximum values.
   */
  export function random(min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min // The maximum is inclusive and the minimum is inclusive
  }
}
