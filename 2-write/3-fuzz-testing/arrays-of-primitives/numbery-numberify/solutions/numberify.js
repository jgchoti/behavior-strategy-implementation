export const numberify = (arr) => {
return arr.map(Number).filter(num => !isNaN(num))
};
