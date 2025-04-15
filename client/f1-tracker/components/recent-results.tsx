import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getDriverById, getRecentRaces } from "@/lib/f1-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentResults() {
  const recentRaces = getRecentRaces(3);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Recent Results</CardTitle>
        <CardDescription>Last 3 races</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={recentRaces[0]?.id}>
          <TabsList className="grid grid-cols-3 mb-4">
            {recentRaces.map(race => (
              <TabsTrigger key={race.id} value={race.id}>
                {race.circuit.location}
              </TabsTrigger>
            ))}
          </TabsList>
          {recentRaces.map(race => (
            <TabsContent key={race.id} value={race.id} className="space-y-4">
              <h3 className="text-lg font-bold">{race.name}</h3>
              <p className="text-sm text-muted-foreground">
                Round {race.round} · {new Date(race.date).toLocaleDateString()}
              </p>

              <div className="space-y-2">
                {race.results?.slice(0, 3).map(result => {
                  const driver = getDriverById(result.driverId);
                  if (!driver) return null;

                  return (
                    <div
                      key={result.driverId}
                      className="flex items-center justify-between p-2 rounded-md bg-muted"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-background">
                          <span className="text-xs font-bold">P{result.position}</span>
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
                        <p className="text-xs text-muted-foreground">{result.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a href={`/history?race=${race.id}`} className="text-sm text-primary hover:underline">
                View full results →
              </a>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
