// #todo

'use strict';

/**
 * returns true if the value is truthy
 * returns false if the value is falsy
 * @param {any} value
 * @returns {boolean}
 */

// -------- your solutions --------
const isTruthy = (value) => {
  if (value) {
    return true;
  } else {
    return false;
  }
};
const isTruthy2 = (value) => {
  return Boolean(value);
};
for (const solution of [
  isTruthy,
  // secretSolution,
  isTruthy2
]) {
  /* Execution Paths
      when testing conditionals, you need to be test all paths
  */
  describe(solution.name + ': determines if a value is truthy', () => {
    describe('solution can identify truthy values', () => {
      it('non-empty strings -> true', () => {
        const actual = solution('hi');
        expect(actual).toEqual(true);
      });
      it('numbers that are not 0 or NaN -> true', () => {
        const actual = solution(99);
        expect(actual).toEqual(true);
      });
      it('true -> true', () => {
        expect(solution(true)).toEqual(true);
      });
    });
    describe('solution can identify falsy values', () => {
      const result = false;
      it('"" -> false', () => {
        expect(solution('')).toEqual(result);
      });
      it('0 -> false', () => {
        expect(solution(0)).toEqual(result);
      });
      it('NaN -> false', () => {
        expect(solution(NaN)).toEqual(result);
      });
      it('false -> false', () => {
        expect(solution(false)).toEqual(result);
      });
      it('undefined -> false', () => {
        expect(solution(undefined)).toEqual(result);
      });
      it('null -> false', () => {
        expect(solution(null)).toEqual(result);
      });
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(value) { return value ? true : false; }
