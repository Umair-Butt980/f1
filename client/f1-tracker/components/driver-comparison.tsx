"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BiaxialLineChart } from "@/components/ui/biaxial-line-chart";
import { getDriverResults } from "@/lib/f1-data";

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

        const [driver1Results, driver2Results] = await Promise.all([
          getDriverResults(driver1Id),
          getDriverResults(driver2Id),
        ]);

        const combinedData = driver1Results.map((result, index) => ({
          race: result.raceName,
          driver1Points: Number(result.points),
          driver2Points: Number(driver2Results[index]?.points || 0),
          driver1Position: Number(result.position),
          driver2Position: Number(driver2Results[index]?.position || 0),
        }));

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
      </CardHeader>
      <CardContent>
        <BiaxialLineChart
          data={chartData}
          xAxisDataKey="race"
          yAxis1DataKey="driver1Points"
          yAxis2DataKey="driver2Points"
          yAxis1Name={`${driver1Id} Points`}
          yAxis2Name={`${driver2Id} Points`}
        />
      </CardContent>
    </Card>
  );
}
