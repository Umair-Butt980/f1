"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RaceCalendar } from "@/components/race-calendar";
import { useState } from "react";

export default function SchedulePage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past" | "all">("upcoming");

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Race Schedule</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>2025 Season Calendar</CardTitle>
            <CardDescription>Complete race schedule with session times</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs
              defaultValue="upcoming"
              className="w-full"
              onValueChange={value => setActiveTab(value as "upcoming" | "past" | "all")}
            >
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="upcoming">Upcoming Races</TabsTrigger>
                <TabsTrigger value="past">Past Races</TabsTrigger>
                <TabsTrigger value="all">All Races</TabsTrigger>
              </TabsList>
              <TabsContent value="upcoming">
                <RaceCalendar filter="upcoming" />
              </TabsContent>
              <TabsContent value="past">
                <RaceCalendar filter="past" />
              </TabsContent>
              <TabsContent value="all">
                <RaceCalendar filter="all" />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
