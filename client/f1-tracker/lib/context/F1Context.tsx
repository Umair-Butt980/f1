"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { F1ContextType, DriverStanding, ErgastResponse } from "../types/f1";
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

      const response = await fetch("https://api.jolpi.ca/ergast/f1/2025/driverStandings.json");
      if (!response.ok) {
        throw new Error("Failed to fetch driver standings");
      }

      const data: ErgastResponse = await response.json();
      const standings = data.MRData.StandingsTable.StandingsLists[0]?.DriverStandings || [];
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
