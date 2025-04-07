import { TeamName } from "./f1Teams";

// Driver Interface
export interface Driver {
    id: string;
    firstName: string;
    lastName: string;
    number: number;
    team: TeamName;
    nationality: string;
    dateOfBirth: Date;
    points: number;
    position: number;
    fastestLap?: Lap;
    status: DriverStatus;
}