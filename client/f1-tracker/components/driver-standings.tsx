"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { getTopDrivers } from "@/lib/services/f1-api";
import { DriverStanding } from "@/lib/types/f1";
import { teamColors } from "@/lib/constants/team-colors";
import Link from "next/link";

export function DriverStandings() {
  const [topDrivers, setTopDrivers] = useState<DriverStanding[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTopDrivers() {
      try {
        const drivers = await getTopDrivers(5);
        setTopDrivers(drivers);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch drivers");
      } finally {
        setIsLoading(false);
      }
    }

    fetchTopDrivers();
  }, []);

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center min-h-[200px]">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center min-h-[200px]">
          <div className="text-destructive">Error: {error}</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Driver Standings</CardTitle>
        <CardDescription>2025 Season</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topDrivers.map(standing => (
            <div key={standing.Driver.driverId} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-1 h-10 rounded-full"
                  style={{
                    backgroundColor: `#${teamColors[standing.Constructors[0].name] || "000000"}`,
                  }}
                />
                <Avatar className="h-10 w-10 border">
                  <AvatarImage
                    src={`/drivers/${standing.Driver.driverId}.jpg`}
                    alt={`${standing.Driver.givenName} ${standing.Driver.familyName}`}
                  />
                  <AvatarFallback>{standing.Driver.code}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">
                    {standing.Driver.givenName} {standing.Driver.familyName}
                  </p>
                  <p className="text-sm text-muted-foreground">{standing.Constructors[0].name}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-right">
                  <p className="text-sm font-medium">{standing.points} PTS</p>
                  <p className="text-xs text-muted-foreground">P{standing.position}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="pt-2">
            <Link href="/standings" className="text-sm text-primary hover:underline">
              View full standings →
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
