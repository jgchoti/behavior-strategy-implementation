/**
 * Creates a new number by sorting the digits in another.
 *  It will sort the digits up or down, depending on a flag parameter.
 *
 * @param {number} [toSort=0] - The number who's digits need sorting.
 * @param {boolean} [up=true] - Whether to sort the digits up or down.
 * @return {number} A number with the same digits, but sorted.
 *
 * @example
 *
 * sortDigits(2321); // 1223
 *
 * @example
 *
 * sortDigits(2321, true); // 1223
 *
 * @example
 *
 * sortDigits(2321, false); // 3221
 */
export const sortDigits = (toSort = 0, up = true) => {
let arrayNum = String(toSort).split('').map(Number)
if (up === true) {
  return Number(arrayNum.sort((a,b) => a - b).join(''))
} else {
  return Number(arrayNum.sort((a,b) => b - a).join(''))
}
};

export const sortDigits2 = (toSort = 0, up = true) => {
  const digits = Array.from(String(toSort), Number);

  if (up) {
    digits.sort((a, b) => a - b);
  } else {
    digits.sort((a, b) => b - a);
  }

  return parseInt(digits.join(''));
};