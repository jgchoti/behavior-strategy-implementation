/**
 * Counts how many times each character appears in a string.
 *
 * @param {string} [text=''] - The string of characters to count.
 * @returns {number{}} An object of key/value pairs counting each character.
 *
 * @example
 *
 * countCharacters('hi'); // { h: 1, i: 1 }
 *
 * @example
 *
 * countCharacters('hiiii'); // { h: 1, i: 4 }
 *
 */
export const countCharacters = (text = '') => {
  let result = {};
  let keyArray = text.split('');
  for (let i = 0; i < keyArray.length; i++) {
    if (!result.hasOwnProperty(keyArray[i])) {
      result[keyArray[i]] = 1;
    } else {
      result[keyArray[i]] += 1;
    }
  }
  return result;
};


export const countCharacterShort = (text = '') => {
let result = {};
  for (let char of text) {
    result[char] = (result[char] || 0) + 1;
  }
  // It checks if result[char] is falsy. If result[char] is falsy, the expression evaluates to 0.
  //  If result[char] was undefined (or falsy), it becomes 1. 
  // If result[char] was a number, it gets incremented by 1.
  return result;
};



