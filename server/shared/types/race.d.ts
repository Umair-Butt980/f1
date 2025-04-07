import { RaceResult } from "./raceResult";
import { RaceStatus } from "./raceStatus";
import { SessionType } from "./sessionType";
import { TrackCondition } from "./trackCondition";
import { WeatherCondition } from "./weather";

// Race Interface
export interface Race {
    id: string;
    name: string;
    circuit: string;
    date: Date;
    laps: number;
    status: RaceStatus;
    currentLap: number;
    weather: WeatherCondition;
    trackCondition: TrackCondition;
    sessionType: SessionType;
    results: RaceResult[];
}