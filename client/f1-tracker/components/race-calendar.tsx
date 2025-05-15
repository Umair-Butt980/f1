"use client";

import { useEffect, useState } from "react";
import { useRaceCalendarStore } from "@/lib/stores/race-calendar.store";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Race } from "@/lib/types/race-calendar";

interface RaceCalendarProps {
  filter?: "upcoming" | "past" | "all";
}

export function RaceCalendar({ filter = "all" }: RaceCalendarProps) {
  const { races, isLoading, error, fetchRaces } = useRaceCalendarStore();

  useEffect(() => {
    fetchRaces();
  }, [fetchRaces]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <p className="text-destructive">Error: {error}</p>
      </div>
    );
  }

  if (!races || races.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <p className="text-muted-foreground">No races available</p>
      </div>
    );
  }

  const filteredRaces = races.filter(race => {
    if (!race.date || !race.time) return false;
    const raceDate = new Date(`${race.date}T${race.time}`);
    const now = new Date();

    switch (filter) {
      case "upcoming":
        return raceDate > now;
      case "past":
        return raceDate < now;
      default:
        return true;
    }
  });

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredRaces.map(race => (
        <RaceCard key={race.round} race={race} />
      ))}
    </div>
  );
}

interface RaceCardProps {
  race: Race;
}

function RaceCard({ race }: RaceCardProps) {
  if (!race || !race.date || !race.time) {
    return null;
  }

  const raceDate = new Date(`${race.date}T${race.time}`);
  const isUpcoming = raceDate > new Date();

  return (
    <Card className={`relative overflow-hidden ${isUpcoming ? "border-primary" : ""}`}>
      {isUpcoming && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
          Upcoming
        </div>
      )}
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">Round {race.round}</span>
            <h3 className="text-lg font-semibold">{race.raceName}</h3>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{format(raceDate, "EEEE, MMMM d, yyyy")}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{format(raceDate, "h:mm a")}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>
              {race.Circuit.circuitName}, {race.Circuit.Location.country}
            </span>
          </div>

          <div className="pt-4 border-t">
            <h4 className="text-sm font-medium mb-2">Session Times</h4>
            <div className="space-y-2 text-sm">
              {race.FirstPractice && (
                <div className="flex justify-between">
                  <span>Practice 1</span>
                  <span>
                    {format(
                      new Date(`${race.FirstPractice.date}T${race.FirstPractice.time}`),
                      "MMM d, h:mm a"
                    )}
                  </span>
                </div>
              )}
              {race.SecondPractice && (
                <div className="flex justify-between">
                  <span>Practice 2</span>
                  <span>
                    {format(
                      new Date(`${race.SecondPractice.date}T${race.SecondPractice.time}`),
                      "MMM d, h:mm a"
                    )}
                  </span>
                </div>
              )}
              {race.ThirdPractice && (
                <div className="flex justify-between">
                  <span>Practice 3</span>
                  <span>
                    {format(
                      new Date(`${race.ThirdPractice.date}T${race.ThirdPractice.time}`),
                      "MMM d, h:mm a"
                    )}
                  </span>
                </div>
              )}
              {race.Qualifying && (
                <div className="flex justify-between">
                  <span>Qualifying</span>
                  <span>
                    {format(
                      new Date(`${race.Qualifying.date}T${race.Qualifying.time}`),
                      "MMM d, h:mm a"
                    )}
                  </span>
                </div>
              )}
              {race.Sprint && (
                <div className="flex justify-between">
                  <span>Sprint</span>
                  <span>
                    {format(new Date(`${race.Sprint.date}T${race.Sprint.time}`), "MMM d, h:mm a")}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
