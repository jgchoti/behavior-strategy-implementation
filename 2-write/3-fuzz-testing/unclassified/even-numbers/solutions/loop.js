export const loop = (arr) => {
  const isNotNumber = (num) => {
  if (isNaN(num)) {
      throw new Error('The array contains non-numbers');
    } else {
      return num;
    }
  }
  const result = [];
  for ( let i =0 ; i < arr.length; i ++) {
    let num = isNotNumber(arr[i])
    if( num % 2 === 0){
      result.push(num)
    }
  }
  return result;
};