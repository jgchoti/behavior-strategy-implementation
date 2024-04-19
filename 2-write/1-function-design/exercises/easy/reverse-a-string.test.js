// #todo

'use strict';

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */

// -------- your solutions --------

const reverseString = (toReverse='') => {
 let result = ''
 let toReverseArray = toReverse.split('')
 for (let i = 0; i < toReverseArray.length; i++){
   result = toReverseArray[i] + result
 }
return result
}

const reverseString2 = (toReverse='') => {
 return toReverse.split('').reverse().join('')
}

for (const solution of [
  // reverseString, 
    reverseString2,
  // secretSolution
  ]) {
  // the main test suite for the function
  describe(solution.name + ': reverses a string', () => {
    it('default parameter is an empty string -> ""', () => {
      expect(solution()).toEqual('');
    });
    it('an empty string -> ""', () => {
      expect(solution('')).toEqual('');
    });
    it('a string with all capital letters', () => {
      expect(solution('ASDF')).toEqual('FDSA');
    });
    // write at least 5 more tests ...
     it('a string with capital letters and lowercase letters', () => {
      expect(solution('AbCdEfG')).toEqual('GfEdCbA');
    });
    it('a string with space in between', () => {
      expect(solution('A B C ')).toEqual(' C B A');
    });
    it('a string with numbers', () => {
      expect(solution('A2b3')).toEqual('3b2A');
    });
    it('a string with special charecters', () => {
      expect(solution('a?\"')).toEqual('"\?a');
    });
    it('a long sentences', () => {
      expect(solution('repeated is declared and returnd, but never modified')).toEqual('deifidom reven tub ,dnruter dna deralced si detaeper');
    });
    it('TypeError', () => 
    expect (() => {solution(-5)}).toThrow(TypeError));
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
