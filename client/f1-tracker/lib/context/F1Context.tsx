"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { F1ContextType, DriverStanding } from "../types/f1";

const F1Context = createContext<F1ContextType | undefined>(undefined);

export function F1Provider({ children }: { children: React.ReactNode }) {
  const [driverStandings, setDriverStandings] = useState<DriverStanding[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDriverStandings = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // TODO: Replace with actual API call
      const response = await fetch("GET http://ergast.com/api/f1/{2025}/driverStandings.json");
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to fetch driver standings");
      }

      const data = await response.json();
      // Transform the data to match our DriverStanding interface
      // This is a placeholder transformation - we'll need to adjust based on actual API response
      const standings: DriverStanding[] = data.map((driver: any, index: number) => ({
        position: index + 1,
        driver: {
          driver_number: driver.driver_number,
          broadcast_name: driver.broadcast_name,
          full_name: driver.full_name,
          team_name: driver.team_name,
          team_colour: driver.team_colour,
          country_code: driver.country_code,
          headshot_url: driver.headshot_url,
        },
        points: 0, // These will need to be fetched from a different endpoint
        wins: 0,
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
