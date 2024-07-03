const add = function(numOne, numTwo) {
	return +numOne + +numTwo;
};

const subtract = function(numOne, numTwo) {
	return +numOne - +numTwo;
};

const sum = function(args) {
  return args.reduce(add, 0);
};

const multiply = function(args) {
  return args.reduce((total, currItem) => {
    return total*currItem;
  });
};

const power = function(numOne, numTwo) {
	return (+numOne)**(+numTwo);
};

const factorial = function(num) {
  let i = 1;
  let factor = [];
  for (let i = 1; i <= num; i++) {
    factor.push(i);
  }
  return (num === 0) ? 1 : multiply(factor);
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
