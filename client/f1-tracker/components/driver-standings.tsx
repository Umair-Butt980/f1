import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { drivers } from "@/lib/f1-data"

export function DriverStandings() {
  // Get top 5 drivers
  const topDrivers = [...drivers].sort((a, b) => a.position - b.position).slice(0, 5)

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Driver Standings</CardTitle>
        <CardDescription>2025 Season</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topDrivers.map((driver) => (
            <div key={driver.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-1 h-10 rounded-full" style={{ backgroundColor: driver.teamColor }} />
                <Avatar className="h-10 w-10 border">
                  <AvatarImage src={driver.imageUrl || "/placeholder.svg"} alt={driver.name} />
                  <AvatarFallback>{driver.code}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">{driver.name}</p>
                  <p className="text-sm text-muted-foreground">{driver.team}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-right">
                  <p className="text-sm font-medium">{driver.points} PTS</p>
                  <p className="text-xs text-muted-foreground">P{driver.position}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="pt-2">
            <a href="/stats" className="text-sm text-primary hover:underline">
              View full standings →
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
