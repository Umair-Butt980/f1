"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DriverComparison } from "@/components/driver-comparison";
import { PitStopComparison } from "@/components/pit-stop-comparison";
import { LapTimeComparison } from "@/components/lap-time-comparison";
import { useF1 } from "@/lib/context/F1Context";

export default function ComparisonPage() {
  const { getAllDrivers, fetchDriverStandings } = useF1();
  const [selectedDriver1, setSelectedDriver1] = useState<string>("");
  const [selectedDriver2, setSelectedDriver2] = useState<string>("");
  const [drivers, setDrivers] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    fetchDriverStandings();
  }, [fetchDriverStandings]);

  useEffect(() => {
    const allDrivers = getAllDrivers();
    setDrivers(allDrivers);
  }, [getAllDrivers]);

  const firstHalfDrivers = drivers.slice(0, 10);
  const secondHalfDrivers = drivers.slice(10);

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Driver Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Driver 1</label>
              <Select value={selectedDriver1} onValueChange={setSelectedDriver1}>
                <SelectTrigger>
                  <SelectValue placeholder="Select first driver" />
                </SelectTrigger>
                <SelectContent>
                  {firstHalfDrivers.map(driver => (
                    <SelectItem key={driver.id} value={driver.id}>
                      {driver.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Driver 2</label>
              <Select value={selectedDriver2} onValueChange={setSelectedDriver2}>
                <SelectTrigger>
                  <SelectValue placeholder="Select second driver" />
                </SelectTrigger>
                <SelectContent>
                  {secondHalfDrivers.map(driver => (
                    <SelectItem key={driver.id} value={driver.id}>
                      {driver.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {selectedDriver1 && selectedDriver2 && (
        <Tabs defaultValue="points" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="points">Points Comparison</TabsTrigger>
            <TabsTrigger value="pitstops">Pit Stop Analysis</TabsTrigger>
            <TabsTrigger value="laptimes">Lap Time Analysis</TabsTrigger>
          </TabsList>
          <TabsContent value="points">
            <DriverComparison driver1Id={selectedDriver1} driver2Id={selectedDriver2} />
          </TabsContent>
          <TabsContent value="pitstops">
            <PitStopComparison driver1Id={selectedDriver1} driver2Id={selectedDriver2} />
          </TabsContent>
          <TabsContent value="laptimes">
            <LapTimeComparison driver1Id={selectedDriver1} driver2Id={selectedDriver2} />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
