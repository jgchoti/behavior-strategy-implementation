/**
 * Reverses each word in a string.
 *
 * @param {string} [text=''] - The string of words to reverse.
 * @returns {string} The text, with each word reversed.
 *
 * @example
 *
 * reverseWords('hello'); // 'olleh'
 *
 * @example
 *
 * reverseWords('hello world!'); // 'olleh dlrow!'
 */
export const reverseWords = (text = '') => {
  let textArray = text.split(' ');
  let result = [];
  
  for (let word of textArray) {
     let reversedWord = '';
    for (let char of word) {
      reversedWord = char + reversedWord;
    }
    result.push(reversedWord);
  }
  return result.join(' ');
};

