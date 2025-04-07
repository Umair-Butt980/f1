import { TrackCondition } from "./trackCondition";
import { TyreCompound } from "./tyres";
import { WeatherCondition } from "./weather";

// Lap Interface
export interface Lap {
    id: string;
    driverId: string;
    number: number;
    time: number; // in milliseconds
    sector1Time: number;
    sector2Time: number;
    sector3Time: number;
    tyreCompound: TyreCompound;
    tyreAge: number;
    fuelLevel: number;
    trackCondition: TrackCondition;
    weatherCondition: WeatherCondition;
    isFastest: boolean;
    isPersonalBest: boolean;
}