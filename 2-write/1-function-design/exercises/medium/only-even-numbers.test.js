// #todo

'use strict';

/**
 * removes all odd numbers from an array of numbers
 * does not modify the argument (no side-effects)
 * @param {number[]} arrayOfNumbers - the array of numbers to filter
 * @returns {number[]} an array with only even numbers
 */

// -------- your solutions --------

const onlyEvenNumbers = (arrayOfNumbers) => {
  return arrayOfNumbers.filter(num => num % 2 === 0)
}


const onlyEvenNumbers2 = (arrayOfNumbers) => {
  return arrayOfNumbers.reduce((acc, num) => {
    if (num % 2 === 0) {
      acc.push(num);
    }
    return acc;
  }, []);
};

for (const solution of [
  onlyEvenNumbers,
    onlyEvenNumbers2,
  // secretSolution
  ]) {
  describe(
    solution.name + ':removes all odd numbers from an array of numbers',
    () => {
      describe('normal input', () => {
        it('[1, 2, 3, 4, 5] -> [2, 4]', () => {
          expect(solution([1, 2, 3, 4, 5])).toEqual([2, 4]);
        });
        it('Empty array', () => {
          expect(solution([])).toEqual([]);
        });
        it('Array with only odd numbers', () => {
          expect(solution([1, 3, 5, 7, 9])).toEqual([]);
        });
        it('Array with only even numbers', () => {
          expect(solution([2, 4, 6, 8, 10])).toEqual([2, 4, 6, 8, 10]);
        });
      });
      describe('does not modify the argument', () => {
        it('does not modify the argument', () => {
          const input = [1, 2, 3, 4, 5];
          expect((input)).toEqual([1, 2, 3, 4, 5]);
        });
      });
    },
  );
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfNumbers is not an array"); } const b = a.some(a => "number" != typeof a); if (b) { throw new TypeError("arrayOfNumbers does not contain only numbers"); } const c = a.filter(a => 0 == a % 2); return c }
