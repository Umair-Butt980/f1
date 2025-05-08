import { getConstructorStandings } from "@/lib/services/f1-api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { teamColors } from "@/lib/constants/team-colors";
import { ConstructorStanding } from "@/types/f1";

export default async function ConstructorStandings() {
  const data = await getConstructorStandings();
  const standings = data.MRData.StandingsTable.StandingsLists[0]?.ConstructorStandings || [];

  if (!standings.length) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center min-h-[400px]">
          <div className="text-muted-foreground">No constructor standings available</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Constructor Standings</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">Pos</TableHead>
              <TableHead>Team</TableHead>
              <TableHead className="text-right">Points</TableHead>
              <TableHead className="text-right">Wins</TableHead>
              <TableHead>Nationality</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {standings.map((standing: ConstructorStanding) => (
              <TableRow key={standing.Constructor.constructorId}>
                <TableCell className="font-medium">{standing.position}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: teamColors[standing.Constructor.name] || "#808080",
                      }}
                    />
                    {standing.Constructor.name}
                  </div>
                </TableCell>
                <TableCell className="text-right">{standing.points}</TableCell>
                <TableCell className="text-right">{standing.wins}</TableCell>
                <TableCell>{standing.Constructor.nationality}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
