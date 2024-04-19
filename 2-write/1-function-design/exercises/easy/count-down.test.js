// #todo

'use strict';

/**
 * builds an array counting down from `start` to 0
 * @param {number} [start=0] - the number to count down from
 *  start must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from `start` to 0
 */

// -------- your solutions --------

const countDown = (start = 0) => {
  if (isNaN(start)) {
    throw new TypeError
  }
  else if (start % 1 !== 0){
    throw new Error
  }
  else if(start < 0){
    throw new RangeError
  }
  let result = []
  for (let i = start; i >= 0; i--) {
    result.push(i)
  }
  return result
};

const countDown2 = (start = 0) => {
  if (typeof start !== 'number' || isNaN(start)) {
    throw new TypeError;
  }
  
  if (!Number.isInteger(start)) {
    throw new Error;
  }

  if (start < 0) {
    throw new RangeError;
  }

  return Array.from({ length: start + 1 }, (_, i) => start - i);
};


for (const solution of [countDown,
countDown2,
  // secretSolution
  ]) {
  // the main test suite for the function
  describe(solution.name + ': counts down to 0', () => {
    it('default parameter is 0 -> [0]', () => {
      expect(solution()).toEqual([0]);
    });
    it('0 -> [0]', () => {
      expect(solution(0)).toEqual([0]);
    });
    it('1 -> [1, 0]', () => {
      expect(solution(1)).toEqual([1, 0]);
    });
    // write at least 5 more tests ...
    it('9 -> [9,8,7,6,5,4,3,2,1,0]', () => {
      expect(solution(9)).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
    });
    it('89 -> [89,....,0]', () => {
      expect(solution(89)).toEqual([89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
    });
    it('4 -> [4, 3, 2, 1, 0]', () => {
      expect(solution(4)).toEqual([4, 3, 2, 1, 0]);
    });
    it('3 -> [3,2,1,0]', () => {
      expect(solution(3)).toEqual([3, 2, 1, 0]);
    });
    it('2 -> [2,1,0]', () => {
      expect(solution(2)).toEqual([2, 1, 0]);
    });
    it('should throw a TypeError if the argument is not a number', () => {
      expect(() => {
        solution('not a number');
      }).toThrow(TypeError);
    });
    it('should throw an Error if the argument is not an integer', () => {
      expect(() => {
        solution(3.5);
      }).toThrow(Error);
    });
    it('should throw a RangeError if the argument is less than 0', () => {
      expect(() => {
        solution(-5);
      }).toThrow(RangeError);
    });
  })
  }
// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = 0) { if ("number" != typeof a) throw new TypeError("start is not a number"); if (!Number.isInteger(a)) throw new Error("start is not an integer"); if (0 > a) throw new RangeError("start is less than 0"); const b = []; for (let c = a; 0 <= c; c--)b.push(c); return b }
