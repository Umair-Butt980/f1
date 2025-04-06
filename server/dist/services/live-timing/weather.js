"use strict";
var weatherConditions;
(function (weatherConditions) {
    weatherConditions[weatherConditions["rainy"] = 0] = "rainy";
    weatherConditions[weatherConditions["sunny"] = 1] = "sunny";
    weatherConditions[weatherConditions["humid"] = 2] = "humid";
    weatherConditions[weatherConditions["damp"] = 3] = "damp";
    weatherConditions[weatherConditions["cold"] = 4] = "cold";
})(weatherConditions || (weatherConditions = {}));
function adviceOnWeather(weather) {
    switch (weather) {
        case weatherConditions.rainy:
            return 'wet tyres';
        case weatherConditions.sunny:
            return 'soft tyres';
        default:
            return 'medium tyres'; // Add this line
    }
}
// Example usage
const currentWeather = weatherConditions.rainy;
const tyreAdvice = adviceOnWeather(currentWeather);
console.log(`For ${weatherConditions[currentWeather]} weather, use ${tyreAdvice}`);
