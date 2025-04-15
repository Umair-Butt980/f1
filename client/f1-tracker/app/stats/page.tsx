import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { drivers, teams } from "@/lib/f1-data"
import Image from "next/image"

export default function StatsPage() {
  // Sort drivers by position
  const sortedDrivers = [...drivers].sort((a, b) => a.position - b.position)

  // Sort teams by position
  const sortedTeams = [...teams].sort((a, b) => a.position - b.position)

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Statistics</h1>

      <Tabs defaultValue="drivers">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="drivers">Driver Standings</TabsTrigger>
          <TabsTrigger value="constructors">Constructor Standings</TabsTrigger>
        </TabsList>

        <TabsContent value="drivers" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Driver Standings</CardTitle>
              <CardDescription>2025 Season</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16">Pos</TableHead>
                    <TableHead>Driver</TableHead>
                    <TableHead>Team</TableHead>
                    <TableHead className="text-right">Points</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedDrivers.map((driver) => (
                    <TableRow key={driver.id}>
                      <TableCell className="font-medium">{driver.position}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-8 rounded-full" style={{ backgroundColor: driver.teamColor }} />
                          <Avatar className="h-8 w-8 border">
                            <AvatarImage src={driver.imageUrl || "/placeholder.svg"} alt={driver.name} />
                            <AvatarFallback>{driver.code}</AvatarFallback>
                          </Avatar>
                          <span>{driver.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{driver.team}</TableCell>
                      <TableCell className="text-right">{driver.points}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="constructors" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Constructor Standings</CardTitle>
              <CardDescription>2025 Season</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16">Pos</TableHead>
                    <TableHead>Team</TableHead>
                    <TableHead className="text-right">Points</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedTeams.map((team) => (
                    <TableRow key={team.id}>
                      <TableCell className="font-medium">{team.position}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-8 rounded-full" style={{ backgroundColor: team.color }} />
                          <div className="relative h-8 w-16">
                            <Image
                              src={team.logo || "/placeholder.svg"}
                              alt={team.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <span>{team.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">{team.points}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Season Statistics</CardTitle>
          <CardDescription>Key performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">10</h3>
              <p className="text-sm text-muted-foreground">Races Completed</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">5</h3>
              <p className="text-sm text-muted-foreground">Different Winners</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">8</h3>
              <p className="text-sm text-muted-foreground">Pole Positions</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">15</h3>
              <p className="text-sm text-muted-foreground">Fastest Laps</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
