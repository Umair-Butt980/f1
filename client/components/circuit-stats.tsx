"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function CircuitStats() {
  const [circuit, setCircuit] = useState("Monaco")

  // Mock data - in a real app, this would be fetched from an API
  const circuits = ["Monaco", "Silverstone", "Spa-Francorchamps", "Monza", "Suzuka", "Circuit of the Americas"]

  const lapRecords = [
    { year: 2023, driver: "Lewis Hamilton", team: "Mercedes", time: "1:12.909", speed: "167.5 km/h" },
    { year: 2022, driver: "Lando Norris", team: "McLaren", time: "1:14.693", speed: "162.5 km/h" },
    { year: 2021, driver: "Lewis Hamilton", team: "Mercedes", time: "1:12.909", speed: "167.5 km/h" },
    { year: 2019, driver: "Pierre Gasly", team: "Red Bull Racing", time: "1:14.279", speed: "163.4 km/h" },
    { year: 2018, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:14.260", speed: "163.4 km/h" },
  ]

  const mostWins = [
    { driver: "Ayrton Senna", wins: 6, years: "1987, 1989, 1990, 1991, 1992, 1993" },
    { driver: "Graham Hill", wins: 5, years: "1963, 1964, 1965, 1968, 1969" },
    { driver: "Michael Schumacher", wins: 5, years: "1994, 1995, 1997, 1999, 2001" },
    { driver: "Lewis Hamilton", wins: 3, years: "2008, 2016, 2019" },
    { driver: "Alain Prost", wins: 4, years: "1984, 1985, 1986, 1988" },
  ]

  return (
    <div className="space-y-6">
      <div className="w-full md:w-1/3">
        <label className="text-sm font-medium mb-1 block">Circuit</label>
        <Select value={circuit} onValueChange={setCircuit}>
          <SelectTrigger>
            <SelectValue placeholder="Select circuit" />
          </SelectTrigger>
          <SelectContent>
            {circuits.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2">
          <CardContent className="p-4">
            <h3 className="text-lg font-medium mb-4">Lap Records</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Year</TableHead>
                  <TableHead>Driver</TableHead>
                  <TableHead className="hidden md:table-cell">Team</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead className="hidden md:table-cell">Avg Speed</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {lapRecords.map((record) => (
                  <TableRow key={record.year}>
                    <TableCell>{record.year}</TableCell>
                    <TableCell>{record.driver}</TableCell>
                    <TableCell className="hidden md:table-cell">{record.team}</TableCell>
                    <TableCell>{record.time}</TableCell>
                    <TableCell className="hidden md:table-cell">{record.speed}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-medium mb-4">Most Wins</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Driver</TableHead>
                  <TableHead>Wins</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mostWins.map((record) => (
                  <TableRow key={record.driver}>
                    <TableCell>{record.driver}</TableCell>
                    <TableCell>{record.wins}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-4">
          <h3 className="text-lg font-medium mb-4">Circuit Characteristics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                The Monaco Grand Prix is a Formula One motor race held annually on the Circuit de Monaco. Run since
                1929, it is widely considered to be one of the most important and prestigious automobile races in the
                world.
              </p>
              <p className="text-sm text-muted-foreground">
                The circuit has been called "an exceptional location of glamour and prestige" and is one of the most
                demanding tracks in Formula One racing due to its tight corners, narrow width, and elevation changes.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">First Grand Prix:</span>
                <span className="text-sm font-medium">1950</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Number of laps:</span>
                <span className="text-sm font-medium">78</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Circuit length:</span>
                <span className="text-sm font-medium">3.337 km</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Race distance:</span>
                <span className="text-sm font-medium">260.286 km</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Turns:</span>
                <span className="text-sm font-medium">19 (8 left, 11 right)</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

