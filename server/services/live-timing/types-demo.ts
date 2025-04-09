// types-demo.ts

// string, number, boolean
let driverName: string = "Max Verstappen";
let lapTime: number = 74.65;
let isInPit: boolean = false;

console.log(`${driverName} clocked a lap time of ${lapTime}s. Pit status: ${isInPit}`);


function annouceLap(driverName: string, lapTime: number): string{
    return `${driverName} has completed a lap in ${lapTime} seconds`;
}
annouceLap('Lewis Hamilton', 1.047);
const annoucement = annouceLap('Lewis Hamilton', 1.047);
console.log(annoucement);

// we will use type alias for union intersecrtions
// type lap ={
//     driver:string,
//     sector1:number,
//     sector2:number,
//     sector3:number,
//     total:number
// }
// we weill use interface when we want to extend something like in oop
interface driver  {
    name: string,
    age:  number,
    racingCompany: string
}

//
type PenaltyEvent = {
    type: "penalty";
    driver: string;
    penaltyType: "time" | "grid" | "drive-through";
    value: number; // seconds (if time), or positions (if grid)
  };
  
  type MechanicalFailureEvent = {
    type: "mechanical-failure";
    driver: string;
    part: string;
    lap: number;
  };
  
  type RadioMessageEvent = {
    type: "radio";
    driver: string;
    message: string;
  };
  
  type IncidentEvent = PenaltyEvent | MechanicalFailureEvent | RadioMessageEvent;


function describeIncident(incident: IncidentEvent){
  if(incident.type === 'penalty'){
    return `HAM recieved a ${incident.penaltyType} of 5 seconds` 
  }
  else if(incident.type === 'mechanical-failure'){
    return `LEC had a ${incident.type} at ${incident.lap} on part ${incident.part}`
  }
  else if(incident.type === 'radio'){
    return `NOR ${incident.type}ed tyres are gone mate`
  }

}
// type narrowing and type gaurds
