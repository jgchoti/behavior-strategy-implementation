export const loop = (number) => {
   if (number === 0) {
    return 1; // Return 1 for factorial of 0
  }

  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};