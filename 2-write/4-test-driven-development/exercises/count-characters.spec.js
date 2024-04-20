import { countCharacters, countCharacterShort } from './count-characters.js';

for (const solution of [countCharacters,
countCharacterShort
]) {
  // the main test suite for the function
  describe(
    solution.name +
      ': Counts how many times each character appears in a string.',
    () => {
      it("countCharacters('hi') => { h: 1, i: 1 }", () => {
        expect(solution('hi')).toEqual({ h: 1, i: 1 });
      });
      it("countCharacters('hiiii') => { h: 1, i: 4  }", () => {
        expect(solution('hiiii')).toEqual({ h: 1, i: 4 });
      });
      it("countCharacters('hello') => { h: 1, e: 1, l: 2, o: 1 }", () => {
        expect(solution('hello')).toEqual({ h: 1, e: 1, l: 2, o: 1 });
      });

      it("countCharacters('racecar') => { r: 2, a: 2, c: 2, e: 1 }", () => {
        expect(solution('racecar')).toEqual({ r: 2, a: 2, c: 2, e: 1 });
      });

      it("countCharacters('12345') => { '1': 1, '2': 1, '3': 1, '4': 1, '5': 1 }", () => {
        expect(solution('12345')).toEqual({ 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 });
      });

      it("countCharacters('') => {}", () => {
        expect(solution('')).toEqual({});
      });

      it('countCharacters() => {}', () => {
        expect(solution()).toEqual({});
      });
    },
  )}