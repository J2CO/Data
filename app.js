//Kelvin is always 293
const kelvin = 293;
//Celsius is 273degrees lower than Kelvin
const celsius = kelvin-273;
//converting C to F
let fahrenheit = celsius*(9/5)+32;
//putting a floor to the temp
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
