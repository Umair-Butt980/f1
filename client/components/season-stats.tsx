"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SeasonStats() {
  const [season, setSeason] = useState("2023")

  // Mock data - in a real app, this would be fetched from an API
  const seasons = ["2023", "2022", "2021", "2020", "2019"]

  return (
    <div className="space-y-6">
      <div className="w-full md:w-1/3">
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

      <Tabs defaultValue="wins" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="wins">Wins</TabsTrigger>
          <TabsTrigger value="podiums">Podiums</TabsTrigger>
          <TabsTrigger value="poles">Pole Positions</TabsTrigger>
          <TabsTrigger value="fastest">Fastest Laps</TabsTrigger>
        </TabsList>

        <TabsContent value="wins">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <StatCard name="Max Verstappen" team="Red Bull Racing" value={19} total={22} />
            <StatCard name="Sergio Perez" team="Red Bull Racing" value={2} total={22} />
            <StatCard name="Carlos Sainz" team="Ferrari" value={1} total={22} />
          </div>
        </TabsContent>

        <TabsContent value="podiums">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <StatCard name="Max Verstappen" team="Red Bull Racing" value={21} total={22} />
            <StatCard name="Sergio Perez" team="Red Bull Racing" value={9} total={22} />
            <StatCard name="Fernando Alonso" team="Aston Martin" value={8} total={22} />
            <StatCard name="Lewis Hamilton" team="Mercedes" value={6} total={22} />
            <StatCard name="Charles Leclerc" team="Ferrari" value={6} total={22} />
            <StatCard name="Lando Norris" team="McLaren" value={7} total={22} />
          </div>
        </TabsContent>

        <TabsContent value="poles">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <StatCard name="Max Verstappen" team="Red Bull Racing" value={12} total={22} />
            <StatCard name="Charles Leclerc" team="Ferrari" value={5} total={22} />
            <StatCard name="Carlos Sainz" team="Ferrari" value={2} total={22} />
            <StatCard name="George Russell" team="Mercedes" value={1} total={22} />
            <StatCard name="Lando Norris" team="McLaren" value={1} total={22} />
            <StatCard name="Oscar Piastri" team="McLaren" value={1} total={22} />
          </div>
        </TabsContent>

        <TabsContent value="fastest">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <StatCard name="Max Verstappen" team="Red Bull Racing" value={9} total={22} />
            <StatCard name="Lewis Hamilton" team="Mercedes" value={5} total={22} />
            <StatCard name="George Russell" team="Mercedes" value={2} total={22} />
            <StatCard name="Oscar Piastri" team="McLaren" value={2} total={22} />
            <StatCard name="Sergio Perez" team="Red Bull Racing" value={2} total={22} />
            <StatCard name="Charles Leclerc" team="Ferrari" value={1} total={22} />
            <StatCard name="Lando Norris" team="McLaren" value={1} total={22} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function StatCard({ name, team, value, total }: { name: string; team: string; value: number; total: number }) {
  const percentage = (value / total) * 100

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col">
          <span className="font-medium">{name}</span>
          <span className="text-xs text-muted-foreground">{team}</span>
          <div className="flex items-end justify-between mt-2">
            <span className="text-3xl font-bold">{value}</span>
            <span className="text-sm text-muted-foreground">{percentage.toFixed(1)}%</span>
          </div>
          <div className="w-full h-2 bg-secondary mt-2 rounded-full overflow-hidden">
            <div className="h-full bg-primary" style={{ width: `${percentage}%` }} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

