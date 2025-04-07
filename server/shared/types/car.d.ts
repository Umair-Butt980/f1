import { TeamName } from "./f1Teams";
import { TyreCompound } from "./tyres";

// Car Interface
export interface Car {
    id: string;
    team: TeamName;
    number: number;
    driver: Driver;
    chassis: string;
    engine: string;
    currentTyre: TyreCompound;
    tyreAge: number;
    fuelLevel: number;
    damage: number; // 0-100 percentage
}