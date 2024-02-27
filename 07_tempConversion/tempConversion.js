const convertToCelsius = function(degreesFahrenheit) {
  degreesCelsius = (degreesFahrenheit - 32) * 5 / 9;
  roundedDegreesCelsius = Math.round(degreesCelsius * 10) / 10;
  return roundedDegreesCelsius;
};


const convertToFahrenheit = function(degreesCelsius) {
  degreesFahrenheit = degreesCelsius * 9 / 5 + 32;
  roundedDegreesFahrenheit = Math.round(degreesFahrenheit * 10)/10;
  return roundedDegreesFahrenheit;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
