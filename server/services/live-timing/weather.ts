enum weatherConditions {
    rainy,
    sunny,
    humid,
    damp,
    cold
}

function adviceOnWeather (weather: weatherConditions): string {
    switch (weather) {
      case weatherConditions.rainy:
        return 'wet tyres';
      case weatherConditions.sunny:
        return 'soft tyres';
      default:
        return 'medium tyres';  // Add this line
    }
  }
  // Example usage
const currentWeather = weatherConditions.rainy;
const tyreAdvice = adviceOnWeather(currentWeather);
console.log(`For ${weatherConditions[currentWeather]} weather, use ${tyreAdvice}`);