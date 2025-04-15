import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getUpcomingRace } from "@/lib/f1-data"
import Image from "next/image"

export function UpcomingRace() {
  const upcomingRace = getUpcomingRace()

  if (!upcomingRace) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Race</CardTitle>
          <CardDescription>No upcoming races scheduled</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  // Format date for display
  const raceDate = new Date(upcomingRace.date)
  const formattedDate = raceDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Upcoming Race</CardTitle>
        <CardDescription>Round {upcomingRace.round}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full h-40 md:w-1/2 rounded-md overflow-hidden">
              <Image
                src={upcomingRace.circuit.imageUrl || "/placeholder.svg"}
                alt={upcomingRace.circuit.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2 md:w-1/2">
              <h3 className="text-xl font-bold">{upcomingRace.name}</h3>
              <p className="text-sm text-muted-foreground">{upcomingRace.circuit.name}</p>
              <p className="text-sm">
                {upcomingRace.circuit.location}, {upcomingRace.circuit.country}
              </p>
              <p className="text-sm font-medium">{formattedDate}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2">
            <div className="flex flex-col p-3 bg-muted rounded-md">
              <span className="text-xs text-muted-foreground">Practice 1</span>
              <span className="text-sm font-medium">Fri 13:30</span>
            </div>
            <div className="flex flex-col p-3 bg-muted rounded-md">
              <span className="text-xs text-muted-foreground">Practice 2</span>
              <span className="text-sm font-medium">Fri 17:00</span>
            </div>
            <div className="flex flex-col p-3 bg-muted rounded-md">
              <span className="text-xs text-muted-foreground">Practice 3</span>
              <span className="text-sm font-medium">Sat 12:30</span>
            </div>
            <div className="flex flex-col p-3 bg-muted rounded-md">
              <span className="text-xs text-muted-foreground">Qualifying</span>
              <span className="text-sm font-medium">Sat 16:00</span>
            </div>
            <div className="flex flex-col p-3 col-span-2 bg-primary/10 rounded-md">
              <span className="text-xs text-primary">Race</span>
              <span className="text-sm font-medium">Sun 15:00</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
