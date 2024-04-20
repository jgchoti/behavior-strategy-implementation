/**
 * Returns an array containing only the items that are not in both a and b.
 *  This is a pure function with no side-effects.
 *
 * @param {number[]} [a=[]] - One of the two arrays.
 * @param {number[]} [b=[]] - The other array.
 * @returns {number[]} A new array with items not in both a and b.
 *
 * arrayDiff([1, 8, 2], [])); // [1, 8, 2]
 * arrayDiff([1, 2, 3], [1, 2])); // [3]
 * arrayDiff([3, 4], [3])); // [4]
 * arrayDiff([], [4, 5])); // []
 */
export const diffArrays = (a = [], b = []) => {
  let result = [];
 for (let element of a) {
    if (!b.includes(element)) {
      result.push(element);
    }
  }
  for (let element of b) {
    if (!a.includes(element)) {
      result.push(element);
    }
  }
  return result;
};
