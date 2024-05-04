const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(myArray) {
  let totalSum = 0;
  for(let i = 0; i < myArray.length; i++){
    totalSum += myArray[i];
  }
  return totalSum;
	
};

const multiply = function(myArray) {
  let totalSum = 1;
  for(let i = 0; i < myArray.length; i++){
    totalSum *= myArray[i];
  }
  return totalSum;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(number) {
	let totalSum = 1;
  if(number === 0 || number === 1){
    return totalSum;
  } else{
    for(let i = number; i >= 1; i--){
      totalSum *= i;
    }
    return totalSum;
  }
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
