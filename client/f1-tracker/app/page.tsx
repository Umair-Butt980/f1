import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Flag, LineChart, Timer, Trophy } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { UpcomingRace } from "@/components/upcoming-race"
import { DriverStandings } from "@/components/driver-standings"
import { RecentResults } from "@/components/recent-results"

export default function Home() {
  return (
    <div className="container py-6 space-y-8">
      {/* Hero Section */}
      <section className="py-12 space-y-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-block rounded-lg bg-red-600 px-3 py-1 text-sm text-white">2024 Season</div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Your Ultimate F1 Companion</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Track live race data, analyze past races, and predict winners with our comprehensive F1 dashboard.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/live">
                <Timer className="mr-2 h-4 w-4" />
                Live Race
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/predictions">
                <Trophy className="mr-2 h-4 w-4" />
                Race Predictions
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Race</TabsTrigger>
          <TabsTrigger value="standings">Standings</TabsTrigger>
          <TabsTrigger value="results">Recent Results</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Next Race</CardTitle>
                <Timer className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Monaco Grand Prix</div>
                <p className="text-xs text-muted-foreground">May 26, 2024 - 15:00 GMT</p>
                <div className="mt-4 flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=60"
                    alt="Monaco Flag"
                    width={60}
                    height={40}
                    className="rounded mr-2"
                  />
                  <div>
                    <div className="font-medium">Circuit de Monaco</div>
                    <div className="text-xs text-muted-foreground">Monte Carlo, Monaco</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/live">
                    <Timer className="mr-2 h-4 w-4" />
                    Track Live
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Driver Standings</CardTitle>
                <Trophy className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-6 text-center font-bold">1</div>
                    <Image
                      src="/placeholder.svg?height=24&width=36"
                      alt="Netherlands Flag"
                      width={36}
                      height={24}
                      className="mx-2 rounded"
                    />
                    <div className="font-medium">Max Verstappen</div>
                    <div className="ml-auto font-bold">143 pts</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 text-center font-bold">2</div>
                    <Image
                      src="/placeholder.svg?height=24&width=36"
                      alt="Monaco Flag"
                      width={36}
                      height={24}
                      className="mx-2 rounded"
                    />
                    <div className="font-medium">Charles Leclerc</div>
                    <div className="ml-auto font-bold">105 pts</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 text-center font-bold">3</div>
                    <Image
                      src="/placeholder.svg?height=24&width=36"
                      alt="UK Flag"
                      width={36}
                      height={24}
                      className="mx-2 rounded"
                    />
                    <div className="font-medium">Lando Norris</div>
                    <div className="ml-auto font-bold">96 pts</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/stats">
                    <LineChart className="mr-2 h-4 w-4" />
                    Full Standings
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Team Standings</CardTitle>
                <Trophy className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-6 text-center font-bold">1</div>
                    <div className="h-4 w-4 rounded-full bg-red-600 mx-2"></div>
                    <div className="font-medium">Red Bull Racing</div>
                    <div className="ml-auto font-bold">239 pts</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 text-center font-bold">2</div>
                    <div className="h-4 w-4 rounded-full bg-red-500 mx-2"></div>
                    <div className="font-medium">Ferrari</div>
                    <div className="ml-auto font-bold">187 pts</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 text-center font-bold">3</div>
                    <div className="h-4 w-4 rounded-full bg-orange-500 mx-2"></div>
                    <div className="font-medium">McLaren</div>
                    <div className="ml-auto font-bold">156 pts</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/stats">
                    <LineChart className="mr-2 h-4 w-4" />
                    Full Standings
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Results</CardTitle>
                <CardDescription>Last race: Miami Grand Prix</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center py-1">
                    <div className="w-6 text-center font-bold">1</div>
                    <Image
                      src="/placeholder.svg?height=24&width=36"
                      alt="UK Flag"
                      width={36}
                      height={24}
                      className="mx-2 rounded"
                    />
                    <div className="font-medium">Lando Norris</div>
                    <div className="ml-auto text-sm text-muted-foreground">1:30:49.876</div>
                  </div>
                  <div className="flex items-center py-1">
                    <div className="w-6 text-center font-bold">2</div>
                    <Image
                      src="/placeholder.svg?height=24&width=36"
                      alt="Netherlands Flag"
                      width={36}
                      height={24}
                      className="mx-2 rounded"
                    />
                    <div className="font-medium">Max Verstappen</div>
                    <div className="ml-auto text-sm text-muted-foreground">+7.612s</div>
                  </div>
                  <div className="flex items-center py-1">
                    <div className="w-6 text-center font-bold">3</div>
                    <Image
                      src="/placeholder.svg?height=24&width=36"
                      alt="Monaco Flag"
                      width={36}
                      height={24}
                      className="mx-2 rounded"
                    />
                    <div className="font-medium">Charles Leclerc</div>
                    <div className="ml-auto text-sm text-muted-foreground">+9.920s</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/history">
                    <Flag className="mr-2 h-4 w-4" />
                    View Race History
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Race Predictions</CardTitle>
                <CardDescription>Monaco Grand Prix - May 26, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center py-1">
                    <div className="w-6 text-center font-bold">1</div>
                    <Image
                      src="/placeholder.svg?height=24&width=36"
                      alt="Monaco Flag"
                      width={36}
                      height={24}
                      className="mx-2 rounded"
                    />
                    <div className="font-medium">Charles Leclerc</div>
                    <div className="ml-auto text-sm text-muted-foreground">32% chance</div>
                  </div>
                  <div className="flex items-center py-1">
                    <div className="w-6 text-center font-bold">2</div>
                    <Image
                      src="/placeholder.svg?height=24&width=36"
                      alt="Netherlands Flag"
                      width={36}
                      height={24}
                      className="mx-2 rounded"
                    />
                    <div className="font-medium">Max Verstappen</div>
                    <div className="ml-auto text-sm text-muted-foreground">28% chance</div>
                  </div>
                  <div className="flex items-center py-1">
                    <div className="w-6 text-center font-bold">3</div>
                    <Image
                      src="/placeholder.svg?height=24&width=36"
                      alt="UK Flag"
                      width={36}
                      height={24}
                      className="mx-2 rounded"
                    />
                    <div className="font-medium">Lando Norris</div>
                    <div className="ml-auto text-sm text-muted-foreground">15% chance</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/predictions">
                    <Trophy className="mr-2 h-4 w-4" />
                    View Predictions
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="upcoming">
          <UpcomingRace />
        </TabsContent>

        <TabsContent value="standings">
          <DriverStandings />
        </TabsContent>

        <TabsContent value="results">
          <RecentResults />
        </TabsContent>
      </Tabs>
    </div>
  )
}
