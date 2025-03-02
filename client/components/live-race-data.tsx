"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

type Driver = {
  position: number
  number: number
  code: string
  name: string
  team: string
  lapTime: string
  gap: string
  status: "racing" | "pitting" | "out"
  tires: "soft" | "medium" | "hard" | "intermediate" | "wet"
  laps: number
}

export function LiveRaceData() {
  const [drivers, setDrivers] = useState<Driver[]>([])
  const [loading, setLoading] = useState(true)
  const [lapCount, setLapCount] = useState(0)
  const [totalLaps, setTotalLaps] = useState(57)

  useEffect(() => {
    // In a real app, this would fetch from the F1 API
    // For demo purposes, we'll use mock data
    const mockDrivers: Driver[] = [
      {
        position: 1,
        number: 1,
        code: "VER",
        name: "Max Verstappen",
        team: "Red Bull Racing",
        lapTime: "1:32.546",
        gap: "-",
        status: "racing",
        tires: "medium",
        laps: 23,
      },
      {
        position: 2,
        number: 11,
        code: "PER",
        name: "Sergio Perez",
        team: "Red Bull Racing",
        lapTime: "1:32.897",
        gap: "+3.245",
        status: "racing",
        tires: "medium",
        laps: 23,
      },
      {
        position: 3,
        number: 16,
        code: "LEC",
        name: "Charles Leclerc",
        team: "Ferrari",
        lapTime: "1:33.012",
        gap: "+5.147",
        status: "racing",
        tires: "hard",
        laps: 23,
      },
      {
        position: 4,
        number: 55,
        code: "SAI",
        name: "Carlos Sainz",
        team: "Ferrari",
        lapTime: "1:33.245",
        gap: "+7.343",
        status: "racing",
        tires: "hard",
        laps: 23,
      },
      {
        position: 5,
        number: 44,
        code: "HAM",
        name: "Lewis Hamilton",
        team: "Mercedes",
        lapTime: "1:33.456",
        gap: "+12.876",
        status: "racing",
        tires: "medium",
        laps: 22,
      },
      {
        position: 6,
        number: 63,
        code: "RUS",
        name: "George Russell",
        team: "Mercedes",
        lapTime: "1:33.567",
        gap: "+14.234",
        status: "racing",
        tires: "medium",
        laps: 22,
      },
      {
        position: 7,
        number: 4,
        code: "NOR",
        name: "Lando Norris",
        team: "McLaren",
        lapTime: "1:33.789",
        gap: "+18.567",
        status: "racing",
        tires: "soft",
        laps: 22,
      },
      {
        position: 8,
        number: 3,
        code: "RIC",
        name: "Daniel Ricciardo",
        team: "McLaren",
        lapTime: "1:34.012",
        gap: "+22.345",
        status: "pitting",
        tires: "soft",
        laps: 21,
      },
      {
        position: 9,
        number: 14,
        code: "ALO",
        name: "Fernando Alonso",
        team: "Aston Martin",
        lapTime: "1:34.234",
        gap: "+25.678",
        status: "racing",
        tires: "medium",
        laps: 22,
      },
      {
        position: 10,
        number: 18,
        code: "STR",
        name: "Lance Stroll",
        team: "Aston Martin",
        lapTime: "1:34.456",
        gap: "+28.901",
        status: "racing",
        tires: "medium",
        laps: 22,
      },
    ]

    setDrivers(mockDrivers)
    setLapCount(23)
    setLoading(false)

    // Simulate lap updates
    const interval = setInterval(() => {
      setLapCount((prev) => {
        if (prev < totalLaps) return prev + 1
        clearInterval(interval)
        return prev
      })

      setDrivers((prev) => {
        return prev.map((driver) => {
          // Simulate random lap time changes
          const lapTimeParts = driver.lapTime.split(":")
          const seconds = Number.parseFloat(lapTimeParts[1])
          const newSeconds = seconds + (Math.random() * 0.4 - 0.2)
          const newLapTime = `${lapTimeParts[0]}:${newSeconds.toFixed(3)}`

          // Update laps for most drivers
          const newLaps = Math.random() > 0.2 ? driver.laps + 1 : driver.laps

          // Randomly change tire status for some drivers
          const newTires =
            Math.random() > 0.95
              ? (["soft", "medium", "hard"][Math.floor(Math.random() * 3)] as Driver["tires"])
              : driver.tires

          // Randomly change status for some drivers
          const newStatus =
            Math.random() > 0.95
              ? (["racing", "pitting"][Math.floor(Math.random() * 2)] as Driver["status"])
              : driver.status

          return {
            ...driver,
            lapTime: newLapTime,
            laps: newLaps,
            tires: newTires,
            status: newStatus,
          }
        })
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [totalLaps])

  if (loading) {
    return <div className="flex justify-center p-8">Loading race data...</div>
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium">
            Lap {lapCount} of {totalLaps}
          </h3>
          <p className="text-sm text-muted-foreground">Miami Grand Prix</p>
        </div>
        <Progress value={(lapCount / totalLaps) * 100} className="w-1/3" />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">Pos</TableHead>
            <TableHead>Driver</TableHead>
            <TableHead className="hidden md:table-cell">Team</TableHead>
            <TableHead className="hidden md:table-cell">Lap Time</TableHead>
            <TableHead>Gap</TableHead>
            <TableHead className="hidden md:table-cell">Tires</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {drivers.map((driver) => (
            <TableRow key={driver.code}>
              <TableCell className="font-medium">{driver.position}</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-medium">{driver.code}</span>
                  <span className="text-xs text-muted-foreground hidden md:inline">{driver.name}</span>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">{driver.team}</TableCell>
              <TableCell className="hidden md:table-cell">{driver.lapTime}</TableCell>
              <TableCell>{driver.gap}</TableCell>
              <TableCell className="hidden md:table-cell">
                <Badge
                  variant={
                    driver.tires === "soft" ? "destructive" : driver.tires === "medium" ? "default" : "secondary"
                  }
                >
                  {driver.tires}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Badge
                  variant={
                    driver.status === "racing" ? "outline" : driver.status === "pitting" ? "secondary" : "destructive"
                  }
                >
                  {driver.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

