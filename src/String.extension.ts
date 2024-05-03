export namespace Strings {
  /**
   * Capitalizes the first letter of a word.
   *
   * @param word - The word to capitalize.
   * @returns The word with the first letter capitalized.
   */
  export function capitalizeFirstLetter(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  }

}
