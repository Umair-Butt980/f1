import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getUpcomingRace } from "@/lib/services/f1-api";
import Image from "next/image";

export async function UpcomingRace() {
  const upcomingRace = await getUpcomingRace();

  if (!upcomingRace) {
    return (
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Upcoming Race</CardTitle>
          <CardDescription>No upcoming races scheduled</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  // Format date for display
  const raceDate = new Date(upcomingRace.date);
  const formattedDate = raceDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Format time for display
  const formatTime = (date: string, time: string) => {
    const dateTime = new Date(`${date}T${time}`);
    return dateTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <Card className="max-w-4xl mx-auto">
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
            <div className="space-y-2 md:w-1/2 text-center md:text-left">
              <h3 className="text-xl font-bold">{upcomingRace.name}</h3>
              <p className="text-sm text-muted-foreground">{upcomingRace.circuit.name}</p>
              <p className="text-sm">
                {upcomingRace.circuit.location}, {upcomingRace.circuit.country}
              </p>
              <p className="text-sm font-medium">{formattedDate}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2">
            <div className="flex flex-col p-3 bg-muted rounded-md text-center">
              <span className="text-xs text-muted-foreground">Practice 1</span>
              <span className="text-sm font-medium">
                {formatTime(upcomingRace.sessions.practice1.date, upcomingRace.sessions.practice1.time)}
              </span>
            </div>
            <div className="flex flex-col p-3 bg-muted rounded-md text-center">
              <span className="text-xs text-muted-foreground">Practice 2</span>
              <span className="text-sm font-medium">
                {formatTime(upcomingRace.sessions.practice2.date, upcomingRace.sessions.practice2.time)}
              </span>
            </div>
            <div className="flex flex-col p-3 bg-muted rounded-md text-center">
              <span className="text-xs text-muted-foreground">Practice 3</span>
              <span className="text-sm font-medium">
                {formatTime(upcomingRace.sessions.practice3.date, upcomingRace.sessions.practice3.time)}
              </span>
            </div>
            <div className="flex flex-col p-3 bg-muted rounded-md text-center">
              <span className="text-xs text-muted-foreground">Qualifying</span>
              <span className="text-sm font-medium">
                {formatTime(upcomingRace.sessions.qualifying.date, upcomingRace.sessions.qualifying.time)}
              </span>
            </div>
            <div className="flex flex-col p-3 col-span-2 bg-primary/10 rounded-md text-center">
              <span className="text-xs text-primary">Race</span>
              <span className="text-sm font-medium">
                {formatTime(upcomingRace.sessions.race.date, upcomingRace.sessions.race.time)}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
