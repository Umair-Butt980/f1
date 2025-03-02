import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LiveRaceData } from "@/components/live-race-data"
import { CircuitInfo } from "@/components/circuit-info"
import { RaceStandings } from "@/components/race-standings"

export default function HomePage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-6">Live Race Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Current Race</CardTitle>
            <CardDescription>Miami Grand Prix - Miami International Autodrome</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="live" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="live">Live Timing</TabsTrigger>
                <TabsTrigger value="circuit">Circuit Info</TabsTrigger>
                <TabsTrigger value="standings">Standings</TabsTrigger>
              </TabsList>
              <TabsContent value="live">
                <LiveRaceData />
              </TabsContent>
              <TabsContent value="circuit">
                <CircuitInfo />
              </TabsContent>
              <TabsContent value="standings">
                <RaceStandings />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

