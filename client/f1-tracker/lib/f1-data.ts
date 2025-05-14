// Mock F1 data for demonstration purposes
// In a real application, you would fetch this from an API

export type Driver = {
  id: string;
  number: number;
  code: string;
  name: string;
  firstName: string;
  lastName: string;
  team: string;
  points: number;
  position: number;
  imageUrl: string;
  teamColor: string;
};

export type Team = {
  id: string;
  name: string;
  color: string;
  logo: string;
  points: number;
  position: number;
};

export type Race = {
  id: string;
  name: string;
  round: number;
  date: string;
  time: string;
  circuit: {
    id: string;
    name: string;
    location: string;
    country: string;
    imageUrl: string;
  };
  status: "upcoming" | "ongoing" | "completed";
  results?: RaceResult[];
};

export type RaceResult = {
  position: number;
  driverId: string;
  time: string;
  points: number;
  fastestLap?: boolean;
};

export type LapTime = {
  driverId: string;
  lap: number;
  time: string;
  sector1: string;
  sector2: string;
  sector3: string;
};

export interface DriverResult {
  raceName: string;
  position: string;
  points: string;
  grid: string;
  status: string;
  fastestLap?: {
    rank: string;
    lap: string;
    time: string;
  };
}

// Mock drivers data
export const drivers: Driver[] = [
  {
    id: "max_verstappen",
    number: 1,
    code: "VER",
    name: "Max Verstappen",
    firstName: "Max",
    lastName: "Verstappen",
    team: "Red Bull Racing",
    points: 374,
    position: 1,
    imageUrl: "/placeholder.svg?height=100&width=100",
    teamColor: "#0600EF",
  },
  {
    id: "lando_norris",
    number: 4,
    code: "NOR",
    name: "Lando Norris",
    firstName: "Lando",
    lastName: "Norris",
    team: "McLaren",
    points: 305,
    position: 2,
    imageUrl: "/placeholder.svg?height=100&width=100",
    teamColor: "#FF8700",
  },
  {
    id: "charles_leclerc",
    number: 16,
    code: "LEC",
    name: "Charles Leclerc",
    firstName: "Charles",
    lastName: "Leclerc",
    team: "Ferrari",
    points: 275,
    position: 3,
    imageUrl: "/placeholder.svg?height=100&width=100",
    teamColor: "#DC0000",
  },
  {
    id: "lewis_hamilton",
    number: 44,
    code: "HAM",
    name: "Lewis Hamilton",
    firstName: "Lewis",
    lastName: "Hamilton",
    team: "Mercedes",
    points: 256,
    position: 4,
    imageUrl: "/placeholder.svg?height=100&width=100",
    teamColor: "#00D2BE",
  },
  {
    id: "oscar_piastri",
    number: 81,
    code: "PIA",
    name: "Oscar Piastri",
    firstName: "Oscar",
    lastName: "Piastri",
    team: "McLaren",
    points: 234,
    position: 5,
    imageUrl: "/placeholder.svg?height=100&width=100",
    teamColor: "#FF8700",
  },
  {
    id: "carlos_sainz",
    number: 55,
    code: "SAI",
    name: "Carlos Sainz",
    firstName: "Carlos",
    lastName: "Sainz",
    team: "Ferrari",
    points: 218,
    position: 6,
    imageUrl: "/placeholder.svg?height=100&width=100",
    teamColor: "#DC0000",
  },
  {
    id: "george_russell",
    number: 63,
    code: "RUS",
    name: "George Russell",
    firstName: "George",
    lastName: "Russell",
    team: "Mercedes",
    points: 198,
    position: 7,
    imageUrl: "/placeholder.svg?height=100&width=100",
    teamColor: "#00D2BE",
  },
  {
    id: "sergio_perez",
    number: 11,
    code: "PER",
    name: "Sergio Perez",
    firstName: "Sergio",
    lastName: "Perez",
    team: "Red Bull Racing",
    points: 151,
    position: 8,
    imageUrl: "/placeholder.svg?height=100&width=100",
    teamColor: "#0600EF",
  },
  {
    id: "fernando_alonso",
    number: 14,
    code: "ALO",
    name: "Fernando Alonso",
    firstName: "Fernando",
    lastName: "Alonso",
    team: "Aston Martin",
    points: 62,
    position: 9,
    imageUrl: "/placeholder.svg?height=100&width=100",
    teamColor: "#006F62",
  },
  {
    id: "lance_stroll",
    number: 18,
    code: "STR",
    name: "Lance Stroll",
    firstName: "Lance",
    lastName: "Stroll",
    team: "Aston Martin",
    points: 24,
    position: 10,
    imageUrl: "/placeholder.svg?height=100&width=100",
    teamColor: "#006F62",
  },
];

// Mock teams data
export const teams: Team[] = [
  {
    id: "red_bull",
    name: "Red Bull Racing",
    color: "#0600EF",
    logo: "/placeholder.svg?height=50&width=100",
    points: 525,
    position: 1,
  },
  {
    id: "mclaren",
    name: "McLaren",
    color: "#FF8700",
    logo: "/placeholder.svg?height=50&width=100",
    points: 539,
    position: 2,
  },
  {
    id: "ferrari",
    name: "Ferrari",
    color: "#DC0000",
    logo: "/placeholder.svg?height=50&width=100",
    points: 493,
    position: 3,
  },
  {
    id: "mercedes",
    name: "Mercedes",
    color: "#00D2BE",
    logo: "/placeholder.svg?height=50&width=100",
    points: 454,
    position: 4,
  },
  {
    id: "aston_martin",
    name: "Aston Martin",
    color: "#006F62",
    logo: "/placeholder.svg?height=50&width=100",
    points: 86,
    position: 5,
  },
  {
    id: "alpine",
    name: "Alpine",
    color: "#0090FF",
    logo: "/placeholder.svg?height=50&width=100",
    points: 12,
    position: 6,
  },
  {
    id: "williams",
    name: "Williams",
    color: "#005AFF",
    logo: "/placeholder.svg?height=50&width=100",
    points: 8,
    position: 7,
  },
  {
    id: "rb",
    name: "RB",
    color: "#1E41FF",
    logo: "/placeholder.svg?height=50&width=100",
    points: 6,
    position: 8,
  },
  {
    id: "haas",
    name: "Haas F1 Team",
    color: "#FFFFFF",
    logo: "/placeholder.svg?height=50&width=100",
    points: 5,
    position: 9,
  },
  {
    id: "sauber",
    name: "Stake F1 Team Sauber",
    color: "#900000",
    logo: "/placeholder.svg?height=50&width=100",
    points: 0,
    position: 10,
  },
];

// Mock races data
export const races: Race[] = [
  {
    id: "bahrain",
    name: "Bahrain Grand Prix",
    round: 1,
    date: "2025-03-02",
    time: "15:00:00Z",
    circuit: {
      id: "bahrain",
      name: "Bahrain International Circuit",
      location: "Sakhir",
      country: "Bahrain",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    status: "completed",
    results: [
      {
        position: 1,
        driverId: "max_verstappen",
        time: "1:32:04.612",
        points: 25,
        fastestLap: false,
      },
      { position: 2, driverId: "sergio_perez", time: "+13.643", points: 18, fastestLap: false },
      { position: 3, driverId: "carlos_sainz", time: "+18.305", points: 15, fastestLap: false },
    ],
  },
  {
    id: "saudi_arabia",
    name: "Saudi Arabian Grand Prix",
    round: 2,
    date: "2025-03-09",
    time: "17:00:00Z",
    circuit: {
      id: "jeddah",
      name: "Jeddah Corniche Circuit",
      location: "Jeddah",
      country: "Saudi Arabia",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    status: "completed",
    results: [
      {
        position: 1,
        driverId: "max_verstappen",
        time: "1:21:14.894",
        points: 25,
        fastestLap: false,
      },
      { position: 2, driverId: "sergio_perez", time: "+13.643", points: 18, fastestLap: false },
      { position: 3, driverId: "carlos_sainz", time: "+18.305", points: 15, fastestLap: false },
    ],
  },
  {
    id: "australia",
    name: "Australian Grand Prix",
    round: 3,
    date: "2025-03-24",
    time: "05:00:00Z",
    circuit: {
      id: "albert_park",
      name: "Albert Park Circuit",
      location: "Melbourne",
      country: "Australia",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    status: "completed",
    results: [
      { position: 1, driverId: "carlos_sainz", time: "1:30:49.193", points: 25, fastestLap: false },
      { position: 2, driverId: "charles_leclerc", time: "+2.366", points: 18, fastestLap: false },
      { position: 3, driverId: "lando_norris", time: "+5.879", points: 15, fastestLap: false },
    ],
  },
  {
    id: "japan",
    name: "Japanese Grand Prix",
    round: 4,
    date: "2025-04-07",
    time: "06:00:00Z",
    circuit: {
      id: "suzuka",
      name: "Suzuka International Racing Course",
      location: "Suzuka",
      country: "Japan",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    status: "completed",
    results: [
      {
        position: 1,
        driverId: "max_verstappen",
        time: "1:30:58.421",
        points: 25,
        fastestLap: false,
      },
      { position: 2, driverId: "sergio_perez", time: "+12.535", points: 18, fastestLap: false },
      { position: 3, driverId: "carlos_sainz", time: "+20.866", points: 15, fastestLap: false },
    ],
  },
  {
    id: "miami",
    name: "Miami Grand Prix",
    round: 5,
    date: "2025-05-05",
    time: "20:00:00Z",
    circuit: {
      id: "miami",
      name: "Miami International Autodrome",
      location: "Miami",
      country: "USA",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    status: "ongoing",
    results: [],
  },
  {
    id: "imola",
    name: "Emilia Romagna Grand Prix",
    round: 6,
    date: "2025-05-19",
    time: "14:00:00Z",
    circuit: {
      id: "imola",
      name: "Autodromo Enzo e Dino Ferrari",
      location: "Imola",
      country: "Italy",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    status: "upcoming",
    results: [],
  },
];

// Mock lap times for live race
export const lapTimes: LapTime[] = [
  {
    driverId: "max_verstappen",
    lap: 1,
    time: "1:32.584",
    sector1: "28.453",
    sector2: "35.921",
    sector3: "28.210",
  },
  {
    driverId: "lando_norris",
    lap: 1,
    time: "1:32.892",
    sector1: "28.612",
    sector2: "36.012",
    sector3: "28.268",
  },
  {
    driverId: "charles_leclerc",
    lap: 1,
    time: "1:33.105",
    sector1: "28.734",
    sector2: "36.124",
    sector3: "28.247",
  },
  {
    driverId: "lewis_hamilton",
    lap: 1,
    time: "1:33.241",
    sector1: "28.812",
    sector2: "36.178",
    sector3: "28.251",
  },
  {
    driverId: "max_verstappen",
    lap: 2,
    time: "1:31.984",
    sector1: "28.123",
    sector2: "35.721",
    sector3: "28.140",
  },
  {
    driverId: "lando_norris",
    lap: 2,
    time: "1:32.192",
    sector1: "28.312",
    sector2: "35.812",
    sector3: "28.068",
  },
  {
    driverId: "charles_leclerc",
    lap: 2,
    time: "1:32.405",
    sector1: "28.434",
    sector2: "35.824",
    sector3: "28.147",
  },
  {
    driverId: "lewis_hamilton",
    lap: 2,
    time: "1:32.541",
    sector1: "28.512",
    sector2: "35.878",
    sector3: "28.151",
  },
];

// Helper functions to get data
export function getUpcomingRace() {
  return races.find(race => race.status === "upcoming");
}

export function getOngoingRace() {
  return races.find(race => race.status === "ongoing");
}

export function getRecentRaces(count = 3) {
  return races
    .filter(race => race.status === "completed")
    .sort((a, b) => b.round - a.round)
    .slice(0, count);
}

export function getDriverById(id: string) {
  return drivers.find(driver => driver.id === id);
}

export function getTeamById(id: string) {
  return teams.find(team => team.id === id);
}

export function getPredictedWinner() {
  // In a real app, this would use an algorithm or ML model
  // For demo purposes, we'll just return the current leader
  return drivers[0];
}

export async function getDriverResults(driverId: string): Promise<DriverResult[]> {
  try {
    const response = await fetch(
      `https://api.jolpi.ca/ergast/f1/2025/drivers/${driverId}/results.json`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch driver results");
    }

    const data = await response.json();
    return data.MRData.RaceTable.Races.map((race: any) => ({
      raceName: race.raceName,
      position: race.Results[0].position,
      points: race.Results[0].points,
      grid: race.Results[0].grid,
      status: race.Results[0].status,
      fastestLap: race.Results[0].FastestLap
        ? {
            rank: race.Results[0].FastestLap.rank,
            lap: race.Results[0].FastestLap.lap,
            time: race.Results[0].FastestLap.Time.time,
          }
        : undefined,
    }));
  } catch (error) {
    console.error("Error fetching driver results:", error);
    throw error;
  }
}
