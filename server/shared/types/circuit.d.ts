// Circuit Interface
export interface Circuit {
    id: string;
    name: string;
    country: string;
    city: string;
    length: number; // in meters
    turns: number;
    lapRecord: {
        time: number;
        driver: string;
        year: number;
    };
}