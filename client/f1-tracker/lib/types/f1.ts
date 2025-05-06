export interface Driver {
  driver_number: number;
  broadcast_name: string;
  full_name: string;
  team_name: string;
  team_colour: string;
  country_code: string;
  headshot_url: string;
}

export interface DriverStanding {
  position: number;
  driver: Driver;
  points: number;
  wins: number;
  podiums: number;
  fastest_laps: number;
}

export interface F1ContextType {
  driverStandings: DriverStanding[];
  isLoading: boolean;
  error: string | null;
  fetchDriverStandings: () => Promise<void>;
}
