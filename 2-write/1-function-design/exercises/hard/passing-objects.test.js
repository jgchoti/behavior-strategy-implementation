// #todo

'use strict';

/**
 * returns a new array containing all passing objects
 *  passing objects have a property "pass" with the value true
 *  if an object does not have the entry "pass": true, it is not passing
 * @param {Array.<Object>} arr - an array of objects to filer
 * @returns {Array.<Object>} a new array containing only passing objects
 */

// -------- your solutions --------
const passingObj = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Object.keys(arr[i]).includes('pass') && arr[i]['pass'] === true) {
     result.push({ pass: true })
   }}
    return result;
  }

// Object.keys(arr[i]) returns an array of keys, so you can't directly compare it to a string like 'pass'. 
// You should check if 'pass' is among the keys using the includes() method.

// Object.values(arr[i]) returns an array of values, not a single value. You should access the value of the 'pass' key directly.


const passingObj2 = (arr) => {
  return arr.filter(obj => obj.hasOwnProperty('pass') && obj.pass === true)
            .map(x => ({ pass: true }));
};


for (const solution of [
  passingObj,
  passingObj2,
  // secretSolution
]) {
  describe(solution.name + ': filters out non-passing objects', () => {
    describe('correctly filters an array', () => {
      it('an empty array returns an empty array', () => {
        const actual = solution([]);
        expect(actual).toEqual([]);
      });
      it('keeps all entries when all are passing', () => {
        const actual = solution([{ pass: true }, { pass: true }]);
        expect(actual).toEqual([{ pass: true }, { pass: true }]);
      });
      it('removes all entries when all are not passing', () => {
        const actual = solution([{ pass: 'hi' }, { pass: false }]);
        expect(actual).toEqual([]);
      });
      it('removes only not-passing entries', () => {
        const actual = solution([
          { pass: true },
          { pass: false },
          { pass: true },
        ]);
        expect(actual).toEqual([{ pass: true }, { pass: true }]);
      });
      it('removes entries with a truthy, but not true, .pass value', () => {
        const actual = solution([
          { pass: 100 },
          { pass: 'hello' },
          { pass: true },
        ]);
        expect(actual).toEqual([{ pass: true }]);
      });
      it('removes entries with no .pass property', () => {
        const actual = solution([
          { hello: false },
          { bye: false },
          { pass: true },
          { passing: false },
        ]);
        expect(actual).toEqual([{ pass: true }]);
      });
    });
    describe('does not modify the argument', () => {
      it('returns a new array', () => {
        const arg = [];
        const actual = solution(arg);
        const areNotTheSameArray = arg !== actual;
        expect(areNotTheSameArray).toEqual(true);
      });
      it('does not modify the argument', () => {
        const arg = [{ pass: true }, { pass: false }, { hello: 'good bye' }];
        solution(arg);
        expect(arg).toEqual([
          { pass: true },
          { pass: false },
          { hello: 'good bye' },
        ]);
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arr is not an array"); } if (!a.every(a => Object(a) === a)) { throw new TypeError("arr is not an array of objects"); } const b = a.filter(a => !0 === a.pass); return b }
