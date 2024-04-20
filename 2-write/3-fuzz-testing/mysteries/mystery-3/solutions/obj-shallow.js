/**
 * Task description: Write a method that finds shallow intersections of objects
 * Expected Result: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
 * @param {Object<string | number>} firstObj - Object with values of primitive data types
 * @param {Object<string | number>} secondObj - Object with values of primitive data types
 * @returns {Object}
 *
 * @author https://github.com/andrewborisov/javascript-practice/blob/master/objects/solutions/09-intersection.js
 */

export const objShallow = (firstObj, secondObj) => {
  let result = {};
  let keyFirstObj = Object.keys(firstObj);
  let keySecondObj = Object.keys(secondObj);

  keyFirstObj.forEach(key => {
   if (keySecondObj.includes(key) && firstObj[key] === secondObj[key]) {
      result[key] = firstObj[key];
    }
  });
  return result;
};
