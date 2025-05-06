"use client";

import { useEffect } from "react";
import { useF1 } from "@/lib/context/F1Context";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DriverStandings() {
  const { driverStandings, isLoading, error, fetchDriverStandings } = useF1();

  useEffect(() => {
    fetchDriverStandings();
  }, [fetchDriverStandings]);

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center min-h-[400px]">
          <div className="text-destructive">Error: {error}</div>
        </CardContent>
      </Card>
    );
  }

  if (!driverStandings.length) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center min-h-[400px]">
          <div className="text-muted-foreground">No driver standings available</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Driver Standings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Pos
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Driver
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Team
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Points
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Wins
                </th>
              </tr>
            </thead>
            <tbody>
              {driverStandings.map(standing => (
                <tr key={standing.driver.driver_number} className="border-b hover:bg-muted/50">
                  <td className="py-3 px-4 text-sm font-medium">{standing.position}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-8 w-8">
                        <Image
                          src={standing.driver.headshot_url}
                          alt={standing.driver.full_name}
                          fill
                          className="rounded-full object-cover"
                          onError={e => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/placeholder.svg";
                          }}
                        />
                      </div>
                      <div>
                        <div className="text-sm font-medium">{standing.driver.full_name}</div>
                        <div className="text-xs text-muted-foreground">
                          {standing.driver.country_code}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: `#${standing.driver.team_colour}` }}
                      />
                      <span className="text-sm">{standing.driver.team_name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm font-medium">{standing.points}</td>
                  <td className="py-3 px-4 text-sm">{standing.wins}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
