export const filterReduce = (arr) => {
  return arr
    .filter((num) => num % 2 === 0) // keep the even numbers
    .reduce((acc, cur) => acc + cur, 0); // add all the even numbers
};
