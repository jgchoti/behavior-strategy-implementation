// #todo

'use strict';

/**
 * A function that takes an array of strings, reverses it, and combines the strings
 * it does not modify the original array
 * @param {string[]} arrayOfStrings - an array of strings to concatenate, in reverse order
 * @returns {string} - the array elements joined together, in reverse order
 */

// -------- your solutions --------

const reverse = (arrayOfStrings) => {
  return arrayOfStrings.reverse().join('')
}

const reverseForLoop = (arrayOfStrings) => {
  let reverse = []
  for ( let i = 0 ; i < arrayOfStrings.length; i++){
    reverse.unshift(arrayOfStrings[i])
  }
return reverse.join('')
}

const reverseForLoop2 = (arrayOfStrings) => {
  let reverse = [];
  for (let i = arrayOfStrings.length - 1; i >= 0; i--) {
    reverse.push(arrayOfStrings[i]);
  }
  return reverse;
};



for (const solution of [
  reverse,
  reverseForLoop,
  reverseForLoop2,
  // secretSolution
  ]) {
  describe(solution.name + ': takes an array of strings, reverses it, and combines the strings', () => {
    describe('_', () => {
      it('mix of strings', () => {
        expect(solution(["tL2e4zBv", "7sGfn1J", "RpW9C63a", "yDzF8Lt", "kQ7p6nE"])).toEqual( "kQ7p6nEyDzF8LtRpW9C63a7sGfn1JtL2e4zBv")
      });
         it('empty array', () => {
        expect(solution([])).toEqual( "")
      });
    });
      describe('does not modify the original array', () => {
      it('does not modify the original array', () => {
        let input = ["tL2e4zBv", "7sGfn1J", "RpW9C63a", "yDzF8Lt", "kQ7p6nE"]
        expect(input).toEqual(["tL2e4zBv", "7sGfn1J", "RpW9C63a", "yDzF8Lt", "kQ7p6nE"])
      });
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings does not contain only strings"); } return [...a].reverse().reduce((a, b) => a + b, "") }
