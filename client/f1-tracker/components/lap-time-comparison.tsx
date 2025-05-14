"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BiaxialLineChart } from "@/components/ui/biaxial-line-chart";
import { getLapTimes } from "@/lib/services/f1-api";

interface LapTimeComparisonProps {
  driver1Id: string;
  driver2Id: string;
}

interface LapTimeData {
  race: string;
  driver1FastestLap: number;
  driver2FastestLap: number;
  driver1AverageLap: number;
  driver2AverageLap: number;
}

export function LapTimeComparison({ driver1Id, driver2Id }: LapTimeComparisonProps) {
  const [chartData, setChartData] = useState<LapTimeData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const races = ["1", "2", "3"]; // Example race rounds
        const lapTimeData: LapTimeData[] = [];

        for (const round of races) {
          const data = await getLapTimes(round);
          const laps = data.MRData.RaceTable.Races[0]?.Laps || [];

          const driver1Laps = laps.flatMap((lap: any) =>
            lap.Timings.filter((timing: any) => timing.driverId === driver1Id)
          );
          const driver2Laps = laps.flatMap((lap: any) =>
            lap.Timings.filter((timing: any) => timing.driverId === driver2Id)
          );

          // Convert lap times to seconds for easier comparison
          const convertToSeconds = (time: string) => {
            const [minutes, seconds] = time.split(":");
            return Number(minutes) * 60 + Number(seconds);
          };

          lapTimeData.push({
            race: `Race ${round}`,
            driver1FastestLap: Math.min(
              ...driver1Laps.map((lap: any) => convertToSeconds(lap.time))
            ),
            driver2FastestLap: Math.min(
              ...driver2Laps.map((lap: any) => convertToSeconds(lap.time))
            ),
            driver1AverageLap:
              driver1Laps.reduce((sum: number, lap: any) => sum + convertToSeconds(lap.time), 0) /
              driver1Laps.length,
            driver2AverageLap:
              driver2Laps.reduce((sum: number, lap: any) => sum + convertToSeconds(lap.time), 0) /
              driver2Laps.length,
          });
        }

        setChartData(lapTimeData);
      } catch (err) {
        setError("Failed to fetch lap time data");
        console.error("Error fetching lap time data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [driver1Id, driver2Id]);

  if (loading) {
    return <div>Loading lap time data...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lap Time Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <BiaxialLineChart
          data={chartData}
          xAxisDataKey="race"
          yAxis1DataKey="driver1AverageLap"
          yAxis2DataKey="driver2AverageLap"
          yAxis1Name={`${driver1Id} Average Lap`}
          yAxis2Name={`${driver2Id} Average Lap`}
        />
      </CardContent>
    </Card>
  );
}
