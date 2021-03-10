// Task 0.7

function convertToFahrenheit(Celcius) {
    let fahrenheit = (Celcius * 9/5) + 32;
    return fahrenheit;
}

console.log(convertToFahrenheit(200));

function convertToCelcius(Fahrenheit) {
    let celcius = (Fahrenheit - 32) * 5/9;
    return celcius;
}

console.log(convertToCelcius(392));