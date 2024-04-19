export const passObj2 = (arr) => {
  return arr.filter(obj => !obj.hasOwnProperty('pass') || obj.pass === true);
};


