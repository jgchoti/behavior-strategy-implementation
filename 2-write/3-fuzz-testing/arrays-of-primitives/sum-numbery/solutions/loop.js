export const loop = (arr) => {
  arr = arr.map(Number);
  let total = 0;
  for(let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])){
      total += arr[i]
    }
  }
  return total
};
