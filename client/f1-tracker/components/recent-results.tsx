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
        <Tabs defaultValue={recentRaces[0]?.id} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            {recentRaces.map(race => (
              <TabsTrigger key={race.id} value={race.id} className="text-sm">
                {race.circuit.location}
              </TabsTrigger>
            ))}
          </TabsList>
          {recentRaces.map(race => (
            <TabsContent key={race.id} value={race.id} className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-bold">{race.name}</h3>
                <p className="text-sm text-muted-foreground">
                  Round {race.round} · {new Date(race.date).toLocaleDateString()}
                </p>
              </div>

              <div className="grid gap-3">
                {race.results?.slice(0, 3).map(result => {
                  const driver = getDriverById(result.driverId);
                  if (!driver) return null;

                  return (
                    <div
                      key={result.driverId}
                      className="flex items-center justify-between p-3 rounded-md bg-muted hover:bg-muted/80 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-background font-bold">
                          P{result.position}
                        </div>
                        <Avatar className="h-10 w-10 border">
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

              <div className="text-center pt-2">
                <a 
                  href={`/history?race=${race.id}`} 
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
