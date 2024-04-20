export const isHappy = (number) => {
  while (number !== 1) {
    let numberStr = String(number);
    numberStr = numberStr
      .split("")
      .map(Number)
      .reduce((acc, cur) => acc + cur ** 2, 0);
    if (numberStr > 1 && numberStr <= 9) {
      return false;
    }
    number = numberStr;
  }
  return true;
};
