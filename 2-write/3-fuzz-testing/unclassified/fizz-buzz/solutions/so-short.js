export const soShort = (max = 0) => {
  const result = [];
  for (let i = 0; i < max; i++ )
    result.push((i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz":"") || i);
  return result;

  // https://codeburst.io/javascript-breaking-down-the-shortest-possible-fizzbuzz-answer-94a0ad9d128a
};
