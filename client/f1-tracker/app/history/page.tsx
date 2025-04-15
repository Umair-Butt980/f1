"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getDriverById, races } from "@/lib/f1-data"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"
import Image from "next/image"

export default function HistoryPage() {
  const [selectedRace, setSelectedRace] = useState(races[0].id)

  const race = races.find((r) => r.id === selectedRace)

  if (!race) {
    return <div>Race not found</div>
  }

  // Format date for display
  const raceDate = new Date(race.date)
  const formattedDate = raceDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Race History</h1>
        <Select value={selectedRace} onValueChange={setSelectedRace}>
          <SelectTrigger className="w-[240px]">
            <SelectValue placeholder="Select a race" />
          </SelectTrigger>
          <SelectContent>
            {races.map((race) => (
              <SelectItem key={race.id} value={race.id}>
                {race.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>{race.name}</CardTitle>
          <CardDescription>
            Round {race.round} · {formattedDate}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative h-40 md:h-full rounded-md overflow-hidden">
              <Image
                src={race.circuit.imageUrl || "/placeholder.svg"}
                alt={race.circuit.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">{race.circuit.name}</h3>
              <p className="text-sm">
                {race.circuit.location}, {race.circuit.country}
              </p>

              <div className="pt-2">
                <h4 className="text-sm font-medium">Circuit Information</h4>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="text-sm">
                    <p className="text-muted-foreground">Length</p>
                    <p className="font-medium">5.412 km</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-muted-foreground">Laps</p>
                    <p className="font-medium">57</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-muted-foreground">Distance</p>
                    <p className="font-medium">308.484 km</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-muted-foreground">Lap Record</p>
                    <p className="font-medium">1:32.238</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="results">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="results">Results</TabsTrigger>
          <TabsTrigger value="qualifying">Qualifying</TabsTrigger>
          <TabsTrigger value="fastest-laps">Fastest Laps</TabsTrigger>
        </TabsList>

        <TabsContent value="results" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              {race.status === "completed" && race.results && race.results.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-16">Pos</TableHead>
                      <TableHead>Driver</TableHead>
                      <TableHead>Team</TableHead>
                      <TableHead className="text-right">Time</TableHead>
                      <TableHead className="text-right">Points</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {race.results.map((result) => {
                      const driver = getDriverById(result.driverId)
                      if (!driver) return null

                      return (
                        <TableRow key={result.driverId}>
                          <TableCell className="font-medium">{result.position}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Avatar className="h-8 w-8 border">
                                <AvatarImage src={driver.imageUrl || "/placeholder.svg"} alt={driver.name} />
                                <AvatarFallback>{driver.code}</AvatarFallback>
                              </Avatar>
                              <span>{driver.name}</span>
                            </div>
                          </TableCell>
                          <TableCell>{driver.team}</TableCell>
                          <TableCell className="text-right">{result.time}</TableCell>
                          <TableCell className="text-right">{result.points}</TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              ) : (
                <div className="flex items-center justify-center p-6">
                  <p className="text-muted-foreground">No results available for this race.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="qualifying" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-center py-8">
                <p className="text-muted-foreground">Qualifying data not available for this race.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fastest-laps" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-center py-8">
                <p className="text-muted-foreground">Fastest lap data not available for this race.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
