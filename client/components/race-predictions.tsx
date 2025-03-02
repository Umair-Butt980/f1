import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"

export function RacePredictions() {
  // Mock data - in a real app, this would be calculated by a machine learning model
  const predictions = [
    { position: 1, driver: "Max Verstappen", team: "Red Bull Racing", probability: 68 },
    { position: 2, driver: "Charles Leclerc", team: "Ferrari", probability: 42 },
    { position: 3, driver: "Sergio Perez", team: "Red Bull Racing", probability: 38 },
    { position: 4, driver: "Carlos Sainz", team: "Ferrari", probability: 35 },
    { position: 5, driver: "Lewis Hamilton", team: "Mercedes", probability: 30 },
    { position: 6, driver: "George Russell", team: "Mercedes", probability: 28 },
    { position: 7, driver: "Lando Norris", team: "McLaren", probability: 25 },
    { position: 8, driver: "Fernando Alonso", team: "Aston Martin", probability: 22 },
    { position: 9, driver: "Oscar Piastri", team: "McLaren", probability: 18 },
    { position: 10, driver: "Lance Stroll", team: "Aston Martin", probability: 12 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">Monaco Grand Prix</h3>
          <p className="text-sm text-muted-foreground">Predictions based on historical data and current form</p>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">Pos</TableHead>
            <TableHead>Driver</TableHead>
            <TableHead className="hidden md:table-cell">Team</TableHead>
            <TableHead className="text-right">Win Probability</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {predictions.map((prediction) => (
            <TableRow key={prediction.position}>
              <TableCell className="font-medium">{prediction.position}</TableCell>
              <TableCell>{prediction.driver}</TableCell>
              <TableCell className="hidden md:table-cell">{prediction.team}</TableCell>
              <TableCell>
                <div className="flex items-center justify-end gap-2">
                  <Progress value={prediction.probability} className="w-24" />
                  <span className="text-sm">{prediction.probability}%</span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="rounded-lg border p-4">
        <h4 className="text-sm font-medium mb-2">Key Factors</h4>
        <ul className="text-sm space-y-1">
          <li>• Red Bull has won 4 of the last 5 races at Monaco</li>
          <li>• Charles Leclerc has secured pole position for the last 2 years</li>
          <li>• Weather forecast indicates a 30% chance of rain</li>
          <li>• Mercedes has shown improved pace in the last two races</li>
          <li>• McLaren has brought significant upgrades to their car</li>
        </ul>
      </div>
    </div>
  )
}

