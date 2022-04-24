const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
};

const multiply = function (numbers) {
  let result = 1;
  for (let number of numbers) {
    result *= number;
  }
  return result;
};

const power = function (base, power) {
  return Math.pow(base, power);
};

const factorial = function (number) {
  let result = 1;
  if (number === 0) {
    return result;
  }
  while (number > 0) {
    result *= number;
    number--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
