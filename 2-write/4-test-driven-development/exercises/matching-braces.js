/**
 * Checks if the braces in a string are matched.
 *
 * @param {string} [text=''] - The text of braces to check.
 * @returns {boolean} Whether or not the braces are matched.
 *
 * @example
 *
 * matchingBraces('['); // false
 *
 * @example
 *
 * matchingBraces('()'); // true
 *
 * @example
 *
 * matchingBraces('(]'); // false
 *
 * @example
 *
 * matchingBraces('{[]}'); // true
 *
 * @example
 *
 * matchingBraces('([)]'); // false
 *
 * @example
 *
 * matchingBraces('()[]{}'); // true
 *
 */
export const matchingBraces = (text = '') => {
  let matchingObj = { '(': ')', '{': '}', '[': ']' };
  let isMatching = false;
  let arr = text.split('');
  for (let i = 0; i < arr.length; i++) {
    if (
      Object.keys(matchingObj).includes(arr[i]) &&
      arr[i + 1] === matchingObj[arr[i]]
    ) {
      isMatching = true;
    } else {
      isMatching = false
    }
  }
  return isMatching;
};


export const matchingBraces2 = (text = '') => {
  const matchingObj = { '(': ')', '{': '}', '[': ']' };
  const stack = [];
  for (let char of text) {
    if (char in matchingObj) {
      stack.push(char);
    } else {
      const lastOpening = stack.pop();
      if (matchingObj[lastOpening] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};