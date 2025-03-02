"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export function DriverComparison() {
  const [driver1, setDriver1] = useState("Max Verstappen")
  const [driver2, setDriver2] = useState("Lewis Hamilton")

  // Mock data - in a real app, this would be fetched from an API
  const drivers = [
    "Max Verstappen",
    "Lewis Hamilton",
    "Charles Leclerc",
    "Sergio Perez",
    "Carlos Sainz",
    "George Russell",
    "Lando Norris",
    "Fernando Alonso",
    "Oscar Piastri",
    "Lance Stroll",
  ]

  // Stats for comparison
  const driverStats = {
    "Max Verstappen": {
      wins: 54,
      podiums: 98,
      poles: 39,
      fastestLaps: 30,
      championships: 3,
      pointsPerRace: 15.2,
      qualifyingAvg: 2.1,
      raceAvg: 1.8,
      wetWeatherPerf: 95,
      consistency: 92,
    },
    "Lewis Hamilton": {
      wins: 103,
      podiums: 197,
      poles: 104,
      fastestLaps: 64,
      championships: 7,
      pointsPerRace: 14.1,
      qualifyingAvg: 2.3,
      raceAvg: 2.4,
      wetWeatherPerf: 90,
      consistency: 88,
    },
    "Charles Leclerc": {
      wins: 5,
      podiums: 28,
      poles: 23,
      fastestLaps: 7,
      championships: 0,
      pointsPerRace: 10.8,
      qualifyingAvg: 3.2,
      raceAvg: 4.1,
      wetWeatherPerf: 82,
      consistency: 75,
    },
    "Sergio Perez": {
      wins: 6,
      podiums: 35,
      poles: 3,
      fastestLaps: 10,
      championships: 0,
      pointsPerRace: 8.2,
      qualifyingAvg: 6.5,
      raceAvg: 5.2,
      wetWeatherPerf: 78,
      consistency: 80,
    },
    "Carlos Sainz": {
      wins: 3,
      podiums: 20,
      poles: 4,
      fastestLaps: 3,
      championships: 0,
      pointsPerRace: 7.9,
      qualifyingAvg: 6.8,
      raceAvg: 6.1,
      wetWeatherPerf: 80,
      consistency: 85,
    },
    "George Russell": {
      wins: 1,
      podiums: 10,
      poles: 2,
      fastestLaps: 6,
      championships: 0,
      pointsPerRace: 7.5,
      qualifyingAvg: 5.8,
      raceAvg: 6.2,
      wetWeatherPerf: 75,
      consistency: 82,
    },
    "Lando Norris": {
      wins: 1,
      podiums: 13,
      poles: 1,
      fastestLaps: 5,
      championships: 0,
      pointsPerRace: 7.8,
      qualifyingAvg: 6.1,
      raceAvg: 6.5,
      wetWeatherPerf: 85,
      consistency: 80,
    },
    "Fernando Alonso": {
      wins: 32,
      podiums: 106,
      poles: 22,
      fastestLaps: 24,
      championships: 2,
      pointsPerRace: 8.9,
      qualifyingAvg: 5.2,
      raceAvg: 4.8,
      wetWeatherPerf: 92,
      consistency: 85,
    },
    "Oscar Piastri": {
      wins: 0,
      podiums: 2,
      poles: 0,
      fastestLaps: 1,
      championships: 0,
      pointsPerRace: 5.2,
      qualifyingAvg: 8.1,
      raceAvg: 7.9,
      wetWeatherPerf: 70,
      consistency: 65,
    },
    "Lance Stroll": {
      wins: 0,
      podiums: 3,
      poles: 1,
      fastestLaps: 0,
      championships: 0,
      pointsPerRace: 3.8,
      qualifyingAvg: 12.3,
      raceAvg: 10.5,
      wetWeatherPerf: 75,
      consistency: 60,
    },
  }

  const stats1 = driverStats[driver1]
  const stats2 = driverStats[driver2]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <label className="text-sm font-medium mb-1 block">Driver 1</label>
          <Select value={driver1} onValueChange={setDriver1}>
            <SelectTrigger>
              <SelectValue placeholder="Select driver" />
            </SelectTrigger>
            <SelectContent>
              {drivers.map((d) => (
                <SelectItem key={d} value={d}>
                  {d}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full md:w-1/2">
          <label className="text-sm font-medium mb-1 block">Driver 2</label>
          <Select value={driver2} onValueChange={setDriver2}>
            <SelectTrigger>
              <SelectValue placeholder="Select driver" />
            </SelectTrigger>
            <SelectContent>
              {drivers.map((d) => (
                <SelectItem key={d} value={d}>
                  {d}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="career" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="career">Career Stats</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>

        <TabsContent value="career">
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg font-medium mb-4">{driver1}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Wins:</span>
                    <span className="font-medium">{stats1.wins}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Podiums:</span>
                    <span className="font-medium">{stats1.podiums}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pole Positions:</span>
                    <span className="font-medium">{stats1.poles}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fastest Laps:</span>
                    <span className="font-medium">{stats1.fastestLaps}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Championships:</span>
                    <span className="font-medium">{stats1.championships}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg font-medium mb-4">{driver2}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Wins:</span>
                    <span className="font-medium">{stats2.wins}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Podiums:</span>
                    <span className="font-medium">{stats2.podiums}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pole Positions:</span>
                    <span className="font-medium">{stats2.poles}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fastest Laps:</span>
                    <span className="font-medium">{stats2.fastestLaps}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Championships:</span>
                    <span className="font-medium">{stats2.championships}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance">
          <div className="space-y-6 mt-4">
            <ComparisonBar
              label="Points Per Race"
              value1={stats1.pointsPerRace}
              value2={stats2.pointsPerRace}
              max={20}
              driver1={driver1}
              driver2={driver2}
            />
            <ComparisonBar
              label="Qualifying Position (Avg)"
              value1={stats1.qualifyingAvg}
              value2={stats2.qualifyingAvg}
              max={20}
              driver1={driver1}
              driver2={driver2}
              lowerIsBetter
            />
            <ComparisonBar
              label="Race Position (Avg)"
              value1={stats1.raceAvg}
              value2={stats2.raceAvg}
              max={20}
              driver1={driver1}
              driver2={driver2}
              lowerIsBetter
            />
          </div>
        </TabsContent>

        <TabsContent value="skills">
          <div className="space-y-6 mt-4">
            <ComparisonBar
              label="Wet Weather Performance"
              value1={stats1.wetWeatherPerf}
              value2={stats2.wetWeatherPerf}
              max={100}
              driver1={driver1}
              driver2={driver2}
            />
            <ComparisonBar
              label="Consistency"
              value1={stats1.consistency}
              value2={stats2.consistency}
              max={100}
              driver1={driver1}
              driver2={driver2}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ComparisonBar({
  label,
  value1,
  value2,
  max,
  driver1,
  driver2,
  lowerIsBetter = false,
}: {
  label: string
  value1: number
  value2: number
  max: number
  driver1: string
  driver2: string
  lowerIsBetter?: boolean
}) {
  const percentage1 = (value1 / max) * 100
  const percentage2 = (value2 / max) * 100

  // Determine which driver is better for this stat
  const driver1IsBetter = lowerIsBetter ? value1 < value2 : value1 > value2

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm text-muted-foreground">{lowerIsBetter ? "Lower is better" : "Higher is better"}</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>{driver1}</span>
            <span className={driver1IsBetter ? "font-bold text-primary" : ""}>{value1}</span>
          </div>
          <Progress value={lowerIsBetter ? 100 - percentage1 : percentage1} className="h-2" />
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>{driver2}</span>
            <span className={!driver1IsBetter ? "font-bold text-primary" : ""}>{value2}</span>
          </div>
          <Progress value={lowerIsBetter ? 100 - percentage2 : percentage2} className="h-2" />
        </div>
      </div>
    </div>
  )
}

