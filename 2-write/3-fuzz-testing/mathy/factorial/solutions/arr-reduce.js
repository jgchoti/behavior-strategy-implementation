export const arrReduce = (number) => {
let arrayNumber = Array.from({length: number}, (_, i) => i + 1)
return arrayNumber.reduce((acc, cur) => acc * cur, 1)
};
