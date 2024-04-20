// #todo

'use strict';

/**
 *  returns an array with length "max"
 *    each index that's divisible by 3 and 5 stores "fizzbuzz"
 *    each index that's divisible by only 3 stores "fizz"
 *    each index that's divisible by only 5 stores "buzz"
 *    all other indexes store the same number as that index
 *  @param {number} [max=0] - how many numbers to check
 *    max must be an integer greater than or equal to 0
 *  @returns {(number|string)[]} an array of length max
 */

// -------- your solutions --------

const whileLoop = (max) => {
// Initialize countUp to 0 to start counting from.
// Initialize an empty array result to store the generated sequence.
  let countUp = 0;
  const result = [];

// The while loop continues iterating as long as countUp is less than max.
  while (countUp < max) {

// Determine the next entry based on the current value of countUp.
// If countUp is divisible by both 3 and 5 (i.e., divisible by 15), add 'fizzbuzz' to the result.
// If countUp is divisible by 5 but not by 3, add 'buzz' to the result.
// If countUp is divisible by 3 but not by 5, add 'fizz' to the result.
// If countUp is not divisible by either 3 or 5, add countUp itself to the result.
    const nextEntry =
      countUp % 15 === 0
        ? 'fizzbuzz'
        : countUp % 5 === 0
        ? 'buzz'
        : countUp % 3 === 0
        ? 'fizz'
        : countUp;
    
    result.push(nextEntry);
// Increment countUp by 1 in each iteration to move to the next number.
    countUp++;
  }
// Once the loop completes, return the generated result array.
  return result;
};

/* describe this solution's strategy
 */
const oneLineforLoop = (max) => {
  const result = [];
  for (let i = 0; i < max; i++)
    result.push((i % 3 === 0 ? 'fizz' : '') + (i % 5 === 0 ? 'buzz' : '') || i);
  return result;

  // https://codeburst.io/javascript-breaking-down-the-shortest-possible-fizzbuzz-answer-94a0ad9d128a
};

/* describe this solution's strategy
 */
const manySmallFunctions = (max) => {
  const threeDivides = (n) => n % 3 === 0;
  const fiveDivides = (n) => n % 5 === 0;
  const fifteenDivides = (n) => n % 15 === 0;

  const fizzbuzzOrNumber = (num) => {
    if (fifteenDivides(num)) {
      return 'fizzbuzz';
    } else if (threeDivides(num)) {
      return 'fizz';
    } else if (fiveDivides(num)) {
      return 'buzz';
    } else {
      return num;
    }
  };

// Array.from({length: 10}, (_, i) => i + 1)
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // https://stackoverflow.com/a/33352604
  const arrayOfIndexes = [...Array(max).keys()];
  const fizzBuzzedArray = arrayOfIndexes.map(fizzbuzzOrNumber);
  return fizzBuzzedArray;
};

// -------- your solutions --------

for (const solution of [
  secretSolution,
  // whileLoop,
  oneLineforLoop,
  manySmallFunctions,
]) {
  describe(solution.name + ': fizzbuzz', () => {
    describe('numbers divisible by 3', () => {
      it('3 should return an array with the first 3 values', () => {
        expect(solution(3)).toEqual(['fizzbuzz', 1, 2]);
      });
      // write more of these
    });
    describe('numbers divisible by neither 3 nor 5', () => {
      it('4 should return an array with the first 4 values', () => {
        expect(solution(4)).toEqual(['fizzbuzz', 1, 2, 'fizz']);
      });
      // write more of these
    });
    describe('numbers divisible by 5', () => {
      it('5 should return an array with the first 5 values', () => {
        expect(solution(5)).toEqual(['fizzbuzz', 1, 2, 'fizz', 4]);
      });
      // write more of these
    });
    describe('numbers divisible by 3 and 5', () => {
      it('15 should return an array with the first 15 values', () => {
        expect(solution(15)).toEqual([
          'fizzbuzz',
          1,
          2,
          'fizz',
          4,
          'buzz',
          'fizz',
          7,
          8,
          'fizz',
          'buzz',
          11,
          'fizz',
          13,
          14,
        ]);
      });
      // write more of these
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if ("number" != typeof a) { throw new TypeError("max is not a number"); } if (0 > a) { throw new RangeError("max is less than 0"); } if (!Number.isInteger(a)) { throw new RangeError("max is not an integer"); } const b = []; for (let c = 0; c < a; c++) { 0 == c % 3 && 0 == c % 5 ? b.push("fizzbuzz") : 0 == c % 3 ? b.push("fizz") : 0 == c % 5 ? b.push("buzz") : b.push(c); } return b; }
