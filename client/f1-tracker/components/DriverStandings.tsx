import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDriverStandings } from "@/lib/services/f1-api";
import { teamColors } from "@/lib/constants/team-colors";
import { DriverImage } from "@/components/ui/driver-image";

export default async function DriverStandings() {
  const data = await getDriverStandings();
  const driverStandings = data.MRData.StandingsTable.StandingsLists[0]?.DriverStandings || [];

  if (!driverStandings.length) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center min-h-[400px]">
          <div className="text-muted-foreground">No driver standings available</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Driver Standings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Pos
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Driver
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Team
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Points
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Wins
                </th>
              </tr>
            </thead>
            <tbody>
              {driverStandings.map(standing => (
                <tr key={standing.Driver.driverId} className="border-b hover:bg-muted/50">
                  <td className="py-3 px-4 text-sm font-medium">{standing.position}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-8 w-8">
                        <DriverImage
                          driverId={standing.Driver.driverId}
                          alt={`${standing.Driver.givenName} ${standing.Driver.familyName}`}
                          className="rounded-full object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-medium">
                          {standing.Driver.givenName} {standing.Driver.familyName}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {standing.Driver.nationality}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{
                          backgroundColor: `#${teamColors[standing.Constructors[0].name] || "000000"}`,
                        }}
                      />
                      <span className="text-sm">{standing.Constructors[0].name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm font-medium">{standing.points}</td>
                  <td className="py-3 px-4 text-sm">{standing.wins}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
