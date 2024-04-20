export const filter = (arr) => {
const isNotNumber = (num) => {
  if (isNaN(num)) {
    throw Error ('the array contains non-numbers')
  }
  return num;
} 
return arr.map(isNotNumber).filter(num => num % 2 === 0 );
}