import { ErgastResponse } from "../types/f1";

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
