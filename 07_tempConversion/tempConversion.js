const convertToCelsius = function(degrees) {
  let converted = ((degrees-32)*(5/9));
  return (converted % 1 === 0) ? converted : Number(converted.toFixed(1));
};

const convertToFahrenheit = function(degrees) {
  let converted = ((degrees*(9/5))+32);
  return (converted % 1 === 0) ? converted : Number(converted.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
