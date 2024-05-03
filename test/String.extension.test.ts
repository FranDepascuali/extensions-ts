import { Strings } from '../src/String.extension';

describe('capitalizeFirstLetter', () => {
  it('should capitalize the first letter of a word', () => {
    const word = 'hello';
    const result = Strings.capitalizeFirstLetter(word);
    expect(result).toEqual('Hello');
  });

  it('should convert the rest of the letters to lowercase', () => {
    const word = 'WORLD';
    const result = Strings.capitalizeFirstLetter(word);
    expect(result).toEqual('World');
  });

  it('should handle an empty string', () => {
    const word = '';
    const result = Strings.capitalizeFirstLetter(word);
    expect(result).toEqual('');
  });

  it('should handle a single character string', () => {
    const word = 'a';
    const result = Strings.capitalizeFirstLetter(word);
    expect(result).toEqual('A');
  });

  it('should handle a word with already capitalized first letter', () => {
    const word = 'JavaScript';
    const result = Strings.capitalizeFirstLetter(word);
    expect(result).toEqual('Javascript');
  });
});
