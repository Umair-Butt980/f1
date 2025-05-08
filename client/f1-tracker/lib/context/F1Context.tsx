"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { DriverStanding } from "@/lib/types/f1";
import { getDriverStandings } from "@/lib/services/f1-api";

interface F1ContextType {
  driverStandings: DriverStanding[];
  isLoading: boolean;
  error: string | null;
  fetchDriverStandings: () => Promise<void>;
}

const F1Context = createContext<F1ContextType | undefined>(undefined);

export function F1Provider({ children }: { children: React.ReactNode }) {
  const [driverStandings, setDriverStandings] = useState<DriverStanding[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDriverStandings = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getDriverStandings();
      const standings = data.MRData.StandingsTable.StandingsLists[0]?.DriverStandings || [];
      setDriverStandings(standings);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch driver standings");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const value = {
    driverStandings,
    isLoading,
    error,
    fetchDriverStandings,
  };

  return <F1Context.Provider value={value}>{children}</F1Context.Provider>;
}

export function useF1() {
  const context = useContext(F1Context);
  if (context === undefined) {
    throw new Error("useF1 must be used within a F1Provider");
  }
  return context;
}
