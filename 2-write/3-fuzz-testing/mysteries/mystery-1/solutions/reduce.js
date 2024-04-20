export const reduce = (array) => {
    return array.reduce((acc, cur) => ((!acc.includes(cur)) ? acc.concat(cur) : acc), [])
  
};
