"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { getDriverById, getOngoingRace, lapTimes } from "@/lib/f1-data"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react"
import { Clock, Flag, Timer } from "lucide-react"
import Image from "next/image"

export default function LivePage() {
  const race = getOngoingRace()
  const [elapsedTime, setElapsedTime] = useState(0)
  const [currentLap, setCurrentLap] = useState(1)
  const totalLaps = 57 // Typical F1 race
  const raceProgress = (currentLap / totalLaps) * 100

  // Simulate race progress
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prev) => prev + 1)

      // Update lap every 90 seconds
      if (elapsedTime > 0 && elapsedTime % 90 === 0 && currentLap < totalLaps) {
        setCurrentLap((prev) => prev + 1)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [elapsedTime, currentLap])

  // Format elapsed time as hh:mm:ss
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60

    return [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      secs.toString().padStart(2, "0"),
    ].join(":")
  }

  if (!race) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <Flag className="h-16 w-16 text-muted-foreground mb-4" />
        <h1 className="text-2xl font-bold mb-2">No Live Race</h1>
        <p className="text-muted-foreground">There is no race currently in progress.</p>
      </div>
    )
  }

  // Get current race positions (in a real app, this would be live data)
  const currentPositions = lapTimes
    .filter((lap) => lap.lap === Math.min(currentLap, 2)) // Use lap 2 data if we're beyond lap 2
    .sort((a, b) => {
      const timeA = a.time.split(":").reduce((acc, time) => 60 * acc + Number.parseFloat(time), 0)
      const timeB = b.time.split(":").reduce((acc, time) => 60 * acc + Number.parseFloat(time), 0)
      return timeA - timeB
    })
    .map((lap, index) => ({
      position: index + 1,
      driverId: lap.driverId,
      lapTime: lap.time,
      gap: index === 0 ? "LEADER" : `+${(Math.random() * 10).toFixed(3)}s`,
    }))

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Live Race</h1>
        <div className="flex items-center gap-2 px-4 py-2 bg-f1-red text-white rounded-md">
          <Timer className="h-4 w-4" />
          <span>LIVE</span>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>{race.name}</CardTitle>
          <CardDescription>
            Round {race.round} · {race.circuit.name}
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
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Lap</p>
                  <p className="text-xl font-bold">
                    {currentLap} / {totalLaps}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Elapsed Time</p>
                  <p className="text-xl font-bold">{formatTime(elapsedTime)}</p>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Race Progress</span>
                  <span>{Math.round(raceProgress)}%</span>
                </div>
                <Progress value={raceProgress} className="h-2" />
              </div>

              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Weather</p>
                <p className="text-sm">Sunny · 25°C · Wind 10 km/h</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="positions">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="positions">Positions</TabsTrigger>
          <TabsTrigger value="lap-times">Lap Times</TabsTrigger>
          <TabsTrigger value="pit-stops">Pit Stops</TabsTrigger>
        </TabsList>

        <TabsContent value="positions" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16">Pos</TableHead>
                    <TableHead>Driver</TableHead>
                    <TableHead className="text-right">Gap</TableHead>
                    <TableHead className="text-right">Last Lap</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentPositions.map((pos) => {
                    const driver = getDriverById(pos.driverId)
                    if (!driver) return null

                    return (
                      <TableRow key={pos.driverId}>
                        <TableCell className="font-medium">{pos.position}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-1 h-8 rounded-full" style={{ backgroundColor: driver.teamColor }} />
                            <Avatar className="h-8 w-8 border">
                              <AvatarImage src={driver.imageUrl || "/placeholder.svg"} alt={driver.name} />
                              <AvatarFallback>{driver.code}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium leading-none">{driver.code}</p>
                              <p className="text-xs text-muted-foreground">{driver.team}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">{pos.gap}</TableCell>
                        <TableCell className="text-right">{pos.lapTime}</TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lap-times" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Driver</TableHead>
                    <TableHead>Lap</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>S1</TableHead>
                    <TableHead>S2</TableHead>
                    <TableHead>S3</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lapTimes.map((lap, index) => {
                    const driver = getDriverById(lap.driverId)
                    if (!driver) return null

                    return (
                      <TableRow key={`${lap.driverId}-${lap.lap}-${index}`}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6 border">
                              <AvatarImage src={driver.imageUrl || "/placeholder.svg"} alt={driver.name} />
                              <AvatarFallback>{driver.code}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-medium">{driver.code}</span>
                          </div>
                        </TableCell>
                        <TableCell>{lap.lap}</TableCell>
                        <TableCell>{lap.time}</TableCell>
                        <TableCell>{lap.sector1}</TableCell>
                        <TableCell>{lap.sector2}</TableCell>
                        <TableCell>{lap.sector3}</TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pit-stops" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-center py-8">
                <div className="text-center">
                  <Clock className="mx-auto h-10 w-10 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No Pit Stops Yet</h3>
                  <p className="text-sm text-muted-foreground">
                    Pit stop information will appear here during the race.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
