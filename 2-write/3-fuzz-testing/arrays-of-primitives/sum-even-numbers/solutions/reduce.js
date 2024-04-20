export const reduce = (arr) => {
  return arr.reduce((acc, cur) => {
    if (cur % 2 === 0) {
      return acc + cur; // Add even number to accumulator
    }
    return acc; // Ignore odd numbers
  }, 0); // Initial accumulator value set to 0
};