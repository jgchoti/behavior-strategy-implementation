/**
 * Task description: Write a method that splits an array into parts of determined size
 * Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 * Task complexity: 3 of 5
 * @param {Array} array - An array of any elements
 * @param {number} size - size of chunks
 * @returns {Array}
 *
 * @author https://github.com/andrewborisov/javascript-practice/blob/master/arrays/solutions/09-chunk.js
 */

export const whileLoop = (array, size) => {
  let result = [];
  while (array.length > size) {
    result.push(array.slice(0, size));
    array = array.slice(size);
  }
  if (array.length !== 0) {
    result.push(array);
  }
  return result;
};
