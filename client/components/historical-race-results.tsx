"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function HistoricalRaceResults() {
  const [season, setSeason] = useState("2023")
  const [race, setRace] = useState("Monaco Grand Prix")

  // Mock data - in a real app, this would be fetched from an API
  const seasons = ["2023", "2022", "2021", "2020", "2019"]
  const races = [
    "Bahrain Grand Prix",
    "Saudi Arabian Grand Prix",
    "Australian Grand Prix",
    "Chinese Grand Prix",
    "Miami Grand Prix",
    "Emilia Romagna Grand Prix",
    "Monaco Grand Prix",
  ]

  const raceResults = [
    {
      position: 1,
      driver: "Max Verstappen",
      team: "Red Bull Racing",
      time: "1:48:51.980",
      points: 25,
      fastestLap: false,
    },
    { position: 2, driver: "Fernando Alonso", team: "Aston Martin", time: "+27.921s", points: 18, fastestLap: false },
    { position: 3, driver: "Esteban Ocon", team: "Alpine", time: "+36.016s", points: 15, fastestLap: false },
    { position: 4, driver: "Lewis Hamilton", team: "Mercedes", time: "+39.062s", points: 12, fastestLap: false },
    { position: 5, driver: "George Russell", team: "Mercedes", time: "+56.284s", points: 10, fastestLap: false },
    { position: 6, driver: "Charles Leclerc", team: "Ferrari", time: "+1:01.890s", points: 8, fastestLap: false },
    { position: 7, driver: "Pierre Gasly", team: "Alpine", time: "+1:02.362s", points: 6, fastestLap: false },
    { position: 8, driver: "Carlos Sainz", team: "Ferrari", time: "+1:03.391s", points: 4, fastestLap: false },
    { position: 9, driver: "Lando Norris", team: "McLaren", time: "+1:03.696s", points: 2, fastestLap: true },
    { position: 10, driver: "Oscar Piastri", team: "McLaren", time: "+1:03.696s", points: 1, fastestLap: false },
  ]

  const pitStops = [
    { driver: "Max Verstappen", lap: 28, duration: "2.4s", tireChange: "Medium to Hard" },
    { driver: "Fernando Alonso", lap: 26, duration: "2.6s", tireChange: "Medium to Hard" },
    { driver: "Esteban Ocon", lap: 30, duration: "2.5s", tireChange: "Medium to Hard" },
    { driver: "Lewis Hamilton", lap: 32, duration: "2.3s", tireChange: "Medium to Hard" },
    { driver: "George Russell", lap: 33, duration: "2.7s", tireChange: "Medium to Hard" },
    { driver: "Charles Leclerc", lap: 25, duration: "2.8s", tireChange: "Soft to Hard" },
    { driver: "Lando Norris", lap: 24, duration: "2.2s", tireChange: "Soft to Hard" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <label className="text-sm font-medium mb-1 block">Season</label>
          <Select value={season} onValueChange={setSeason}>
            <SelectTrigger>
              <SelectValue placeholder="Select season" />
            </SelectTrigger>
            <SelectContent>
              {seasons.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full md:w-1/2">
          <label className="text-sm font-medium mb-1 block">Race</label>
          <Select value={race} onValueChange={setRace}>
            <SelectTrigger>
              <SelectValue placeholder="Select race" />
            </SelectTrigger>
            <SelectContent>
              {races.map((r) => (
                <SelectItem key={r} value={r}>
                  {r}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">
          Race Results - {race} {season}
        </h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">Pos</TableHead>
              <TableHead>Driver</TableHead>
              <TableHead className="hidden md:table-cell">Team</TableHead>
              <TableHead className="hidden md:table-cell">Time</TableHead>
              <TableHead className="text-right">Points</TableHead>
              <TableHead className="text-right">Fastest Lap</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {raceResults.map((result) => (
              <TableRow key={result.position}>
                <TableCell className="font-medium">{result.position}</TableCell>
                <TableCell>{result.driver}</TableCell>
                <TableCell className="hidden md:table-cell">{result.team}</TableCell>
                <TableCell className="hidden md:table-cell">{result.time}</TableCell>
                <TableCell className="text-right">{result.points}</TableCell>
                <TableCell className="text-right">
                  {result.fastestLap && <Badge variant="purple">Fastest</Badge>}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Pit Stop Strategy</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Driver</TableHead>
              <TableHead>Lap</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Tire Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pitStops.map((stop, index) => (
              <TableRow key={index}>
                <TableCell>{stop.driver}</TableCell>
                <TableCell>{stop.lap}</TableCell>
                <TableCell>{stop.duration}</TableCell>
                <TableCell>{stop.tireChange}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

