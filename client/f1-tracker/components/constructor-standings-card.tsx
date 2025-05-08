"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { getTopConstructors } from "@/lib/services/f1-api";
import { ConstructorStanding } from "@/lib/types/f1";
import { teamColors } from "@/lib/constants/team-colors";
import Link from "next/link";

export function ConstructorStandingsCard() {
  const [topConstructors, setTopConstructors] = useState<ConstructorStanding[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTopConstructors() {
      try {
        const constructors = await getTopConstructors(5);
        setTopConstructors(constructors);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch constructors");
      } finally {
        setIsLoading(false);
      }
    }

    fetchTopConstructors();
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
        <CardTitle>Constructor Standings</CardTitle>
        <CardDescription>2025 Season</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topConstructors.map(standing => (
            <div
              key={standing.Constructor.constructorId}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-1 h-10 rounded-full"
                  style={{
                    backgroundColor: `#${teamColors[standing.Constructor.name] || "000000"}`,
                  }}
                />
                <div>
                  <p className="text-sm font-medium leading-none">{standing.Constructor.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {standing.Constructor.nationality}
                  </p>
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
            <Link href="/constructors" className="text-sm text-primary hover:underline">
              View full standings →
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
