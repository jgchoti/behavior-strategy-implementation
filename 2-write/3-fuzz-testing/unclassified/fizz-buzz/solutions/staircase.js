export const staircase = (max = 0) => {
  let countUp = 0;
  const result = [];
  while (countUp < max) {
    result.push(countUp % 15 === 0 ? "FizzBuzz" : countUp % 5 === 0 ? "Buzz" : countUp % 3 === 0 ? "Fizz" : countUp);
    countUp++
  }
  return result;
};
