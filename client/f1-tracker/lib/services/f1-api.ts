import { ErgastResponse, RaceResultsResponse } from "../types/f1";

const BASE_URL = "https://api.jolpi.ca/ergast/f1";

export async function getDriverStandings(): Promise<ErgastResponse> {
  const response = await fetch(`${BASE_URL}/2025/driverStandings.json`);
  if (!response.ok) {
    throw new Error("Failed to fetch driver standings");
  }
  return response.json();
}

export async function getTopDrivers(limit: number = 5) {
  const data = await getDriverStandings();
  const standings = data.MRData.StandingsTable.StandingsLists[0]?.DriverStandings || [];
  return standings.slice(0, limit);
}

export async function getConstructorStandings(): Promise<ErgastResponse> {
  const response = await fetch(`https://api.jolpi.ca/ergast/f1/2025/constructorStandings.json`);
  console.log(response);
  if (!response.ok) {
    throw new Error("Failed to fetch constructor standings");
  }
  return response.json();
}

export async function getTopConstructors(limit: number = 5) {
  const data = await getConstructorStandings();
  const standings = data.MRData.StandingsTable.StandingsLists[0]?.ConstructorStandings || [];
  return standings.slice(0, limit);
}

export async function getUpcomingRace() {
  const response = await fetch(`${BASE_URL}/current/next.json`);
  if (!response.ok) {
    throw new Error("Failed to fetch upcoming race");
  }
  const data = await response.json();
  const race = data.MRData.RaceTable.Races[0];

  if (!race) return null;

  return {
    name: race.raceName,
    round: race.round,
    date: race.date,
    time: race.time,
    circuit: {
      name: race.Circuit.circuitName,
      location: race.Circuit.Location.locality,
      country: race.Circuit.Location.country,
      imageUrl: `/circuits/${race.Circuit.circuitId}.jpg`,
    },
    sessions: {
      practice1: race.FirstPractice,
      practice2: race.SecondPractice,
      practice3: race.ThirdPractice,
      qualifying: race.Qualifying,
      race: {
        date: race.date,
        time: race.time,
      },
    },
  };
}

export async function getRaceResults(): Promise<RaceResultsResponse> {
  const response = await fetch(`${BASE_URL}/current/results.json`);
  if (!response.ok) {
    throw new Error("Failed to fetch race results");
  }
  return response.json();
}

export async function getRecentRaceResults(limit: number = 3) {
  const data = await getRaceResults();
  const races = data.MRData.RaceTable.Races;

  // Sort races by date (most recent first) and take the last 'limit' races
  return races
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}
