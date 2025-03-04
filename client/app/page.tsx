import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LiveRaceData } from "@/components/live-race-data"
import { CircuitInfo } from "@/components/circuit-info"
import { RaceStandings } from "@/components/race-standings"

export default function HomePage() {
  return (
    <div className="container space-y-8 py-8">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Live Race Dashboard</h1>
        <Card>
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
              <TabsContent value="live" className="mt-4">
                <LiveRaceData />
              </TabsContent>
              <TabsContent value="circuit" className="mt-4">
                <CircuitInfo />
              </TabsContent>
              <TabsContent value="standings" className="mt-4">
                <RaceStandings />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

