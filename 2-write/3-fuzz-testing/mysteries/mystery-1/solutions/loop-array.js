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

export const loopArray = (array) => {
  let newArray = [];
 for (let i = 0; i < array.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < newArray.length; j++) {
      if (array[i] === newArray[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};
