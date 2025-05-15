import { create } from "zustand";
import { Race, RaceCalendarFilters } from "../types/race-calendar";
import { getRaceCalendar } from "../services/f1-api";

interface RaceCalendarState {
  races: Race[];
  selectedRace: Race | null;
  isLoading: boolean;
  error: string | null;
  filters: RaceCalendarFilters;
  // Actions
  setRaces: (races: Race[]) => void;
  setSelectedRace: (race: Race | null) => void;
  setFilters: (filters: Partial<RaceCalendarFilters>) => void;
  fetchRaces: () => Promise<void>;
}

export const useRaceCalendarStore = create<RaceCalendarState>((set, get) => ({
  races: [],
  selectedRace: null,
  isLoading: false,
  error: null,
  filters: {
    season: "2025",
    status: "all",
  },

  setRaces: races => set({ races }),
  setSelectedRace: race => set({ selectedRace: race }),
  setFilters: filters =>
    set(state => ({
      filters: { ...state.filters, ...filters },
    })),

  fetchRaces: async () => {
    const { filters } = get();
    set({ isLoading: true, error: null });

    try {
      const data = await getRaceCalendar(filters.season);
      const races = data.MRData.RaceTable.Races;

      // Filter races based on status
      const now = new Date();
      const filteredRaces = races.filter((race: Race) => {
        const raceDate = new Date(`${race.date}T${race.time}`);
        if (filters.status === "upcoming") return raceDate > now;
        if (filters.status === "past") return raceDate < now;
        return true;
      });

      set({ races: filteredRaces });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : "Failed to fetch races" });
    } finally {
      set({ isLoading: false });
    }
  },
}));
