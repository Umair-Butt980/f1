"use strict";
// types-demo.ts
// string, number, boolean
let driverName = "Max Verstappen";
let lapTime = 74.65;
let isInPit = false;
console.log(`${driverName} clocked a lap time of ${lapTime}s. Pit status: ${isInPit}`);
function annouceLap(driverName, lapTime) {
    return `${driverName} has completed a lap in ${lapTime} seconds`;
}
annouceLap('Lewis Hamilton', 1.047);
const annoucement = annouceLap('Lewis Hamilton', 1.047);
console.log(annoucement);
