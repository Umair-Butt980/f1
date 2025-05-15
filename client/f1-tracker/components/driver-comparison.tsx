"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BiaxialLineChart } from "@/components/ui/biaxial-line-chart";
import { getRaceResults } from "@/lib/services/f1-api";

interface DriverComparisonProps {
  driver1Id: string;
  driver2Id: string;
}

interface ChartData {
  race: string;
  driver1Points: number;
  driver2Points: number;
  driver1Position: number;
  driver2Position: number;
}

export function DriverComparison({ driver1Id, driver2Id }: DriverComparisonProps) {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const data = await getRaceResults();
        const races = data.MRData.RaceTable.Races;

        const combinedData = races.map(race => {
          const driver1Result = race.Results.find(
            (result: any) => result.Driver.driverId === driver1Id
          );
          const driver2Result = race.Results.find(
            (result: any) => result.Driver.driverId === driver2Id
          );

          return {
            race: `${race.raceName} (Round ${race.round})`,
            driver1Points: Number(driver1Result?.points || 0),
            driver2Points: Number(driver2Result?.points || 0),
            driver1Position: Number(driver1Result?.position || 0),
            driver2Position: Number(driver2Result?.position || 0),
          };
        });

        setChartData(combinedData);
      } catch (err) {
        setError("Failed to fetch driver comparison data");
        console.error("Error fetching driver comparison:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [driver1Id, driver2Id]);

  if (loading) {
    return <div>Loading comparison data...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Race Results Comparison</CardTitle>
        <CardDescription>
          Comparing points earned by both drivers across {chartData.length} races in the current
          season
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-sm text-muted-foreground">
            <p>• Each point on the chart represents a race in the current season</p>
            <p>• The line shows the cumulative points earned by each driver</p>
            <p>• Hover over points to see detailed race information</p>
          </div>
          <BiaxialLineChart
            data={chartData}
            xAxisDataKey="race"
            yAxis1DataKey="driver1Points"
            yAxis2DataKey="driver2Points"
            yAxis1Name={`${driver1Id} Points`}
            yAxis2Name={`${driver2Id} Points`}
          />
        </div>
      </CardContent>
    </Card>
  );
}
