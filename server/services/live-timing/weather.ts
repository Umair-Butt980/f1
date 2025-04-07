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


//uinion example
type tyreCompound = 'hard' |"medium" | "soft"
type raceEvents = 'overtake' | 'pitstop' | 'crash'

function handleRaceEvents(tyre: tyreCompound, raceEvents: raceEvents): string {
   if(tyre === 'hard' && raceEvents === 'overtake'){
    return `This driver has done it perfectly well`
   }
   return 'No notable event' // Added default return
}

//intersections
type driver1 = {
  name:string,
  age:number,
  bestLap:number,
  podiums:number
}

type lap1 = {
  lapNumber:number,
  sector:[],
  bestTime:number
}
//intersection
type driverLap = driver1 & lap1;