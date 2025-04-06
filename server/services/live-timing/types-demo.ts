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