"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { F1ContextType, DriverStanding } from "../types/f1";
import { teamColors } from "../constants/team-colors";

const F1Context = createContext<F1ContextType | undefined>(undefined);

export function F1Provider({ children }: { children: React.ReactNode }) {
  const [driverStandings, setDriverStandings] = useState<DriverStanding[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDriverStandings = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch("http://api.jolpi.ca/ergast/f1/2025/driverStandings.json");
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to fetch driver standings");
      }

      const data = await response.json();
      const standingsData = data.MRData.StandingsTable.StandingsLists[0]?.DriverStandings || [];

      const standings: DriverStanding[] = standingsData.map((standing: any) => ({
        position: parseInt(standing.position),
        driver: {
          driver_number: parseInt(standing.Driver.permanentNumber),
          broadcast_name: standing.Driver.givenName + " " + standing.Driver.familyName,
          full_name: standing.Driver.givenName + " " + standing.Driver.familyName,
          team_name: standing.Constructors[0].name,
          team_colour: teamColors[standing.Constructors[0].name] || "000000",
          country_code: standing.Driver.nationality,
          headshot_url: `/drivers/${standing.Driver.driverId}.jpg`,
        },
        points: parseFloat(standing.points),
        wins: parseInt(standing.wins),
        podiums: 0,
        fastest_laps: 0,
      }));

      setDriverStandings(standings);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <F1Context.Provider
      value={{
        driverStandings,
        isLoading,
        error,
        fetchDriverStandings,
      }}
    >
      {children}
    </F1Context.Provider>
  );
}

export function useF1() {
  const context = useContext(F1Context);
  if (context === undefined) {
    throw new Error("useF1 must be used within a F1Provider");
  }
  return context;
}
