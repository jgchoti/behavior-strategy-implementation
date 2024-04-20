import { middleCharacter } from './middle-character.js';

for (const solution of [middleCharacter]) {
  describe(
    solution.name + 'Checks if the braces in a string are matched.',
    () => {
      it('should return an empty string for an empty input string', () => {
    expect(solution()).toEqual('');
    expect(solution('')).toEqual('');
  });

  it('should return the middle character for a string with odd length', () => {
    expect(solution('abc')).toEqual('b');
    expect(solution('abcdefg')).toEqual('d');
  });

  it('should return the middle two characters for a string with even length', () => {
    expect(solution('ab')).toEqual('ab');
    expect(solution('abcd')).toEqual('bc');
  });

    },
  );
}
