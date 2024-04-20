export const manyFunctions = (max = 0) => {
  const threeDivides = (n) => n % 3 === 0;
  const fiveDivides = (n) => n % 5 === 0;
  const fifteenDivides = (n) => n % 15 === 0;

  const FizzBuzzOrNumber = (num) => {
    if (fifteenDivides(num)) {
      return "FizzBuzz";
    } else if (threeDivides(num)) {
      return "Fizz"
    } else if (fiveDivides(num)) {
      return "Buzz";
    } else {
      return num;
    }
  };

  // https://stackoverflow.com/a/33352604
  return [...Array(max).keys()].map((num) => FizzBuzzOrNumber(num));
};
