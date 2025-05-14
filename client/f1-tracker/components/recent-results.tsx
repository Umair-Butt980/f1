import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getDriverById } from "@/lib/f1-data";
import { getRecentRaceResults } from "@/lib/services/f1-api";
import { Race } from "@/lib/types/f1";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy } from "lucide-react";

export async function RecentResults() {
  const recentRaces = await getRecentRaceResults(3);

  if (recentRaces.length === 0) {
    return (
      <Card className="h-full">
        <CardHeader className="pb-2">
          <CardTitle>Recent Results</CardTitle>
          <CardDescription>No recent races available</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle>Recent Results</CardTitle>
        <CardDescription>Last 3 races</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={recentRaces[0]?.round} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            {recentRaces.map((race: Race) => (
              <TabsTrigger key={race.round} value={race.round} className="text-sm">
                {race.Circuit.Location.locality}
              </TabsTrigger>
            ))}
          </TabsList>
          {recentRaces.map((race: Race) => (
            <TabsContent key={race.round} value={race.round} className="space-y-4">
              <div className="text-center">
                <h3 className="text-xl font-bold">{race.raceName}</h3>
                <p className="text-sm text-muted-foreground">
                  Round {race.round} · {new Date(race.date).toLocaleDateString()}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {race.Circuit.circuitName}, {race.Circuit.Location.country}
                </p>
              </div>

              <div className="grid gap-4">
                {/* Podium Section */}
                <div className="grid grid-cols-3 gap-4 items-end">
                  {race.Results.slice(0, 3).map((result, index) => {
                    const driver = getDriverById(result.Driver.driverId);
                    if (!driver) return null;

                    const podiumClasses = {
                      0: "order-2", // 2nd place
                      1: "order-1", // 1st place
                      2: "order-3", // 3rd place
                    };

                    return (
                      <div
                        key={result.Driver.driverId}
                        className={`flex flex-col items-center ${podiumClasses[index as keyof typeof podiumClasses]}`}
                      >
                        <div className="relative">
                          <Avatar className="h-16 w-16 border-2 border-primary">
                            <AvatarImage
                              src={driver.imageUrl || "/placeholder.svg"}
                              alt={driver.name}
                            />
                            <AvatarFallback>{driver.code}</AvatarFallback>
                          </Avatar>
                          {index === 1 && (
                            <Trophy className="absolute -top-2 -right-2 h-6 w-6 text-yellow-500" />
                          )}
                        </div>
                        <div className="text-center mt-2">
                          <p className="font-bold text-lg">P{result.position}</p>
                          <p className="text-sm font-medium">{driver.name}</p>
                          <p className="text-xs text-muted-foreground">{driver.team}</p>
                          <p className="text-sm font-medium text-primary">{result.points} pts</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Race Details */}
                <div className="grid gap-2 mt-4">
                  {race.Results.slice(0, 3).map(result => {
                    const driver = getDriverById(result.Driver.driverId);
                    if (!driver) return null;

                    return (
                      <div
                        key={result.Driver.driverId}
                        className="flex items-center justify-between p-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-background font-bold text-xs">
                            P{result.position}
                          </div>
                          <Avatar className="h-8 w-8 border">
                            <AvatarImage
                              src={driver.imageUrl || "/placeholder.svg"}
                              alt={driver.name}
                            />
                            <AvatarFallback>{driver.code}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium leading-none">{driver.name}</p>
                            <p className="text-xs text-muted-foreground">{driver.team}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{result.points} pts</p>
                          <p className="text-xs text-muted-foreground">
                            {result.Time?.time || result.status}
                          </p>
                          {result.FastestLap?.rank === "1" && (
                            <p className="text-xs text-yellow-500">Fastest Lap</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="text-center pt-2">
                <a
                  href={`/history?race=${race.round}`}
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  View full results
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
