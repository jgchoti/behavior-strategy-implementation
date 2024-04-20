export const forLoop = (numberOfSteps) => {
  const isPrimeNumber = (number) => {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true
  };
let numberArr = []
for(let i = 2; i<= numberOfSteps; i++){
  if (isPrimeNumber(i) === true ){
    numberArr.push(i)
  }
}

return numberArr
};
