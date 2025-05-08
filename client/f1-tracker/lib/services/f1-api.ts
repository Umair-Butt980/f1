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
