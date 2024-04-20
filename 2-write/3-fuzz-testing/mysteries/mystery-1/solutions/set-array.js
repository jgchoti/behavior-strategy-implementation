
/**
 * Task description: Write a method that returns a duplicate-free array
 * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]
 * Task Complexity: 2 of 5
 *
 * @param {string[]} array - Array of primitive data types.
 * @returns {Array}
 *
 * @author https://github.com/andrewborisov/javascript-practice/blob/master/arrays/solutions/06-unique.js
 */
export const setArray = (array) => {
  let newArray = new Set(array)
  return [...newArray]
};