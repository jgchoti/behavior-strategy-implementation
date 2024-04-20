export const loopObj = (firstObj, secondObj) => {
let result = {};
  let keyFirstObj = Object.keys(firstObj);
  let keySecondObj = Object.keys(secondObj);
  for (let i = 0; i < keyFirstObj.length; i++) {
  
    if (keySecondObj.includes(keyFirstObj[i]) && firstObj[keyFirstObj[i]] === secondObj[keyFirstObj[i]]) {
      result[keyFirstObj[i]] = firstObj[keyFirstObj[i]];
    }
  }
  return result;
};