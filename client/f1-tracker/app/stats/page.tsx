"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DriverStandingsCard } from "@/components/driver-standings-card";
import { ConstructorStandings } from "@/components/constructor-standings";

export default function StatsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Statistics</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>2024 Season Standings</CardTitle>
            <CardDescription>Current driver and constructor championship standings</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="drivers" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="drivers">Driver Standings</TabsTrigger>
                <TabsTrigger value="constructors">Constructor Standings</TabsTrigger>
              </TabsList>
              <TabsContent value="drivers">
                <DriverStandingsCard />
              </TabsContent>
              <TabsContent value="constructors">
                <ConstructorStandings />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
