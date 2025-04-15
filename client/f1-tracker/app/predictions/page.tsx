"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { drivers, getUpcomingRace } from "@/lib/f1-data"
import { useState } from "react"
import Image from "next/image"

export default function PredictionsPage() {
  const upcomingRace = getUpcomingRace()
  const [predictionType, setPredictionType] = useState("race")

  // Generate random prediction percentages for each driver
  const driverPredictions = [...drivers]
    .map((driver) => ({
      ...driver,
      winProbability: Math.random() * 100,
      podiumProbability: Math.random() * 100,
      pointsProbability: Math.random() * 100,
    }))
    .sort((a, b) => {
      if (predictionType === "race") {
        return b.winProbability - a.winProbability
      } else if (predictionType === "podium") {
        return b.podiumProbability - a.podiumProbability
      } else {
        return b.pointsProbability - a.pointsProbability
      }
    })
    .slice(0, 10)

  if (!upcomingRace) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-2xl font-bold mb-2">No Upcoming Race</h1>
        <p className="text-muted-foreground">There is no upcoming race to predict.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Race Predictions</h1>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Upcoming Race: {upcomingRace.name}</CardTitle>
          <CardDescription>
            {upcomingRace.circuit.name} · {upcomingRace.circuit.location}, {upcomingRace.circuit.country}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative h-40 md:h-full rounded-md overflow-hidden">
              <Image
                src={upcomingRace.circuit.imageUrl || "/placeholder.svg"}
                alt={upcomingRace.circuit.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Prediction Factors</h3>
                <ul className="text-sm space-y-1">
                  <li>• Historical performance at this circuit</li>
                  <li>• Current season form</li>
                  <li>• Team performance trends</li>
                  <li>• Qualifying predictions</li>
                  <li>• Weather conditions</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Track Characteristics</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-sm">
                    <p className="text-muted-foreground">Top Speed</p>
                    <p className="font-medium">320 km/h</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-muted-foreground">Corners</p>
                    <p className="font-medium">16 (9 right, 7 left)</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-muted-foreground">DRS Zones</p>
                    <p className="font-medium">2</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-muted-foreground">Circuit Type</p>
                    <p className="font-medium">Street Circuit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="race" onValueChange={setPredictionType}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="race">Race Win</TabsTrigger>
          <TabsTrigger value="podium">Podium Finish</TabsTrigger>
          <TabsTrigger value="points">Points Finish</TabsTrigger>
        </TabsList>

        <TabsContent value="race" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Race Win Predictions</CardTitle>
              <CardDescription>Probability of winning the race</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {driverPredictions.map((driver) => (
                  <div key={driver.id} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8 border">
                          <AvatarImage src={driver.imageUrl || "/placeholder.svg"} alt={driver.name} />
                          <AvatarFallback>{driver.code}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{driver.name}</span>
                      </div>
                      <span className="text-sm font-medium">{driver.winProbability.toFixed(1)}%</span>
                    </div>
                    <Progress value={driver.winProbability} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="podium" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Podium Finish Predictions</CardTitle>
              <CardDescription>Probability of finishing in the top 3</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {driverPredictions.map((driver) => (
                  <div key={driver.id} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8 border">
                          <AvatarImage src={driver.imageUrl || "/placeholder.svg"} alt={driver.name} />
                          <AvatarFallback>{driver.code}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{driver.name}</span>
                      </div>
                      <span className="text-sm font-medium">{driver.podiumProbability.toFixed(1)}%</span>
                    </div>
                    <Progress value={driver.podiumProbability} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="points" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Points Finish Predictions</CardTitle>
              <CardDescription>Probability of finishing in the top 10</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {driverPredictions.map((driver) => (
                  <div key={driver.id} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8 border">
                          <AvatarImage src={driver.imageUrl || "/placeholder.svg"} alt={driver.name} />
                          <AvatarFallback>{driver.code}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{driver.name}</span>
                      </div>
                      <span className="text-sm font-medium">{driver.pointsProbability.toFixed(1)}%</span>
                    </div>
                    <Progress value={driver.pointsProbability} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Prediction Methodology</CardTitle>
          <CardDescription>How our predictions work</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Our F1 race predictions are generated using a combination of historical data, current form, and machine
              learning algorithms. The model takes into account:
            </p>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <span className="text-xs font-bold text-primary">1</span>
                </div>
                <div>
                  <p className="font-medium">Historical Performance</p>
                  <p className="text-muted-foreground">Past results at the specific circuit and similar track types</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <span className="text-xs font-bold text-primary">2</span>
                </div>
                <div>
                  <p className="font-medium">Current Form</p>
                  <p className="text-muted-foreground">Recent race results and qualifying performances</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <span className="text-xs font-bold text-primary">3</span>
                </div>
                <div>
                  <p className="font-medium">Team Performance</p>
                  <p className="text-muted-foreground">Car development, reliability, and pit stop efficiency</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <span className="text-xs font-bold text-primary">4</span>
                </div>
                <div>
                  <p className="font-medium">Track Characteristics</p>
                  <p className="text-muted-foreground">How well each car's strengths match the circuit demands</p>
                </div>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              The predictions are updated after each race weekend to incorporate the latest data and performance trends.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
