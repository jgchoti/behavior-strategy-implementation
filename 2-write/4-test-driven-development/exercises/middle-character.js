/**
 * Returns the middle character from a string.
 *  It returns the middle 2 characters if the string has an even length.
 *
 * @param {string} [text=''] - Find the middle character(s) of this string.
 * @returns {string} The middle character(s) in the text.
 */
export const middleCharacter = (text = '') => {
  let txtArray = text.split('')
  let middleChar = Math.floor(txtArray.length / 2)
  if (txtArray.length % 2 === 0) {
    return txtArray.slice( middleChar -1 , middleChar + 1 ).join('')
  } else {
    return txtArray.slice(middleChar , middleChar + 1 ).join('')
  }
};
