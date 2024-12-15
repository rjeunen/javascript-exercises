const convertToCelsius = function(numFahrenheit) {
  let numCelsius = ((numFahrenheit - 32) * 5/9);
  let roundedCelsius = Number(numCelsius.toFixed(1));
  return roundedCelsius;
};

const convertToFahrenheit = function(numCelsius) {
  let numFahrenheit = (numCelsius * 9/5 + 32);
  let roundedFahrenheit = Number(numFahrenheit.toFixed(1));
  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
