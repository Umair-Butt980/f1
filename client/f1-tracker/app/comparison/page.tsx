"use client";

import { useState } from "react";
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

export default function ComparisonPage() {
  const [driver1, setDriver1] = useState<string>("");
  const [driver2, setDriver2] = useState<string>("");

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Driver Comparison</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Driver 1</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={driver1} onValueChange={setDriver1}>
              <SelectTrigger>
                <SelectValue placeholder="Select driver 1" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="max_verstappen">Max Verstappen</SelectItem>
                <SelectItem value="lewis_hamilton">Lewis Hamilton</SelectItem>
                <SelectItem value="charles_leclerc">Charles Leclerc</SelectItem>
                <SelectItem value="lando_norris">Lando Norris</SelectItem>
                <SelectItem value="carlos_sainz">Carlos Sainz</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Driver 2</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={driver2} onValueChange={setDriver2}>
              <SelectTrigger>
                <SelectValue placeholder="Select driver 2" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="max_verstappen">Max Verstappen</SelectItem>
                <SelectItem value="lewis_hamilton">Lewis Hamilton</SelectItem>
                <SelectItem value="charles_leclerc">Charles Leclerc</SelectItem>
                <SelectItem value="lando_norris">Lando Norris</SelectItem>
                <SelectItem value="carlos_sainz">Carlos Sainz</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>

      {driver1 && driver2 && (
        <Tabs defaultValue="race-results" className="space-y-4">
          <TabsList>
            <TabsTrigger value="race-results">Race Results</TabsTrigger>
            <TabsTrigger value="pit-stops">Pit Stops</TabsTrigger>
            <TabsTrigger value="lap-times">Lap Times</TabsTrigger>
          </TabsList>

          <TabsContent value="race-results">
            <DriverComparison driver1Id={driver1} driver2Id={driver2} />
          </TabsContent>

          <TabsContent value="pit-stops">
            <PitStopComparison driver1Id={driver1} driver2Id={driver2} />
          </TabsContent>

          <TabsContent value="lap-times">
            <LapTimeComparison driver1Id={driver1} driver2Id={driver2} />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
