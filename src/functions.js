function hello(name){
    return(`hello ${name}`);
}

function fahrenheitToCelsius(fahrenheit){
    const celsius = (fahrenheit -32) * 5/9 
    return celsius; 
}

function squareFeetToAcres(squareFeet){
    const feetPerAcre = 43560;
    return squareFeet / feetPerAcre; 
}

function mowingTime(width, length, cutPerMinute){
    const area = width * length;
    const minutes = area / cutPerMinute;
    return minutes;
}

function airQuality(aqi){
    if (aqi <= 50) {
        return "Good";
    } else if (aqi <= 100) {
        return "Moderate";
    } else if (aqi <= 150) {
        return "Unhealthy for Sensitive Groups";
    } else if (aqi <= 200) {
        return "Unhealthy";
    } else if (aqi <= 300) {
        return "Very Unhealthy";
    } else {
        return "Hazardous";
    }
}

function yee_ha(number){
    let divisibleBy3 = number % 3 === 0;
    let divisibleBy7 = number % 7 === 0;

    if (divisibleBy3 && divisibleBy7) {
        return "Yee Ha";
    } else if (divisibleBy3) {
        return "Yee";
    } else if (divisibleBy7) {
        return "Ha";
    } else {
        return "Nada";
    }
}

function slope(x1, y1, x2, y2){
    const rise = y2 - y1;
    const run = x2 - x1;
    return rise / run;
}

function 
export {hello, fahrenheitToCelsius, squareFeetToAcres, mowingTime, airQuality, yee_ha, slope}