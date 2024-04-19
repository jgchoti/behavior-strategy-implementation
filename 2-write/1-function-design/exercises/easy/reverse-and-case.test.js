// #todo

'use strict';

/**
 * reverses a string and sets all the characters to upper or lower case
 * @param {string} [text=''] - the text to reverse and casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the reversed text in all lower or upper case
 */

// -------- your solutions --------

const reverseAndCase = (text = '', lowerCase = true) => {
  let reversedText = text.split('').reverse().join('');
  return lowerCase === true
    ? reversedText.toLowerCase()
    : reversedText.toUpperCase();
};

const reverseAndCase2 = (text = '', lowerCase = true) => {
  let reversedText = '';
  let txtArray = text.split('')
  for(let i = 0; i < txtArray.length; i++){
    reversedText = txtArray[i] + reversedText
  }
  return lowerCase === true
    ? reversedText.toLowerCase()
    : reversedText.toUpperCase();
};


for (const solution of [
  // reverseAndCase,
  reverseAndCase2,
  // secretSolution
]) {
  describe(
    solution.name + ': reverses a string then sets to lower or upper case',
    () => {
      describe("the function's default parameters", () => {
        it('second parameter defaults to true', () => {
          expect(solution('asdf')).toEqual('fdsa');
        });
        it('first parameter defaults to an empty string', () => {
          expect(solution()).toEqual('');
        });
      });
      // write the tests indicated by the comments
      describe('when set to lower case', () => {
        // when the text is an empty string
        it('text is an empty string', () => {
          expect(solution('', true)).toEqual('');
        });
        // when the text is all upper case
        it('text is all upper case', () => {
          expect(solution('ABCDEF', true)).toEqual('fedcba');
        });
        // when the text is all lower case
        it('text is all lower case', () => {
          expect(solution('hello', true)).toEqual('olleh');
        });
        // when the text is mixed upper and lower case
        it('text is mixed upper and lower case', () => {
          expect(solution('HEllo', true)).toEqual('olleh');
        });
        // when the text contains punctuation
        it('text contains punctuation', () => {
          expect(solution('Question Mark ( ? )', true)).toEqual(
            ') ? ( kram noitseuq',
          );
        });
        // when the text contains numbers
        it('text contains numbers', () => {
          expect(solution('H3110', true)).toEqual('0113h');
        });
      });
      describe('when set to upper case', () => {
        // when the text is an empty string
        it('text is an empty string', () => {
          expect(solution('', false)).toEqual('');
        });
        it('text is all upper case', () => {
          expect(solution('ABCDEF', false)).toEqual('FEDCBA');
        });
        // when the text is all lower case
        it('text is all lower case', () => {
          expect(solution('hello', false)).toEqual('OLLEH');
        });
        // when the text is mixed upper and lower case
        it('text is mixed upper and lower case', () => {
          expect(solution('HEllo', false)).toEqual('OLLEH');
        });
        // when the text contains punctuation
        it('text contains punctuation', () => {
          expect(solution('Question Mark ( ? )', false)).toEqual(
            ') ? ( KRAM NOITSEUQ',
          );
        });
        it('text contains numbers', () => {
          expect(solution('H3110', false)).toEqual('0113H');
        });
      });
    },
  );
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; for (let d = a.length - 1; 0 <= d; d--)c += a[d]; let d = ""; return d = b ? c.toLowerCase() : c.toUpperCase(), d }
