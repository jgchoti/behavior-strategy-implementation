export const whileLoop = (n) => {
  let count = 0;
  let result = [];
  while (count < n) {
    result.push(
      count === 0 ? 0 : count === 1 ? 1 : result[count - 2] + result[count - 1]
    );
    count++;
  }
  return result
};

