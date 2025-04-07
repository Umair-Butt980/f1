import { TeamName } from "./f1Teams";

// Team Interface
export interface Team {
    id: string;
    name: TeamName;
    principal: string;
    base: string;
    firstSeason: number;
    championships: number;
    drivers: Driver[];
    points: number;
    position: number;
}