import { DriverStatus } from "./driverStatus";
import { SessionType } from "./sessionType";
import { TrackCondition } from "./trackCondition";
import { TyreCompound } from "./tyres";
import { WeatherCondition } from "./weather";

// Live Timing Data Interface
export interface LiveTimingData {
    timestamp: Date;
    sessionType: SessionType;
    currentLap: number;
    weather: WeatherCondition;
    trackCondition: TrackCondition;
    drivers: {
        driverId: string;
        position: number;
        gapToLeader: number;
        intervalToNext: number;
        lastLapTime: number;
        bestLapTime: number;
        sector1Time: number;
        sector2Time: number;
        sector3Time: number;
        status: DriverStatus;
        tyreCompound: TyreCompound;
        tyreAge: number;
        pitStops: number;
    }[];
}