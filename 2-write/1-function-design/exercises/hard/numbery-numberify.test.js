// #todo

'use strict';

/**
 * takes an array of strings and returns a new array of numbers
 *  the new array contains all the numbery strings, cast to numbers
 * does not modify the argument (no side-effects)
 * @param {string[]} arrayOfStrings - the array of strings
 * @returns {number[]} an array containing only numbers, and not NaN
 * @example
 *  ['1', '2', 'e', '.'] // --> [1, 2]
 */

// -------- your solutions --------

const numbery = (arrayOfStrings) => {
  let numberArray = arrayOfStrings.map(Number);
  return numberArray.filter((num) => !isNaN(num));
};




for (const solution of [
  numbery,
  // secretSolution
]) {
  describe(
    solution.name +
      ': takes an array of strings and returns a new array of numbers',
    () => {
      describe('returns an array containing only numbers, and not NaN', () => {
        it("['1', '2', 'e', '.'] --> [1, 2]", () => {
          expect(solution(['1', '2', 'e', '.'])).toEqual([1, 2]);
        });
        it('does not modify the original array', () => {
          const input = ['1', '2', 'e', '.'];
          expect(input).toEqual(['1', '2', 'e', '.']);
        });
        it('works with an empty array', () => {
          const input = [];
          expect(solution(input)).toEqual([]);
        });
        it('works with an array containing only non-numbery strings', () => {
          const input = ['1', '2', 'a', '3', 'b'];
          expect(solution(input)).toEqual([1, 2, 3]);
        });
      });
    },
  );
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings contains non-strings"); } const c = a.map(a => +a), d = c.filter(a => !Number.isNaN(a)); return d }
