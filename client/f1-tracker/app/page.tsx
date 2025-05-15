// import { DriverStandings } from "@/components/driver-standings";
import { RecentResults } from "@/components/recent-results";
import { UpcomingRace } from "@/components/upcoming-race";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getOngoingRace, getPredictedWinner } from "@/lib/f1-data";
import { Flag, Timer } from "lucide-react";
import Link from "next/link";
import { DriverStandingsCard } from "@/components/driver-standings-card";
import { ConstructorStandingsCard } from "@/components/constructor-standings-card";

export default function Home() {
  const ongoingRace = getOngoingRace();
  const predictedWinner = getPredictedWinner();

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        {ongoingRace && (
          <Link
            href="/live"
            className="flex items-center gap-2 px-4 py-2 bg-f1-red text-white rounded-md hover:bg-f1-red/90 transition-colors"
          >
            <Timer className="h-4 w-4" />
            <span>Live: {ongoingRace.name}</span>
          </Link>
        )}
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column - Upcoming Race */}
        <div className="lg:col-span-6">
          <UpcomingRace />
        </div>

        {/* Right Column - Recent Results and Race Calendar */}
        <div className="lg:col-span-6 space-y-6">
          <RecentResults />
          <Card>
            <CardHeader>
              <CardTitle>Race Calendar</CardTitle>
              <CardDescription>2024 Season Schedule</CardDescription>
            </CardHeader>
            {/* <CardContent>
              <RaceCalendar />
            </CardContent> */}
          </Card>
        </div>

        {/* Bottom Row - Standings and Predictions */}
        <div className="lg:col-span-4">
          <DriverStandingsCard />
        </div>
        <div className="lg:col-span-4">
          <ConstructorStandingsCard />
        </div>
        <div className="lg:col-span-4">
          <Card className="text-center h-full">
            <CardHeader className="pb-2">
              <CardTitle>Predicted Winner</CardTitle>
              <CardDescription>Based on current form</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center p-4">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: predictedWinner.teamColor }}
                >
                  <Flag className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold">{predictedWinner.name}</h3>
                <p className="text-sm text-muted-foreground">{predictedWinner.team}</p>
                <div className="mt-4 text-sm">
                  <p>Current Position: P{predictedWinner.position}</p>
                  <p>Points: {predictedWinner.points}</p>
                </div>
                <Link href="/predictions" className="mt-4 text-sm text-primary hover:underline">
                  View detailed predictions →
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
