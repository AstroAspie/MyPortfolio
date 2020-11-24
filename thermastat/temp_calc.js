// Temperature in kelvin
const kelvin = 293;

// Temperature in celsius
let celsius = kelvin - 273;

// Calculate fahrenheit from celsius
let fahrenheit = celsius * (9/5) + 32;
// Ensure accuracy of fahrenheit calculation
fahrenheit = Math.floor(fahrenheit);

console.log("The temperature is", fahrenheit, "degrees in Fahrenheit");