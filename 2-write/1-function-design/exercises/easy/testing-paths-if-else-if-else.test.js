// #todo

'use strict';

/**
 * returns a description of how similar two values are
 *  if they are strictly equal -> 'strictly equal'
 *  if they have the same type -> 'same type'
 *  else -> 'totally different'
 
 * @param {any} val1
 * @param {any} val2
 * @returns {string} the values' solution
 */

// -------- your solutions --------

const testingPath = (val1, val2) => {
  if (val1 === val2) {
    return 'strictly equal';
  } else if (typeof val2 === typeof val1) {
    return 'same type';
  } else {
    return 'totally different';
  }
};

const testingPath2 = (val1, val2) => {
  return val1 === val2 ? 'strictly equal' :
    typeof val2 === typeof val1 ? 'same type' :
      'totally different'
};

for (const solution of [
  // testingPath,
  testingPath2,
  // secretSolution
]) {
  describe(solution.name + ': determines how similar two values are', () => {
    describe('when values are strictly equal', () => {
      it('two identical strings -> "strictly equal"', () => {
        expect(solution('hello', 'hello')).toEqual('strictly equal');
      });
      // 1, 1.0
      it('two identical numbers -> "strictly equal"', () => {
        expect(solution(1, 1.0)).toEqual('strictly equal');
      });
      it('two identical booleans -> "strictly equal"', () => {
        expect(solution(true, true)).toEqual('strictly equal');
      });
    });
    describe('when values have the same type', () => {
      it('two different strings -> "same type"', () => {
        expect(solution('Hi', 'Hello')).toEqual('same type');
      });
      it('two different numbers -> "same type"', () => {
        expect(solution(0, -9)).toEqual('same type');
      });
      it('two different booleans -> "same type"', () => {
        expect(solution(true, false)).toEqual('same type');
      });
    });
    describe('when values are nothing alike', () => {
      it('values that are obviously different', () => {
        expect(solution(null, 4)).toEqual('totally different');
      });
      it('values that can be confusing', () => {
        // "4" and 4
        expect(solution('4', 4)).toEqual('totally different');
      });
      it('booleans -> values that can be confusing', () => {
        expect(solution(true, 'true')).toEqual('totally different');
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a, b) { let c = ""; return c = a === b ? "strictly equal" : typeof a == typeof b ? "same type" : "totally different", c }
