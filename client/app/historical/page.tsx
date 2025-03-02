import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HistoricalRaceResults } from "@/components/historical-race-results"
import { SeasonStats } from "@/components/season-stats"
import { CircuitStats } from "@/components/circuit-stats"

export default function HistoricalPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-6">Historical Race Analysis</h1>

      <Card>
        <CardHeader>
          <CardTitle>Historical Data</CardTitle>
          <CardDescription>Analyze past race results, driver performances, and circuit statistics</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="races" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="races">Race Results</TabsTrigger>
              <TabsTrigger value="seasons">Season Stats</TabsTrigger>
              <TabsTrigger value="circuits">Circuit Stats</TabsTrigger>
            </TabsList>
            <TabsContent value="races">
              <HistoricalRaceResults />
            </TabsContent>
            <TabsContent value="seasons">
              <SeasonStats />
            </TabsContent>
            <TabsContent value="circuits">
              <CircuitStats />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

