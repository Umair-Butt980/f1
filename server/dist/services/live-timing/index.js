"use strict";
console.log("🏁 Live Timing Service is running...");
class Driver {
    constructor(name, team) {
        this.name = name;
        this.team = team;
        this.laps = 0;
    }
    completeLap() {
        this.laps++;
        console.log(`${this.name} completed lap ${this.laps}`);
    }
    getLapCount() {
        return this.laps;
    }
}
