export const passingObj = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].hasOwnProperty("pass")) {
      result.push(arr[i]);
    } else if (arr[i].hasOwnProperty("pass") && arr[i].pass === true) {
      result.push(arr[i]);
    }
  }
  return result;
};
