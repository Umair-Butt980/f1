import { DriverStatus } from "./driverStatus";
import { TeamName } from "./f1Teams";
import { Lap } from "./lap";

// Race Result Interface
export interface RaceResult {
    position: number;
    driver: Driver;
    team: TeamName;
    time: number;
    points: number;
    status: DriverStatus;
    fastestLap?: Lap;
}