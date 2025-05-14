"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BiaxialLineChart } from "@/components/ui/biaxial-line-chart";
import { getPitStops } from "@/lib/services/f1-api";

interface PitStopComparisonProps {
  driver1Id: string;
  driver2Id: string;
}

interface PitStopData {
  race: string;
  driver1Stops: number;
  driver2Stops: number;
  driver1TotalTime: number;
  driver2TotalTime: number;
}

export function PitStopComparison({ driver1Id, driver2Id }: PitStopComparisonProps) {
  const [chartData, setChartData] = useState<PitStopData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const races = ["1", "2", "3"]; // Example race rounds
        const pitStopData: PitStopData[] = [];

        for (const round of races) {
          const data = await getPitStops(round);
          const pitStops = data.MRData.RaceTable.Races[0]?.PitStops || [];

          const driver1Stops = pitStops.filter((stop: any) => stop.driverId === driver1Id);
          const driver2Stops = pitStops.filter((stop: any) => stop.driverId === driver2Id);

          pitStopData.push({
            race: `Race ${round}`,
            driver1Stops: driver1Stops.length,
            driver2Stops: driver2Stops.length,
            driver1TotalTime: driver1Stops.reduce(
              (total: number, stop: any) => total + Number(stop.duration),
              0
            ),
            driver2TotalTime: driver2Stops.reduce(
              (total: number, stop: any) => total + Number(stop.duration),
              0
            ),
          });
        }

        setChartData(pitStopData);
      } catch (err) {
        setError("Failed to fetch pit stop data");
        console.error("Error fetching pit stop data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [driver1Id, driver2Id]);

  if (loading) {
    return <div>Loading pit stop data...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pit Stop Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <BiaxialLineChart
          data={chartData}
          xAxisDataKey="race"
          yAxis1DataKey="driver1TotalTime"
          yAxis2DataKey="driver2TotalTime"
          yAxis1Name={`${driver1Id} Total Time`}
          yAxis2Name={`${driver2Id} Total Time`}
        />
      </CardContent>
    </Card>
  );
}
